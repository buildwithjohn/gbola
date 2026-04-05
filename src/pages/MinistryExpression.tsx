import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Flame, Globe, Users, Music,
  ArrowRight, ChevronDown, BookOpen,
  Sparkles, Clock, Heart
} from 'lucide-react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const prayerLabScriptures = [
  { ref: 'Luke 18:1', text: 'Men ought always to pray and not to faint.' },
  { ref: 'Col 4:2', text: 'Continue in prayer, and watch in the same with thanksgiving.' },
  { ref: 'Eph 6:18', text: 'Praying always with all prayer and supplication in the Spirit.' },
  { ref: 'Jude 1:20', text: 'Praying in the Holy Ghost, building up yourselves on your most holy faith.' },
]

const prayerLabExpects = [
  { icon: BookOpen, text: 'Brief scriptural charge or prayer direction' },
  { icon: Flame, text: 'Extended sessions of prayer in the Spirit' },
  { icon: Clock, text: 'Moments of stillness and waiting on the Lord' },
  { icon: Heart, text: 'Spiritual strengthening and formation' },
  { icon: Sparkles, text: 'Miracles, Signs and Wonders' },
]

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 h-px bg-[#c9a84c]" />
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">{text}</span>
    </div>
  )
}

// ─── PRAYER LAB SCRIPTURE CARD ───────────────────────────────────────────────
function ScriptureCard({ ref: ref_, text, index }: { ref: string; text: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border-l-2 border-[#c9a84c]/40 pl-4 py-1 hover:border-[#c9a84c] transition-colors duration-300"
    >
      <p className="text-[10px] tracking-[0.22em] uppercase text-[#c9a84c] font-semibold mb-1">{ref_}</p>
      <p className="font-serif italic text-white/65 text-sm leading-relaxed">"{text}"</p>
    </motion.div>
  )
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function MinistryExpression() {
  const [prayerLabOpen, setPrayerLabOpen] = useState(true)
  const [itinerantOpen, setItinerantOpen] = useState(true)
  const [mentorshipOpen, setMentorshipOpen] = useState(true)

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="relative bg-gradient-to-br from-[#050e1d] via-[#0a1628] to-[#0f2040] pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(201,168,76,0.4) 60px,rgba(201,168,76,0.4) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(201,168,76,0.4) 60px,rgba(201,168,76,0.4) 61px)`,
        }} />

        {/* Large decorative text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-bold text-white/[0.025] pointer-events-none select-none leading-none"
          style={{ fontSize: '18rem' }}>M</div>

        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">What We Do</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
            Ministry<br /><span style={{ background: 'linear-gradient(135deg,#e8c97a,#c9a84c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Expression</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/55 text-base max-w-2xl leading-[1.85]">
            Four distinct channels through which this ministry serves the Body of Christ — each one
            designed to meet believers at a specific point of need, and carry them into greater depth,
            clarity, and effectiveness in God.
          </motion.p>

          {/* Expression pills */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mt-10">
            {[
              { label: 'Prayer Lab', icon: Flame, href: '#prayer-lab' },
              { label: 'Itinerant Ministry', icon: Globe, href: '#itinerant' },
              { label: 'Mentorship Table', icon: Users, href: '#mentorship' },
              { label: 'Music', icon: Music, href: '#music', soon: true },
            ].map(({ label, icon: Icon, href, soon }) => (
              <a key={label} href={href}
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 hover:border-[#c9a84c]/60 text-white/55 hover:text-[#c9a84c] text-[11px] tracking-[0.12em] uppercase transition-all duration-300">
                <Icon size={11} />
                {label}
                {soon && <span className="text-[8px] bg-[#c9a84c]/20 text-[#c9a84c] px-1.5 py-0.5 rounded-full">Soon</span>}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          01. PRAYER LAB
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="prayer-lab" className="bg-[#060d1a] py-0">

        {/* Header bar — clickable on mobile */}
        <div className="max-w-6xl mx-auto px-8 lg:px-12 pt-20 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c]">
                  <Flame size={18} />
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/60 font-medium block">01</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-semibold">Monthly Meeting</span>
                </div>
              </div>
              <h2 className="font-serif font-semibold text-white leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Prayer Lab
              </h2>
              <p className="font-serif italic text-white/45 text-lg mt-2">
                Training Believers for Deep, Intentional, and Spirit-Led Prayer
              </p>
            </div>
            <button onClick={() => setPrayerLabOpen(v => !v)}
              className="hidden sm:flex items-center gap-2 text-white/30 hover:text-[#c9a84c] transition-colors duration-300 mt-2 flex-shrink-0">
              <span className="text-[9px] tracking-[0.2em] uppercase">{prayerLabOpen ? 'Collapse' : 'Expand'}</span>
              <motion.div animate={{ rotate: prayerLabOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={14} />
              </motion.div>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {prayerLabOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden">
              <div className="max-w-6xl mx-auto px-8 lg:px-12 pb-20">

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-2 gap-16 mt-10">

                  {/* Left — What & Why */}
                  <div className="space-y-10">
                    {/* What is Prayer Lab */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                      <SectionLabel text="What is Prayer Lab" />
                      <div className="space-y-4">
                        <p className="text-white/65 text-[0.95rem] leading-[1.9]">
                          Prayer Lab is a focused interdenominational ministry expression, designed to help
                          believers grow in the discipline, endurance, and power of prayer. It is a spiritual
                          environment where men and women are taught, stirred, and led into extended sessions
                          of prayer and fellowship with God.
                        </p>
                        <p className="text-white/65 text-[0.95rem] leading-[1.9]">
                          More than a gathering, Prayer Lab is a place of spiritual exercise — where believers
                          are formed in scriptural prayer, stretched in spiritual stamina, and yielded to the
                          leading of the Spirit.
                        </p>
                      </div>
                    </motion.div>

                    {/* Why Prayer Lab exists */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                      <SectionLabel text="Why Prayer Lab Exists" />
                      <p className="text-white/65 text-[0.95rem] leading-[1.9]">
                        Prayer Lab exists to raise believers who can pray with depth, intelligence, and
                        spiritual consistency. Here, we move beyond casual or occasional prayer into a life
                        of intentional, scriptural, and spiritually engaged communion with God.
                      </p>
                    </motion.div>

                    {/* Anchor Scriptures */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                      <SectionLabel text="Anchor Scriptures" />
                      <div className="space-y-4">
                        {prayerLabScriptures.map((s, i) => (
                          <ScriptureCard key={s.ref} ref={s.ref} text={s.text} index={i} />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right — What to Expect */}
                  <div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                      <SectionLabel text="What to Expect" />

                      {/* Expect items */}
                      <div className="space-y-1 mb-10">
                        {prayerLabExpects.map(({ icon: Icon, text }, i) => (
                          <motion.div key={text}
                            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                            className="flex items-start gap-4 px-5 py-4 bg-[#0a1628] border-l-2 border-[#c9a84c]/20 hover:border-[#c9a84c] group transition-all duration-300">
                            <Icon size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                            <p className="text-white/70 text-sm leading-snug group-hover:text-white transition-colors duration-300">
                              {text}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Monthly badge */}
                      <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/25 px-6 py-5">
                        <div className="flex items-center gap-3 mb-2">
                          <Flame size={14} className="text-[#c9a84c]" />
                          <span className="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c] font-semibold">Monthly Gathering</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                          Prayer Lab holds monthly. Date and venue are announced via social media
                          and community channels. All are welcome — open to all believers.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Divider */}
        <div className="border-t border-white/[0.06]" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          02. ITINERANT MINISTRY
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="itinerant" className="bg-[#f8f6f0]">

        <div className="max-w-6xl mx-auto px-8 lg:px-12 pt-20 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 border border-[#0a1628]/20 flex items-center justify-center text-[#0a1628]">
                  <Globe size={18} />
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#0a1628]/40 font-medium block">02</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-semibold">Across Places & Platforms</span>
                </div>
              </div>
              <h2 className="font-serif font-semibold text-[#0a1628] leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Itinerant Ministry
              </h2>
              <p className="font-serif italic text-[#0a1628]/45 text-lg mt-2">
                Teaching, Equipping, and Ministering Across Places and Platforms
              </p>
            </div>
            <button onClick={() => setItinerantOpen(v => !v)}
              className="hidden sm:flex items-center gap-2 text-[#0a1628]/30 hover:text-[#c9a84c] transition-colors duration-300 mt-2 flex-shrink-0">
              <span className="text-[9px] tracking-[0.2em] uppercase">{itinerantOpen ? 'Collapse' : 'Expand'}</span>
              <motion.div animate={{ rotate: itinerantOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={14} />
              </motion.div>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {itinerantOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden">
              <div className="max-w-6xl mx-auto px-8 lg:px-12 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 mt-10">

                  {/* Left — Description */}
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <div className="space-y-5">
                      <p className="text-[#4a4a4a] text-[0.95rem] leading-[1.9]">
                        Itinerant Ministry is one of the major expressions of this ministry, through which
                        Rev. Gbola Oladosu travels to churches, campuses, conferences, fellowships, and
                        other gatherings to teach the Word of God, strengthen believers, and minister as
                        led by the Spirit.
                      </p>
                      <p className="text-[#4a4a4a] text-[0.95rem] leading-[1.9]">
                        Through this expression, the ministry serves diverse audiences with Christ-centred
                        teaching, doctrinal clarity, spiritual impartation, and ministry strengthening —
                        with miracles, signs and wonders following.
                      </p>
                    </div>

                    {/* Venues served */}
                    <div className="mt-8 grid grid-cols-2 gap-2">
                      {['Churches', 'Campuses', 'Conferences', 'Fellowships', 'Special Gatherings', 'Online Platforms'].map((v, i) => (
                        <motion.div key={v}
                          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                          className="flex items-center gap-2.5 px-4 py-3 bg-white border border-[#c9a84c]/20 hover:border-[#c9a84c] transition-colors duration-300 group">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                          <span className="text-sm text-[#444] group-hover:text-[#0a1628] transition-colors duration-300">{v}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right — Pull quote + CTAs */}
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

                    {/* Pull quote */}
                    <div className="bg-[#0a1628] px-8 py-10 mb-8 relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a84c]" />
                      <span className="absolute top-3 right-6 font-serif text-[5rem] text-[#c9a84c]/10 leading-none">"</span>
                      <p className="font-serif italic text-white text-xl leading-[1.65] relative z-10">
                        The ministry goes where the Spirit leads — to every place where hearts
                        are open and the Word is needed.
                      </p>
                      <div className="flex items-center gap-3 mt-6">
                        <div className="w-8 h-px bg-[#c9a84c]" />
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a84c]">Itinerant Ministry</span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3">
                      <Link to="/invite"
                        className="flex items-center justify-between px-6 py-4 text-[#0a1628] font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)] transition-all duration-300 group"
                        style={{ background: 'linear-gradient(135deg,#c9a84c,#e8c97a)' }}>
                        <span>Invite Rev. Gbola to Minister</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <Link to="/events"
                        className="flex items-center justify-between px-6 py-4 text-[#0a1628] border border-[#0a1628]/30 hover:border-[#c9a84c] hover:text-[#c9a84c] font-medium text-sm transition-all duration-300 group">
                        <span>View Upcoming Events</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="border-t border-[#0a1628]/08" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          03. MENTORSHIP TABLE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="mentorship" className="bg-[#0a1628]">

        <div className="max-w-6xl mx-auto px-8 lg:px-12 pt-20 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c]">
                  <Users size={18} />
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/60 font-medium block">03</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-semibold">Guidance for Growth</span>
                </div>
              </div>
              <h2 className="font-serif font-semibold text-white leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Mentorship Table
              </h2>
              <p className="font-serif italic text-white/45 text-lg mt-2">
                Guidance for Growth, Clarity, and Purpose
              </p>
            </div>
            <button onClick={() => setMentorshipOpen(v => !v)}
              className="hidden sm:flex items-center gap-2 text-white/30 hover:text-[#c9a84c] transition-colors duration-300 mt-2 flex-shrink-0">
              <span className="text-[9px] tracking-[0.2em] uppercase">{mentorshipOpen ? 'Collapse' : 'Expand'}</span>
              <motion.div animate={{ rotate: mentorshipOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={14} />
              </motion.div>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {mentorshipOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden">
              <div className="max-w-6xl mx-auto px-8 lg:px-12 pb-20">
                <div className="grid lg:grid-cols-5 gap-16 mt-10">

                  {/* Left 3/5 — Description */}
                  <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <div className="space-y-5 mb-10">
                      <p className="text-white/65 text-[0.95rem] leading-[1.9]">
                        The Mentorship Table provides intentional guidance, meaningful growth, and personal
                        development for individuals seeking clarity, structure, wisdom, and direction in
                        different areas of life.
                      </p>
                      <p className="text-white/65 text-[0.95rem] leading-[1.9]">
                        Through this expression, participants are helped to grow in spiritual understanding,
                        personal discipline, purpose, leadership, communication, and overall life development
                        through consistent guidance, honest conversations, and practical insight.
                      </p>
                      <p className="text-white/65 text-[0.95rem] leading-[1.9]">
                        More than access, Mentorship is a space for formation — where people are sharpened,
                        strengthened, and equipped to become more grounded, effective, and intentional in
                        life, faith, and assignment.
                      </p>
                    </div>

                    {/* Areas of development */}
                    <div>
                      <p className="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c] font-medium mb-4">Areas of Development</p>
                      <div className="flex flex-wrap gap-2">
                        {['Spiritual Understanding', 'Personal Discipline', 'Purpose & Assignment', 'Leadership', 'Communication', 'Life Development', 'Faith & Character'].map(area => (
                          <span key={area}
                            className="text-[10px] px-3 py-1.5 border border-[#c9a84c]/25 text-white/55 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 tracking-wide">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Right 2/5 — CTAs + visual */}
                  <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

                    {/* Big quote accent */}
                    <div className="relative mb-8 pl-5 border-l-2 border-[#c9a84c]">
                      <p className="font-serif italic text-white/75 text-xl leading-[1.6]">
                        "More than access — a space for formation."
                      </p>
                    </div>

                    {/* Formation pillars */}
                    <div className="space-y-1 mb-8">
                      {['Sharpened', 'Strengthened', 'Equipped', 'Grounded', 'Effective', 'Intentional'].map((word, i) => (
                        <motion.div key={word}
                          initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                          className="flex items-center gap-3 py-2.5 px-4 bg-[#112240] hover:bg-[#1a3358] transition-colors duration-300">
                          <div className="w-px h-5 bg-[#c9a84c]" />
                          <span className="font-serif text-white/70 text-lg italic">{word}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3">
                      <Link to="/contact"
                        className="flex items-center justify-between px-6 py-4 text-[#0a1628] font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)] transition-all duration-300 group"
                        style={{ background: 'linear-gradient(135deg,#c9a84c,#e8c97a)' }}>
                        <span>Apply for Mentorship</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <Link to="/contact"
                        className="flex items-center justify-between px-6 py-4 text-white border border-white/20 hover:border-[#c9a84c] hover:text-[#c9a84c] font-medium text-sm transition-all duration-300 group">
                        <span>Explore Mentorship</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="border-t border-white/[0.06]" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          04. MUSIC — COMING SOON
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="music" className="bg-[#f4f1eb]">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 border border-[#0a1628]/20 flex items-center justify-center text-[#0a1628] relative">
                  <Music size={18} />
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#0a1628]/40 font-medium block">04</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-semibold">Coming Soon</span>
                    <span className="text-[8px] bg-[#c9a84c]/15 text-[#c9a84c] px-2 py-0.5 rounded-full border border-[#c9a84c]/30 animate-pulse">●</span>
                  </span>
                </div>
              </div>
              <h2 className="font-serif font-semibold text-[#0a1628] leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Music
              </h2>
              <p className="font-serif italic text-[#0a1628]/40 text-lg mt-2 mb-6">
                A new expression is forming — something is coming.
              </p>
              <p className="text-[#555] text-[0.95rem] leading-[1.9] max-w-md">
                This dimension of the ministry is in development. Stay connected for updates as
                Rev. Gbola explores this new expression of worship and the Word.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                {/* Animated placeholder */}
                <div className="bg-[#0a1628] aspect-video flex flex-col items-center justify-center gap-5 relative overflow-hidden">
                  {/* Floating music notes */}
                  {['♩', '♪', '♫', '♬', '♭'].map((note, i) => (
                    <motion.span key={i}
                      className="absolute font-serif text-[#c9a84c]/20 select-none"
                      style={{ fontSize: `${1.5 + i * 0.4}rem`, left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 20}%` }}
                      animate={{ y: [-8, 8, -8], opacity: [0.15, 0.4, 0.15] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}>
                      {note}
                    </motion.span>
                  ))}
                  <Music size={40} className="text-[#c9a84c]/30 relative z-10" />
                  <div className="text-center relative z-10">
                    <p className="font-serif text-white/30 text-2xl font-semibold">Coming Soon</p>
                    <p className="text-white/20 text-xs tracking-[0.3em] uppercase mt-1">Something is forming</p>
                  </div>
                  {/* Bottom bar animation */}
                  <div className="absolute bottom-0 left-0 right-0 flex gap-px h-1">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <motion.div key={i} className="flex-1 bg-[#c9a84c]/30"
                        animate={{ scaleY: [0.2, 1, 0.2] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.04 }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#112240] py-20 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Get Involved</span>
              <div className="w-8 h-px bg-[#c9a84c]" />
            </div>
            <h2 className="font-serif font-semibold text-white leading-[1.2] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
              Connect with This Ministry
            </h2>
            <p className="text-white/50 text-sm leading-[1.85] mb-8">
              Whether you want to attend Prayer Lab, invite Rev. Gbola to minister,
              explore mentorship, or simply stay connected — reach out.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] transition-all duration-300"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e8c97a)' }}>
                Get in Touch
              </Link>
              <Link to="/invite"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-medium text-white border border-white/25 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300">
                Invite Rev. Gbola
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
