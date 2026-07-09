import { FiArrowUp } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-muted/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:border-primary/50 transition-colors"
          aria-label="Back to top"
        >
          <FiArrowUp size={14} /> Back to top
        </button>
      </div>
    </footer>
  )
}
