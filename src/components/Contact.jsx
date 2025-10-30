import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Let’s build something together
          </motion.h2>
          <p className="mt-4 text-zinc-300">
            Tell me about your project. I typically respond within a day.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              <Mail size={18} /> Email me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          <p className="mt-10 text-xs text-zinc-500">© {new Date().getFullYear()} — All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
