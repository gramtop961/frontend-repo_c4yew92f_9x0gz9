import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, Boxes, ShieldCheck, Rocket, ArrowRight, CheckCircle2, Star, Globe, ArrowUpRight } from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
      <Sparkles size={14} /> {children}
    </span>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-semibold tracking-wider text-white/90">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm ring-1 ring-black/5"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </motion.div>
  )
}

function ProductCard({ name, tagline, image, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm ring-1 ring-black/5"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <div className="h-full w-full bg-gradient-to-br from-slate-50 via-white to-rose-50" />
      </div>
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-semibold text-slate-900 group-hover:text-rose-600 transition-colors">
              {name}
            </h4>
            <p className="text-sm text-slate-600">{tagline}</p>
          </div>
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white transition group-hover:bg-rose-600">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <div className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/40">
            <a href="/" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-sm">
                <Sparkles size={18} />
              </div>
              <span className="font-semibold tracking-tight">RedGrid</span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              <a href="#products" className="text-slate-700 hover:text-slate-900">Products</a>
              <a href="#features" className="text-slate-700 hover:text-slate-900">Features</a>
              <a href="#about" className="text-slate-700 hover:text-slate-900">About</a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
            </nav>
            <div className="hidden md:flex">
              <a href="#contact" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90">Get in touch</a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[82vh] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(255,255,255,0.7),rgba(255,255,255,0))]" />

        <div className="relative z-10">
          <div className="mx-auto flex h-[82vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
              <Badge>Material-inspired digital experiences</Badge>
              <h1 className="mt-5 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
                Present your digital products with elegance
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                A minimalist, modern, and interactive homepage to showcase your apps, APIs, and design systems. Built with Material 3 sensibilities, fluid motion, and delightful details.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
                  Explore products <ArrowRight size={16} />
                </a>
                <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white px-5 py-3 text-sm font-medium text-slate-900/90 shadow-sm transition hover:border-slate-400">
                  See features
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-slate-600">
                <div className="flex items-center gap-2 text-sm"><Star className="text-rose-600" size={16}/> Rated 4.9</div>
                <div className="flex items-center gap-2 text-sm"><Globe className="text-rose-600" size={16}/> 120+ countries</div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="text-rose-600" size={16}/> Trusted by teams</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative z-10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Products"
            title="Beautifully presented digital products"
            subtitle="A curated selection of UI kits, components, and developer tools that help you ship faster with uncompromising quality."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard name="UI Component Kit" tagline="Material-inspired, production-ready" href="#" />
            <ProductCard name="Design Tokens" tagline="Consistent, themeable, scalable" href="#" />
            <ProductCard name="Analytics Dashboard" tagline="Elegant insights at a glance" href="#" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why RedGrid"
            title="Material 3 sensibility, modern web performance"
            subtitle="We blend thoughtful motion, accessible patterns, and robust engineering to deliver an experience that feels effortless."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature icon={Boxes} title="Consistent design language" desc="A cohesive palette, shapes, and elevation that align with Material 3 – adapted for brand personality." />
            <Feature icon={ShieldCheck} title="Enterprise-grade quality" desc="Accessible, resilient, and tested patterns that scale from startup to enterprise." />
            <Feature icon={Rocket} title="Performance focused" desc="Optimized assets, subtle motion, and incremental rendering for a silky-smooth feel." />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <SectionTitle
                eyebrow="Our approach"
                title="Craft, clarity, and care"
                subtitle="We help teams present digital products with a balance of aesthetic warmth and pragmatic structure—so your work shines."
              />
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-rose-600" size={18}/> Audience-first narratives that convert.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-rose-600" size={18}/> Motion used as meaning, not decoration.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-rose-600" size={18}/> Design systems that make consistency effortless.</li>
              </ul>
              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-300/70 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:border-slate-400">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-rose-50 via-white to-slate-50" />
                <div className="mt-4 text-sm text-slate-600">Showcase product previews, hero shots, or brand visuals in a clean frame.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="relative z-10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-semibold tracking-tight">Let’s present your product beautifully</h3>
              <p className="mt-2 text-slate-600">Tell us about your goals and we’ll craft a homepage that feels premium, fast, and unmistakably yours.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-3 sm:grid-cols-2">
                <input required placeholder="Your name" className="w-full rounded-xl border border-slate-300/70 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-rose-400" />
                <input required type="email" placeholder="Work email" className="w-full rounded-xl border border-slate-300/70 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-rose-400" />
                <input placeholder="Company (optional)" className="sm:col-span-2 w-full rounded-xl border border-slate-300/70 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-rose-400" />
                <textarea placeholder="What are you building?" rows="4" className="sm:col-span-2 w-full rounded-xl border border-slate-300/70 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-rose-400" />
                <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-95">
                  Request a demo <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-rose-50 p-4 text-center">
                    <div className="text-2xl font-semibold text-rose-700">120+</div>
                    <div className="text-xs text-rose-800/80">Countries</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 text-center">
                    <div className="text-2xl font-semibold text-slate-900">4.9</div>
                    <div className="text-xs text-slate-600">Avg rating</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 text-center">
                    <div className="text-2xl font-semibold text-slate-900">300K</div>
                    <div className="text-xs text-slate-600">Users</div>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-slate-200/60 p-4">
                  <p className="text-sm text-slate-700">“A refined blend of motion and clarity. Our product finally feels as premium as it performs.”</p>
                  <div className="mt-3 text-xs text-slate-500">— Product Lead, Nimbus Labs</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/70 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white">
                <Sparkles size={18} />
              </div>
              <span className="font-semibold">RedGrid</span>
            </div>
            <div className="text-sm text-slate-500">© {new Date().getFullYear()} RedGrid Studio. All rights reserved.</div>
            <div className="flex items-center gap-5 text-sm">
              <a className="text-slate-600 hover:text-slate-900" href="#">Privacy</a>
              <a className="text-slate-600 hover:text-slate-900" href="#">Terms</a>
              <a className="text-slate-600 hover:text-slate-900" href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
