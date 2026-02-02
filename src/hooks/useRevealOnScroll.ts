import { useEffect } from 'react'

export function useRevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (nodes.length === 0) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      for (const node of nodes) node.setAttribute('data-reveal-state', 'shown')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            el.setAttribute('data-reveal-state', 'shown')
            io.unobserve(el)
          }
        }
      },
      { root: null, threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    for (const node of nodes) {
      node.setAttribute('data-reveal-state', 'hidden')
      io.observe(node)
    }

    return () => io.disconnect()
  }, [])
}
