import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si'
import { profile } from '../data/portfolioData'

const icons = [SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiJavascript]

function useTypingEffect(words, speed = 90, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypingEffect(profile.headlines)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(124,58,237,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(6,182,212,0.2), transparent 40%)',
        }}
      />

      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/30 hidden md:block"
          style={{ left: `${10 + i * 15}%`, top: `${15 + (i % 3) * 22}%` }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-success mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> {profile.availability}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted h-9 mb-6"
        >
          {typed}
          <span className="animate-pulse">|</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto text-muted mb-8"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-medium hover:scale-105 transition-transform"
          >
            <FiDownload /> Download resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-3 rounded-full border border-muted/30 text-sm font-medium hover:border-primary transition-colors"
          >
            Hire me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-5 text-muted"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub"><FiGithub size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
          <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors" aria-label="Email"><FiMail size={20} /></a>
          <span className="flex items-center gap-1 text-sm"><FiMapPin size={16} /> {profile.location}</span>
        </motion.div>
      </div>
    </section>
  )
}
