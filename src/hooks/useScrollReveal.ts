'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'

export const scrollRevealContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const scrollRevealItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return {
    ref,
    inView,
    containerVariants: scrollRevealContainerVariants,
    itemVariants: scrollRevealItemVariants,
  }
}
