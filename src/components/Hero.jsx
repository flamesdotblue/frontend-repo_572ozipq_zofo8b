import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-white" />
            Available for freelance work
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Black & white portfolio for modern, playful, digital work
          </h1>
          
          <p className="mt-6 text-zinc-300 max-w-xl">
            I craft interactive experiences that blend clean aesthetics with tactile 3D moments. Let’s build something delightful.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-200 transition-colors">
              View Work
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
