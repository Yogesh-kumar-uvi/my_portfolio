import { motion } from 'framer-motion'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiSocketdotio,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiIntellijidea,
  SiGooglegemini,
  SiClaude,
  SiGithubcopilot,
  SiPerplexity,
} from 'react-icons/si'
import { FiCode } from 'react-icons/fi'
import { skills } from '../data/portfolioData'

// Maps skill name -> icon + real official brand color.

const iconMap = {
  'React.js': { Icon: SiReact, color: '#61DAFB' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  HTML: { Icon: SiHtml5, color: '#E34F26' },
  CSS: { Icon: SiCss, color: '#1572B6' },
  Bootstrap: { Icon: SiBootstrap, color: '#7952B3' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  Redux: { Icon: SiRedux, color: '#764ABC' },
  'Node.js': { Icon: SiNodedotjs, color: '#3C873A' },
  'Express.js': { Icon: SiExpress, color: '#0A0A0A', chip: true },
  'JWT Auth': { Icon: SiJsonwebtokens, color: '#FB015B' },
  'Socket.io': { Icon: SiSocketdotio, color: '#010101', chip: true },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  Mongoose: { Icon: SiMongoose, color: '#880000' },
  'MongoDB Atlas': { Icon: SiMongodb, color: '#47A248' },
  Git: { Icon: SiGit, color: '#F05032' },
  GitHub: { Icon: SiGithub, color: '#181717', chip: true },
  Postman: { Icon: SiPostman, color: '#FF6C37' },
  Vercel: { Icon: SiVercel, color: '#000000', chip: true },
  Render: { Icon: SiRender, color: '#46E3B7' },
  'IntelliJ IDEA': { Icon: SiIntellijidea, color: '#000000', chip: true },
  'Google Gemini': { Icon: SiGooglegemini, color: '#8E75FF' },
  Claude: { Icon: SiClaude, color: '#D97757' },
  'GitHub Copilot': { Icon: SiGithubcopilot, color: '#000000', chip: true },
  'Perplexity AI': { Icon: SiPerplexity, color: '#1FB8CD' },
  // ChatGPT and Google Antigravity have no dedicated brand icon in this set, so they use the generic fallback below.
}

const categoryAccent = {
  Frontend: 'from-primary/15 to-primary/5 hover:border-primary/50',
  Backend: 'from-secondary/15 to-secondary/5 hover:border-secondary/50',
  Databases: 'from-success/15 to-success/5 hover:border-success/50',
  Tools: 'from-accent/15 to-accent/5 hover:border-accent/50',
  'AI Platforms': 'from-[#D97757]/15 to-[#D97757]/5 hover:border-[#D97757]/50',
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-2 text-center"
      >
        Skills &amp; <span className="gradient-text">tools</span>
      </motion.h2>
      <p className="text-center text-muted text-sm mb-12">Technologies I build with, day to day</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`glass rounded-2xl p-6 bg-gradient-to-br transition-colors ${categoryAccent[category] || ''}`}
          >
            <h3 className="font-semibold mb-5 flex items-center gap-2">
              {category}
              <span className="text-xs font-normal text-muted">({items.length})</span>
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {items.map((name) => {
                const match = iconMap[name]
                return (
                  <motion.span
                    key={name}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full glass text-sm cursor-default hover:border-primary/40 transition-colors"
                  >
                    {match ? (
                      match.chip ? (
                        <span
                          className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                          style={{ backgroundColor: '#F8FAFC' }}
                        >
                          <match.Icon size={12} style={{ color: match.color }} />
                        </span>
                      ) : (
                        <match.Icon size={15} style={{ color: match.color }} className="shrink-0" />
                      )
                    ) : (
                      <FiCode size={15} className="text-muted shrink-0" />
                    )}
                    {name}
                  </motion.span>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}