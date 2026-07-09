import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { testimonials } from '../data/portfolioData'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="max-w-4xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Client <span className="gradient-text">testimonials</span>
      </motion.h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center gap-1 mb-4 text-warning">
              {Array.from({ length: current.rating }).map((_, i) => (
                <FiStar key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-muted leading-relaxed mb-6">{current.review}</p>
            <h4 className="font-semibold">{current.name}</h4>
            <p className="text-sm text-primary">{current.company}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full glass hover:border-primary/50 transition-colors"
          >
            <FiChevronLeft />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? 'bg-primary' : 'bg-muted/30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2 rounded-full glass hover:border-primary/50 transition-colors"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
