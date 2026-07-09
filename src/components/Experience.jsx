import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Work <span className="gradient-text">experience</span>
      </motion.h2>

      <div className="relative border-l border-muted/20 pl-8 space-y-10">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-primary" />
            <p className="text-xs text-muted">{exp.duration}</p>
            <h3 className="font-semibold text-lg">{exp.position}</h3>
            <p className="text-primary text-sm mb-3">{exp.company}</p>
            <ul className="text-sm text-muted space-y-1 list-disc list-inside mb-3">
              {exp.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
