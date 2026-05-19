'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { UtensilsCrossed, Frown, AlertTriangle, ChevronDown } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ROYAL_GOLD = '#D4A017'
const ROYAL_MAROON = '#800020'

/* ------------------------------------------------------------------ */
/*  Problem Data — SB7 #2 + #6: Problem + Failure Avoidance            */
/* ------------------------------------------------------------------ */

interface ProblemCard {
  icon: React.ElementType
  title: string
  description: string
}

const problems: ProblemCard[] = [
  {
    icon: UtensilsCrossed,
    title: 'Bad Food Quality',
    description:
      "Your guests remember the food long after they forget the décor. Serve something forgettable, and that's all they'll talk about.",
  },
  {
    icon: Frown,
    title: 'Stress on Your Big Day',
    description:
      'You should be celebrating, not managing caterers. The wrong team leaves YOU doing the work.',
  },
  {
    icon: AlertTriangle,
    title: 'Hidden Costs & Surprises',
    description:
      "Budget blowouts and last-minute surprises can turn your dream event into a financial nightmare.",
  },
]

/* ------------------------------------------------------------------ */
/*  Framer-motion variants                                             */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

/* ------------------------------------------------------------------ */
/*  ProblemSection — "What's At Stake"                                 */
/*  SB7: Problem + Failure Avoidance                                   */
/* ------------------------------------------------------------------ */

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative bg-white py-20 md:py-28 overflow-hidden"
      style={{ borderTop: '1px solid transparent' }}
    >
      {/* Gold decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

      {/* Subtle mandala background pattern */}
      <div className="absolute inset-0 mandala-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Header ===== */}
        <div className="text-center mb-14 md:mb-20">
          {/* Tagline / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-lato)]"
              style={{
                color: ROYAL_MAROON,
                backgroundColor: 'rgba(128,0,32,0.05)',
                border: '1px solid rgba(128,0,32,0.12)',
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ROYAL_MAROON }}
              />
              What&apos;s At Stake
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ROYAL_MAROON }}
              />
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-shadow-subtle"
            style={{ color: ROYAL_MAROON }}
          >
            3 Things That Can Ruin<br className="hidden sm:block" /> Your Special Day
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-base sm:text-lg text-gray-600 font-[family-name:var(--font-lato)] max-w-2xl mx-auto leading-relaxed"
          >
            Don&apos;t let these common catering mistakes turn your celebration into a disaster
          </motion.p>

          {/* Gold ornamental divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex items-center justify-center gap-2"
          >
            <span
              className="block h-px w-10"
              style={{
                background: `linear-gradient(to right, transparent, ${ROYAL_GOLD})`,
              }}
            />
            <span className="text-royal-gold text-sm">&#10022;</span>
            <span
              className="block h-px w-10"
              style={{
                background: `linear-gradient(to left, transparent, ${ROYAL_GOLD})`,
              }}
            />
          </motion.div>
        </div>

        {/* ===== Problem Cards Grid ===== */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {problems.map((problem, index) => {
            const IconComponent = problem.icon

            return (
              <motion.div
                key={problem.title}
                custom={index + 1}
                variants={fadeUp}
                className="card-royal-hover group relative rounded-2xl border bg-white p-6 sm:p-8 text-left"
                style={{
                  borderColor: '#E8E4DD',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                  borderLeft: `3px solid ${ROYAL_MAROON}`,
                }}
              >
                {/* Icon container */}
                <div
                  className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full"
                  style={{
                    backgroundColor: 'rgba(128,0,32,0.06)',
                  }}
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: ROYAL_MAROON }}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Card heading */}
                <h3
                  className="mb-3 font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold leading-snug"
                  style={{ color: ROYAL_MAROON }}
                >
                  {problem.title}
                </h3>

                {/* Card body */}
                <p className="text-gray-700 font-[family-name:var(--font-lato)] text-sm sm:text-base leading-relaxed">
                  {problem.description}
                </p>

                {/* Subtle bottom gold accent on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${ROYAL_GOLD}, transparent)`,
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* ===== Transition Line to GuideSection ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-20 text-center"
        >
          <p
            className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl md:text-2xl font-semibold"
            style={{ color: '#333333' }}
          >
            The good news?{' '}
            <span style={{ color: '#1A1A1A' }}>You don&apos;t have to risk any of this.</span>
          </p>

          {/* Downward arrow indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-4 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown
                className="w-6 h-6"
                style={{ color: ROYAL_GOLD }}
                strokeWidth={2}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
