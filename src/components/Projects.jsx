import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Featured <span className="gradient-text">projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform"
          >
            <div className="h-40 rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center text-muted text-sm">
              Project screenshot
            </div>

            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm text-muted">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {t}
                </span>
              ))}
            </div>

            <ul className="text-sm text-muted space-y-1 list-disc list-inside">
              {project.features.slice(0, 3).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="flex gap-4 mt-auto pt-2">
              <a
                href={project.live}
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                <FiExternalLink size={14} /> Live demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm text-muted hover:text-current"
              >
                <FiGithub size={14} /> Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
