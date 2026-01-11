import React, { useState, useLayoutEffect, useRef } from "react"

import { cn } from "@/lib/utils"

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  squares?: [number, number] // [horizontal, vertical]
  className?: string
  squaresClassName?: string
}

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [defaultHorizontal, defaultVertical] = squares
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [containerSize, setContainerSize] = useState(() => ({
    w: typeof window !== "undefined" ? window.innerWidth : 0,
    h: typeof window !== "undefined" ? window.innerHeight : 0,
  }))
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current
    // measure synchronously before paint to avoid layout jumps
    setContainerSize({ w: el.clientWidth, h: el.clientHeight })
    // enable transitions on the next frame so layout is stable
    requestAnimationFrame(() => setReady(true))
    const ro = new ResizeObserver(() => {
      setContainerSize({ w: el.clientWidth, h: el.clientHeight })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const horizontal = containerSize.w
    ? Math.max(1, Math.ceil(containerSize.w / width))
    : defaultHorizontal
  const vertical = containerSize.h
    ? Math.max(1, Math.ceil(containerSize.h / height))
    : defaultVertical

  return (
    <div ref={containerRef} className={cn("absolute inset-0", className)}>
      <svg
        width={containerSize.w || width * horizontal}
        height={containerSize.h || height * vertical}
        viewBox={`0 0 ${width * horizontal} ${height * vertical}`}
        className="w-full h-full border border-gray-400/30"
        {...props}
      >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width
        const y = Math.floor(index / horizontal) * height
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-gray-400/30 pointer-events-auto",
              ready && "transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
              hoveredSquare === index ? "fill-gray-300/30" : "fill-transparent",
              squaresClassName
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        )
      })}
      </svg>
    </div>
  )
}
