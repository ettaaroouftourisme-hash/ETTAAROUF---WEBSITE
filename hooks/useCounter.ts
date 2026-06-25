'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Anime un compteur de 0 vers `target` quand l'élément est visible.
 */
export function useCounter(target: number, duration = 2000) {
  const [count, setCount]         = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const start     = performance.now()
    const step      = (timestamp: number) => {
      const elapsed  = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      // Easing easeOutExpo
      const eased    = 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [hasStarted, target, duration])

  return { count, ref }
}
