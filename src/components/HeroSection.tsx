import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Mail } from 'lucide-react'
import portraitImg from '@/assets/portrait.jpg'
import logoImg from '@/assets/logo.png'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050e1d] via-[#0a1628] to-[#0f2040]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px)`,
        }}
      />
      {/* Gold radial glow, using inline style (bg-gradient-radial is not a Tailwind utility) */}
      <div
        className="absolute right-0 top-0 bottom-0 w-3/5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Left Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:pl-20 lg:pr-16 pt-28 pb-16 lg:pt-32 lg:pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 border border-[#c9a84c]/40 px-5 py-2 mb-9 self-start"
        >
          <div className="w-6 h-px bg-[#c9a84c]" />
          <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.28em] uppercase text-[#c9a84c] font-medium">
            Minister of the Word · Preacher · Teacher
          </span>
          <div className="w-6 h-px bg-[#c9a84c]" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-serif font-light leading-[1.0] text-white mb-2"
          style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)' }}
        >
          Rev. <em className="italic text-[#e8c97a]">Adegbola</em>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="font-serif font-semibold leading-[1.0] mb-6"
          style={{
            fontSize: 'clamp(3rem, 5vw, 5.5rem)',
            background: 'linear-gradient(135deg, #e8c97a, #c9a84c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Oladosu
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="font-serif italic font-light text-white/60 leading-[1.75] border-l-2 border-[#c9a84c] pl-5 mb-11 max-w-md"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}
        >
          Teaching the Word. Raising Men of Prayer.<br />
          Leading Believers into Intimacy with God.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/teachings"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)]"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)' }}
          >
            <Play size={13} fill="currentColor" />
            Listen to Teachings
          </Link>
          <Link
            to="/invite"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-medium text-white border border-white/40 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail size={13} />
            Invite Rev. Gbola
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="flex gap-10 mt-16 pt-10 border-t border-white/10"
        >
          {[
            { num: '20+', label: 'Years in Ministry' },
            { num: '∞', label: 'Lives Transformed' },
            { num: 'NG', label: 'Abuja, Nigeria' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-serif text-[2.2rem] font-semibold text-[#c9a84c] leading-none">
                {s.num}
              </div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-white/45 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:flex relative h-screen items-end"
      >
        <div className="relative w-full h-[95%]">
          {/* Gold frame accent */}
          <div className="absolute top-10 right-[-20px] bottom-0 left-10 border border-[#c9a84c]/20 bg-gradient-to-br from-[#c9a84c]/10 to-transparent z-0" />
          <img
            src={portraitImg}
            alt="Rev. Adegbola Oladosu"
            className="relative z-10 w-full h-full object-cover object-top"
            style={{ filter: 'saturate(0.9) contrast(1.05)' }}
          />
          {/* Fades */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a1628] to-transparent z-20" />
          <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-gradient-to-r from-[#0a1628] to-transparent z-20" />
          {/* Branded logo watermark bottom-right */}
          <div className="absolute bottom-8 right-4 z-30 bg-[#0a1628]/70 backdrop-blur-sm px-3 py-2 border border-[#c9a84c]/20">
            <img src={logoImg} alt="Rev. Gbola Oladosu" className="h-10 w-auto object-contain opacity-90" />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-3">
        <div className="w-px h-14 bg-gradient-to-b from-[#c9a84c] to-transparent scroll-line-anim" />
        <span
          className="text-[9px] tracking-[0.35em] uppercase text-white/35"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}
