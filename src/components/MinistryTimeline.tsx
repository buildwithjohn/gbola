import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion'

const milestones = [
  {
    year: '2004',
    era: 'The Calling',
    title: 'University Years at OAU',
    body: 'At Obafemi Awolowo University, Ile-Ife, the call of God became unmistakably clear. Rev. Gbola began actively serving, growing in the things of the Spirit.',
    tag: 'Foundation',
  },
  {
    year: '2009',
    era: 'Ministerial Training',
    title: 'Rhema Bible Training Center',
    body: 'Enrolled at RBTC Nigeria, pursuing a Diploma in Ministerial Studies with emphasis on Spiritual and Supportive Leadership. The Word was deepened and the call sharpened.',
    tag: 'Training',
  },
  {
    year: '2012',
    era: 'Ordained',
    title: 'RMAI Ordination',
    body: 'Ordained and credentialed with the Rhema Ministerial Association International (Kenneth Hagin Ministries), Nigeria — a formal recognition of calling, character, and commitment.',
    tag: 'Ordination',
  },
  {
    year: '2013',
    era: 'Taking the Word',
    title: 'Itinerant Ministry Begins',
    body: 'Began preaching across Nigeria — churches, campuses, and conferences. A clear teaching anointing and ministry in prayer and the Holy Spirit became widely recognised.',
    tag: 'Itinerant',
  },
  {
    year: '2016',
    era: 'Leading and Teaching',
    title: 'Rhema Nigeria Leadership',
    body: 'Took on leadership and administrative roles within Rhema Nigeria, and began instructing at the Bible Training Center, equipping the next generation of ministers.',
    tag: 'Leadership',
  },
  {
    year: '2022',
    era: 'Published',
    title: 'Faith Digest Article',
    body: 'Published "Leading Through Prophecy, Dreams and Visions" in Faith Digest, articulating biblical principles on how God leads His people.',
    tag: 'Writing',
  },
  {
    year: '2024',
    era: 'New Expressions',
    title: 'Prayer Lab and Mentorship Table',
    body: 'Launched Prayer Lab — a monthly interdenominational prayer gathering — and the Mentorship Table, providing focused personal formation and development.',
    tag: 'Expressions',
  },
  {
    year: '2025',
    era: 'Now',
    title: 'Abuja and Beyond',
    body: 'Based in Abuja with his wife Deborah, continuing to preach the Word, train ministers, and lead believers into deeper prayer, faith, and intimacy with God.',
    tag: 'Present',
  },
]

const CARD_W = 360
const GAP = 28
const STEP = CARD_W + GAP

export default function MinistryTimeline() {
  const total = milestones.length
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Progress 0..1 driven by active index
  const progress = useMotionValue(0)
  const springProgress = useSpring(progress, { stiffness: 60, damping: 20 })

  // Track translateX — spring-smoothed
  const rawX = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 55, damping: 18 })

  // Year counter
  const years = milestones.map(m => parseInt(m.year))
  const yearDisplay = useTransform(springProgress, [0, 1], [years[0], years[total - 1]])
  const yearSpring = useSpring(yearDisplay, { stiffness: 50, damping: 18 })

  const goTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(total - 1, idx))
    setActive(clamped)
    progress.set(clamped / (total - 1))
    // Center the active card
    const offset = -(clamped * STEP) + (typeof window !== 'undefined' ? window.innerWidth / 2 - CARD_W / 2 : 300)
    rawX.set(offset)
  }, [total, progress, rawX])

  // Auto-advance
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(prev => {
        const next = prev >= total - 1 ? 0 : prev + 1
        const p = next / (total - 1)
        animate(progress, p, { duration: 1.2, ease: 'easeInOut' })
        const offset = -(next * STEP) + (typeof window !== 'undefined' ? window.innerWidth / 2 - CARD_W / 2 : 300)
        animate(rawX, offset, { duration: 1.2, ease: 'easeInOut' })
        return next
      })
    }, 3200)
  }, [total, progress, rawX])

  useEffect(() => {
    // Initial position
    const offset = typeof window !== 'undefined' ? window.innerWidth / 2 - CARD_W / 2 : 300
    rawX.set(offset)
    progress.set(0)

    if (!paused) startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, startTimer, rawX, progress])

  const handleDotClick = (idx: number) => {
    setPaused(true)
    goTo(idx)
    // Resume after 6s of inactivity
    setTimeout(() => setPaused(false), 6000)
  }

  const handlePrev = () => {
    setPaused(true)
    goTo(active - 1)
    setTimeout(() => setPaused(false), 6000)
  }

  const handleNext = () => {
    setPaused(true)
    goTo(active + 1)
    setTimeout(() => setPaused(false), 6000)
  }

  return (
    <section className="bg-[#060d1a] py-24 overflow-hidden select-none">

      {/* Header */}
      <div className="text-center px-8 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">The Journey</span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif font-semibold text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            Years in Ministry
          </h2>
          <p className="text-white/35 text-sm mt-2">Moves automatically. Click any stop to pause.</p>
        </motion.div>
      </div>

      {/* Year watermark */}
      <div className="relative h-[420px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <YearWatermark yearSpring={yearSpring} />
        </div>

        {/* ── RAIL ── */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
          {/* Background track */}
          <div className="h-[2px] bg-white/[0.06] w-full" />

          {/* Animated fill */}
          <motion.div
            className="h-[2px] absolute top-0 left-0"
            style={{
              width: useTransform(springProgress, [0, 1], ['0%', '100%']),
              background: 'linear-gradient(to right, #c9a84c, #e8c97a)',
              boxShadow: '0 0 10px rgba(201,168,76,0.7)',
            }}
          />

          {/* Engine dot */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
            style={{ left: useTransform(springProgress, [0, 1], ['0%', '100%']) }}
          >
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 rounded-full bg-[#c9a84c] animate-ping opacity-50" />
              <div className="relative w-5 h-5 rounded-full bg-[#c9a84c]"
                style={{ boxShadow: '0 0 18px rgba(201,168,76,0.9)' }} />
            </div>
          </motion.div>

          {/* Station dots */}
          {milestones.map((m, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 group"
              style={{ left: `${(i / (total - 1)) * 100}%` }}
              title={`${m.year} — ${m.title}`}
            >
              <motion.div
                animate={{
                  scale: active === i ? 1.4 : 1,
                  backgroundColor: active === i ? '#c9a84c' : '#1a3358',
                  boxShadow: active === i ? '0 0 14px rgba(201,168,76,0.8)' : 'none',
                }}
                transition={{ duration: 0.35 }}
                className="w-3 h-3 rounded-full border-2 border-[#c9a84c]/50 group-hover:border-[#c9a84c]"
              />
              {/* Year label below dot */}
              <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[9px] tracking-wide whitespace-nowrap font-medium"
                style={{ color: active === i ? '#c9a84c' : 'rgba(255,255,255,0.25)' }}>
                {m.year}
              </span>
            </button>
          ))}
        </div>

        {/* ── CARDS ── */}
        <motion.div
          className="absolute flex items-center"
          style={{
            x: springX,
            top: '50%',
            translateY: '-50%',
            gap: GAP,
            paddingLeft: 0,
          }}
        >
          {milestones.map((m, i) => {
            const isAbove = i % 2 === 0
            return (
              <motion.div
                key={i}
                onClick={() => handleDotClick(i)}
                animate={{
                  opacity: active === i ? 1 : Math.abs(active - i) === 1 ? 0.55 : 0.22,
                  scale: active === i ? 1 : 0.88,
                  y: isAbove
                    ? active === i ? -140 : -120
                    : active === i ? 60 : 50,
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="cursor-pointer flex-shrink-0"
                style={{ width: CARD_W }}
              >
                {/* Stem connector */}
                <div className="flex flex-col items-center" style={{ alignItems: isAbove ? 'flex-start' : 'flex-start', paddingLeft: 24 }}>
                  {!isAbove && (
                    <motion.div
                      animate={{ height: active === i ? 32 : 22, backgroundColor: active === i ? '#c9a84c' : 'rgba(201,168,76,0.2)' }}
                      transition={{ duration: 0.4 }}
                      className="w-px"
                    />
                  )}

                  {/* Card */}
                  <div className="bg-[#0c1829] border border-[#c9a84c]/15 hover:border-[#c9a84c]/40 transition-all duration-300 p-5 relative overflow-hidden w-full"
                    style={{ boxShadow: active === i ? '0 8px 40px rgba(0,0,0,0.5)' : 'none' }}>
                    {/* Active top bar */}
                    <motion.div
                      className="absolute top-0 left-0 h-0.5 bg-[#c9a84c]"
                      animate={{ width: active === i ? '100%' : '0%' }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    />

                    <div className="flex items-start justify-between mb-2">
                      <span className="font-serif font-bold"
                        style={{
                          fontSize: '2.2rem',
                          background: 'linear-gradient(135deg,#e8c97a,#c9a84c)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          lineHeight: 1,
                        }}>
                        {m.year}
                      </span>
                      <span className="text-[8px] tracking-[0.2em] uppercase px-2 py-1 border border-[#c9a84c]/25 text-[#c9a84c]/80 mt-0.5">
                        {m.tag}
                      </span>
                    </div>
                    <p className="font-serif italic text-[#c9a84c]/60 text-[10px] tracking-widest uppercase mb-1.5">{m.era}</p>
                    <h3 className="font-serif text-white font-semibold text-[1rem] leading-snug mb-2">{m.title}</h3>
                    <p className="text-white/45 text-[0.78rem] leading-[1.75]">{m.body}</p>
                  </div>

                  {isAbove && (
                    <motion.div
                      animate={{ height: active === i ? 32 : 22, backgroundColor: active === i ? '#c9a84c' : 'rgba(201,168,76,0.2)' }}
                      transition={{ duration: 0.4 }}
                      className="w-px"
                    />
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* ── CONTROLS ── */}
      <div className="flex items-center justify-center gap-6 mt-16 px-8">
        <button onClick={handlePrev} disabled={active === 0}
          className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#c9a84c] hover:text-[#c9a84c] disabled:opacity-20 transition-all duration-300">
          ←
        </button>

        {/* Dot nav */}
        <div className="flex gap-2">
          {milestones.map((_, i) => (
            <button key={i} onClick={() => handleDotClick(i)}
              className="transition-all duration-300"
              style={{
                width: active === i ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: active === i ? '#c9a84c' : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>

        <button onClick={handleNext} disabled={active === total - 1}
          className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#c9a84c] hover:text-[#c9a84c] disabled:opacity-20 transition-all duration-300">
          →
        </button>

        {/* Pause indicator */}
        <button onClick={() => setPaused(p => !p)}
          className="ml-2 text-[9px] tracking-[0.2em] uppercase text-white/25 hover:text-[#c9a84c] transition-colors duration-300">
          {paused ? '▶ Resume' : '⏸ Pause'}
        </button>
      </div>

      {/* Active milestone label */}
      <div className="text-center mt-6 px-8">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif italic text-[#c9a84c]/50 text-sm"
        >
          {milestones[active].year} — {milestones[active].title}
        </motion.p>
      </div>
    </section>
  )
}

function YearWatermark({ yearSpring }: { yearSpring: ReturnType<typeof useSpring> }) {
  const [display, setDisplay] = useState('2004')
  useEffect(() => {
    return yearSpring.on('change', v => setDisplay(String(Math.round(v as number))))
  }, [yearSpring])
  return (
    <span className="font-serif font-bold text-white/[0.03] pointer-events-none"
      style={{ fontSize: 'clamp(8rem, 18vw, 18rem)', lineHeight: 1 }}>
      {display}
    </span>
  )
}
