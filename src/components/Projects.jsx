import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Monochrome Commerce',
    desc: 'Minimal e-commerce concept focused on motion and clarity.',
    tag: 'Web · Interaction',
    link: '#',
  },
  {
    title: 'Droplet Visualizer',
    desc: 'Realtime shader play with fluid dynamics inspired forms.',
    tag: 'R&D · Graphics',
    link: '#',
  },
  {
    title: 'Studio Portfolio',
    desc: 'Identity and site for a creative technology studio.',
    tag: 'Brand · Site',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected work</h2>
            <p className="mt-2 text-zinc-400">A few recent projects in a stripped-back style.</p>
          </div>
          <div className="hidden sm:block text-sm text-zinc-400">Black · White · Motion</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wide text-zinc-400">{p.tag}</div>
                  <h3 className="mt-1 text-xl font-medium">{p.title}</h3>
                </div>
                <ExternalLink className="opacity-50 group-hover:opacity-100 transition-opacity" size={18} />
              </div>
              <p className="mt-3 text-sm text-zinc-300">{p.desc}</p>

              <div className="mt-6 h-32 rounded-lg bg-gradient-to-br from-white/10 to-white/0 group-hover:from-white/20 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
