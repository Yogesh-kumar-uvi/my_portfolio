import { motion } from 'framer-motion'
import { profile } from '../data/portfolioData'

const facts = [
  { label: 'Experience', value: profile.yearsExperience },
  { label: 'Role', value: 'MERN Developer' },
  { label: 'Status', value: profile.availability },
]

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        About <span className="gradient-text">me</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-4 text-muted leading-relaxed"
        >
          <p>{profile.summary}</p>
          <p>{profile.bio}</p>
          <p>
            Outside of client work, I practice data structures and algorithms regularly and enjoy
            building creative side projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {facts.map((f) => (
            <div key={f.label} className="glass rounded-2xl p-4">
              <p className="text-xs text-muted uppercase tracking-wide">{f.label}</p>
              <p className="text-lg font-semibold">{f.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
