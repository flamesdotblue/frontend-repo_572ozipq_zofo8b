import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              I’m a creative developer focused on sleek, performant interfaces. My work lives at the intersection of design and engineering — where small interaction details make products feel alive.
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Tooling I enjoy: React, WebGL/Spline, Framer Motion, and clean CSS architectures.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 p-6 bg-white/5"
          >
            <dl className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-zinc-400">Based in</dt>
                <dd className="mt-1">Remote</dd>
              </div>
              <div>
                <dt className="text-zinc-400">Focus</dt>
                <dd className="mt-1">Interaction & Product</dd>
              </div>
              <div>
                <dt className="text-zinc-400">Experience</dt>
                <dd className="mt-1">6+ years</dd>
              </div>
              <div>
                <dt className="text-zinc-400">Availability</dt>
                <dd className="mt-1">Open for 2025</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
