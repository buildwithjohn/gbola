import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const milestones = [
  {
    year: '2004',
    era: 'The Calling',
    title: 'University Years',
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
    body: 'Began preaching across Nigeria — churches, campuses, conferences. A clear teaching anointing and ministry in prayer and the Holy Spirit became widely recognised.',
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
    body: 'Published "Leading Through Prophecy, Dreams and Visions" in Faith Digest magazine, articulating biblical principles on how God leads His people.',
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

export default function MinistryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Scroll progress of the sticky track section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  })

  // Translate the track horizontally as user scrolls vertically
  const CARD_WIDTH = 380
  const GAP = 32
  const TOTAL_WIDTH = milestones.length * (CARD_WIDTH + GAP)
  const VIEWPORT = typeof window !== 'undefined' ? window.innerWidth : 1280
  const MAX_TRANSLATE = -(TOTAL_WIDTH - VIEWPORT + 120)

  const translateX = useTransform(springProgress, [0, 1], [60, MAX_TRANSLATE])

  // Progress bar width
  const progressWidth = useTransform(springProgress, [0, 1], ['0%', '100%'])

  // Year counter
  const yearVal = useTransform(springProgress, [0, 1], [2004, 2025])
  const springYear = useSpring(yearVal, { stiffness: 60, damping: 20 })

  return (
    <section className="bg-[#060d1a] relative">
      {/* Section header — outside sticky */}
      <div className="max-w-6xl mx-auto px-8 lg:px-12 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">The Journey</span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif font-semibold text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            Years in Ministry
          </h2>
          <p className="text-white/40 text-sm mt-3 max-w-md mx-auto leading-relaxed">
            Scroll down to journey through the milestones.
          </p>
        </motion.div>
      </div>

      {/* Tall scrollable container — controls how long the sticky section lasts */}
      <div
        ref={containerRef}
        style={{ height: `${milestones.length * 120}vh` }}
        className="relative"
      >
        {/* Sticky viewport */}
        <div
          ref={trackRef}
          className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
        >
          {/* Background year counter */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          >
            <motion.span
              className="font-serif font-bold text-white/[0.04] leading-none"
              style={{
                fontSize: 'clamp(10rem, 22vw, 22rem)',
              }}
            >
              <YearDisplay springYear={springYear} />
            </motion.span>
          </motion.div>

          {/* Progress rail */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0">
            {/* Track line */}
            <div className="h-px bg-white/[0.06] w-full" />
            {/* Progress fill */}
            <motion.div
              className="h-px absolute top-0 left-0"
              style={{
                width: progressWidth,
                background: 'linear-gradient(to right, #c9a84c, #e8c97a)',
                boxShadow: '0 0 12px rgba(201,168,76,0.6)',
              }}
            />
            {/* Train dot — the moving engine */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
              style={{ left: progressWidth }}
            >
              <div className="relative">
                <div className="w-5 h-5 rounded-full bg-[#c9a84c]"
                  style={{ boxShadow: '0 0 20px rgba(201,168,76,0.8), 0 0 40px rgba(201,168,76,0.4)' }} />
                <div className="absolute inset-0 rounded-full bg-[#c9a84c] animate-ping opacity-40" />
              </div>
            </motion.div>
          </div>

          {/* Horizontally moving cards */}
          <motion.div
            className="flex items-center absolute left-0"
            style={{
              x: translateX,
              top: '50%',
              translateY: '-50%',
              gap: GAP,
              paddingLeft: 80,
              paddingRight: 120,
            }}
          >
            {milestones.map((m, i) => (
              <MilestoneCard key={i} milestone={m} index={i} total={milestones.length} scrollProgress={springProgress} />
            ))}
          </motion.div>

          {/* Scroll hint — fades out as scroll starts */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ opacity: useTransform(springProgress, [0, 0.08], [1, 0]) }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c] to-transparent" />
              <span className="text-[9px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* End note */}
      <div className="text-center pb-20 pt-8">
        <p className="font-serif italic text-[#c9a84c]/60 text-sm">
          And the journey continues…
        </p>
      </div>
    </section>
  )
}

// Year display with spring
function YearDisplay({ springYear }: { springYear: ReturnType<typeof useSpring> }) {
  const rounded = useTransform(springYear, (v) => String(Math.round(v as number)))
  return <motion.span>{rounded}</motion.span>
}

// Individual milestone card
function MilestoneCard({
  milestone,
  index,
  total,
  scrollProgress,
}: {
  milestone: (typeof milestones)[0]
  index: number
  total: number
  scrollProgress: ReturnType<typeof useSpring>
}) {
  // This card becomes "active" when the progress passes its position
  const activeStart = index / total
  const activeEnd = (index + 1) / total

  const cardOpacity = useTransform(
    scrollProgress,
    [activeStart - 0.15, activeStart + 0.05, activeEnd - 0.05, activeEnd + 0.1],
    [0.3, 1, 1, 0.35]
  )

  const cardScale = useTransform(
    scrollProgress,
    [activeStart - 0.1, activeStart + 0.05, activeEnd - 0.05, activeEnd + 0.1],
    [0.9, 1, 1, 0.92]
  )

  const cardY = useTransform(
    scrollProgress,
    [activeStart - 0.1, activeStart + 0.05],
    [30, 0]
  )

  // Alternate cards above and below the rail
  const isAbove = index % 2 === 0

  return (
    <motion.div
      style={{
        opacity: cardOpacity,
        scale: cardScale,
        y: cardY,
        width: 380,
        flexShrink: 0,
        // Position above or below the rail
        marginTop: isAbove ? -260 : 60,
      }}
      className="relative"
    >
      {/* Connector from card to rail */}
      <div
        className="absolute left-8 bg-[#c9a84c]/20"
        style={{
          width: 1,
          height: isAbove ? 48 : 48,
          bottom: isAbove ? -48 : 'auto',
          top: isAbove ? 'auto' : -48,
        }}
      />
      {/* Dot on rail side */}
      <div
        className="absolute left-[30px] w-3 h-3 rounded-full border-2 border-[#c9a84c] bg-[#060d1a]"
        style={{
          bottom: isAbove ? -54 : 'auto',
          top: isAbove ? 'auto' : -54,
        }}
      />

      {/* Card body */}
      <div className="bg-[#0a1628] border border-[#c9a84c]/15 hover:border-[#c9a84c]/40 transition-colors duration-300 p-6 relative overflow-hidden group">
        {/* Gold top accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-0.5 origin-left bg-[#c9a84c]"
          style={{
            scaleX: useTransform(
              scrollProgress,
              [activeStart - 0.05, activeStart + 0.08],
              [0, 1]
            ),
          }}
        />

        <div className="flex items-start justify-between mb-3">
          <span
            className="font-serif font-bold leading-none"
            style={{
              fontSize: '2.8rem',
              background: 'linear-gradient(135deg, #e8c97a, #c9a84c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {milestone.year}
          </span>
          <span className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border border-[#c9a84c]/30 text-[#c9a84c] font-semibold mt-1">
            {milestone.tag}
          </span>
        </div>

        <p className="font-serif italic text-[#c9a84c]/70 text-xs tracking-wide mb-2 uppercase">
          {milestone.era}
        </p>
        <h3 className="font-serif text-white font-semibold text-[1.15rem] leading-snug mb-3">
          {milestone.title}
        </h3>
        <p className="text-white/50 text-[0.82rem] leading-[1.8]">
          {milestone.body}
        </p>
      </div>
    </motion.div>
  )
}
