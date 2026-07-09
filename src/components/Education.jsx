import { motion } from 'framer-motion'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        <span className="gradient-text">Education</span>
      </motion.h2>

      <div className="relative border-l border-muted/20 pl-8 space-y-10">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-secondary" />
            <p className="text-xs text-muted">{edu.duration}</p>
            <h3 className="font-semibold text-lg">{edu.institution}</h3>
            <p className="text-sm text-muted mt-2">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
