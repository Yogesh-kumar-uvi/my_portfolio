import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle, FiPhone, FiInstagram, FiTwitter } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  // status: 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    return e
  }

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file (see .env.example).'
      )
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus((s) => (s === 'sending' ? s : 'idle')), 5000)
    }
  }

  const sending = status === 'sending'

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4 text-center"
      >
        Let's <span className="gradient-text">talk</span>
      </motion.h2>
      <p className="text-center text-muted mb-12">
        Have a project in mind or a role that fits? Send a message — I usually reply within a day.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange('name')}
              disabled={sending}
              className="w-full px-4 py-3 rounded-xl glass outline-none focus:ring-2 focus:ring-primary text-sm disabled:opacity-60"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange('email')}
              disabled={sending}
              className="w-full px-4 py-3 rounded-xl glass outline-none focus:ring-2 focus:ring-primary text-sm disabled:opacity-60"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              placeholder="Your message"
              rows={5}
              value={form.message}
              onChange={handleChange('message')}
              disabled={sending}
              className="w-full px-4 py-3 rounded-xl glass outline-none focus:ring-2 focus:ring-primary text-sm resize-none disabled:opacity-60"
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={sending}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <FiSend size={14} /> Send message
              </>
            )}
          </button>

          <AnimatePresence mode="wait">
            {status === 'sent' && (
              <motion.p
                key="sent"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-success text-sm"
              >
                <FiCheck /> Message sent — thanks for reaching out.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <FiAlertCircle /> Couldn't send — check your EmailJS setup and try again.
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        <div className="space-y-4">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary/50 transition-colors">
            <FiMail /> {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary/50 transition-colors">
            <FiGithub /> GitHub profile
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary/50 transition-colors">
            <FiLinkedin /> LinkedIn profile
          </a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary/50 transition-colors">
            <FiPhone /> {profile.phone}
          </a>
          <div className="flex gap-4 pt-2">
            <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-3 glass rounded-full hover:border-primary/50 transition-colors">
              <FiInstagram size={18} />
            </a>
            <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" className="p-3 glass rounded-full hover:border-primary/50 transition-colors">
              <FiTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
