import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const timelineItems = [
  {
    year: '2004 – 2009',
    era: 'The Call Begins',
    title: 'University Years at OAU',
    body: "During his undergraduate years at Obafemi Awolowo University, Ile-Ife, Rev. Gbola's calling became unmistakably clear. He began actively serving the Lord, engaging with campus ministry and growing in the things of the Spirit.",
    tag: 'Foundation',
    color: '#c9a84c',
  },
  {
    year: '2009 – 2012',
    era: 'Ministerial Training',
    title: 'Rhema Bible Training Center, Nigeria',
    body: 'Enrolled at the Rhema Bible Training Center Nigeria, pursuing a Diploma in Ministerial Studies with emphasis on Spiritual and Supportive Leadership. Here, the Word was deepened and the call was sharpened.',
    tag: 'Training',
    color: '#c9a84c',
  },
  {
    year: '2012',
    era: 'Ordained and Credentialed',
    title: 'RMAI Ordination',
    body: 'Rev. Adegbola was ordained and credentialed with the Rhema Ministerial Association International (Kenneth Hagin Ministries), Nigeria, marking a formal recognition of his calling, character, and commitment to the Gospel.',
    tag: 'Ordination',
    color: '#e8c97a',
  },
  {
    year: '2013 – 2016',
    era: 'Itinerant Ministry Begins',
    title: 'Preaching Across Nigeria',
    body: 'He began itinerating widely, carrying the Word to churches, campuses, conferences, and special gatherings across Nigeria. A clear teaching anointing and a strong ministry in prayer and the Holy Spirit began to be recognised.',
    tag: 'Itinerant Ministry',
    color: '#c9a84c',
  },
  {
    year: '2016 – 2020',
    era: 'Rhema Leadership',
    title: 'Serving and Instructing at Rhema Nigeria',
    body: 'Rev. Gbola took on leadership and administrative roles within Rhema Nigeria, and began instructing at the Bible Training Center, equipping the next generation of ministers in the Word and the Spirit.',
    tag: 'Leadership',
    color: '#c9a84c',
  },
  {
    year: '2022',
    era: 'Published Voice',
    title: 'Faith Digest Publication',
    body: 'Published an article in Faith Digest magazine: "Leading Through Prophecy, Dreams and Visions," articulating biblical principles on how God leads His people through these spiritual channels.',
    tag: 'Writing',
    color: '#e8c97a',
  },
  {
    year: '2024',
    era: 'Ministry Expansion',
    title: 'Prayer Lab and Mentorship Table',
    body: 'Launched Prayer Lab, a monthly interdenominational gathering for deep, intentional, Spirit-led prayer. Also began the Mentorship Table, providing focused personal development and spiritual formation for individuals.',
    tag: 'New Expressions',
    color: '#c9a84c',
  },
  {
    year: '2025 – Present',
    era: 'Based in Abuja',
    title: 'Continuing the Assignment',
    body: 'Together with his wife, Mrs. Deborah Oluwadamilola Oladosu, Rev. Gbola is based in Abuja, Nigeria, continuing to preach the Word, train ministers, lead believers in prayer, and fulfil his God-given assignment faithfully.',
    tag: 'Today',
    color: '#e8c97a',
  },
]

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof timelineItems)[0]
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_48px_1fr] gap-0 items-start">
      {/* Left content */}
      <div className={`pb-16 pr-8 ${isLeft ? '' : 'opacity-0 pointer-events-none'}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-right"
          >
            <span className="inline-block text-[9px] tracking-[0.25em] uppercase font-semibold px-3 py-1 mb-3"
              style={{ background: item.color + '22', color: item.color, border: `1px solid ${item.color}44` }}>
              {item.tag}
            </span>
            <p className="font-serif text-[1.35rem] font-semibold text-white leading-snug mb-1">
              {item.title}
            </p>
            <p className="font-serif italic text-[#c9a84c] text-sm mb-3">{item.era}</p>
            <p className="text-white/55 text-[0.875rem] leading-[1.85]">{item.body}</p>
          </motion.div>
        )}
      </div>

      {/* Center spine */}
      <div className="flex flex-col items-center">
        {/* Year badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={visible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Dot */}
          <div className="w-4 h-4 rounded-full border-2 flex-shrink-0"
            style={{ backgroundColor: item.color, borderColor: item.color, boxShadow: `0 0 12px ${item.color}66` }} />
          {/* Year label */}
          <div className="mt-2 text-[9px] tracking-[0.12em] font-semibold whitespace-nowrap"
            style={{ color: item.color }}>
            {item.year}
          </div>
        </motion.div>
        {/* Connector line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={visible ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-px flex-1 mt-2 origin-top"
            style={{ background: `linear-gradient(to bottom, ${item.color}60, ${item.color}15)`, minHeight: '80px' }}
          />
        )}
      </div>

      {/* Right content */}
      <div className={`pb-16 pl-8 ${!isLeft ? '' : 'opacity-0 pointer-events-none'}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <span className="inline-block text-[9px] tracking-[0.25em] uppercase font-semibold px-3 py-1 mb-3"
              style={{ background: item.color + '22', color: item.color, border: `1px solid ${item.color}44` }}>
              {item.tag}
            </span>
            <p className="font-serif text-[1.35rem] font-semibold text-white leading-snug mb-1">
              {item.title}
            </p>
            <p className="font-serif italic text-[#c9a84c] text-sm mb-3">{item.era}</p>
            <p className="text-white/55 text-[0.875rem] leading-[1.85]">{item.body}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// Mobile single-column version
function MobileTimelineItem({ item, isLast }: { item: (typeof timelineItems)[0]; index?: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex gap-5">
      {/* Left spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div initial={{ scale: 0 }} animate={visible ? { scale: 1 } : {}} transition={{ duration: 0.4 }}
          className="w-3.5 h-3.5 rounded-full flex-shrink-0 mt-1"
          style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}55` }} />
        {!isLast && (
          <motion.div initial={{ scaleY: 0 }} animate={visible ? { scaleY: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            className="w-px flex-1 mt-2 origin-top"
            style={{ background: `linear-gradient(to bottom, ${item.color}50, transparent)`, minHeight: '60px' }} />
        )}
      </div>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }} animate={visible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="pb-10 flex-1"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[9px] tracking-[0.2em] uppercase font-semibold"
            style={{ color: item.color }}>{item.year}</span>
          <span className="text-[9px] tracking-[0.15em] uppercase px-2 py-0.5"
            style={{ background: item.color + '22', color: item.color, border: `1px solid ${item.color}33` }}>
            {item.tag}
          </span>
        </div>
        <p className="font-serif text-[1.1rem] font-semibold text-white leading-snug mb-1">{item.title}</p>
        <p className="font-serif italic text-[#c9a84c] text-sm mb-2">{item.era}</p>
        <p className="text-white/55 text-sm leading-[1.8]">{item.body}</p>
      </motion.div>
    </div>
  )
}

// Scrolling year counter at top
function YearCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yearProgress = useTransform(scrollYProgress, [0, 1], [2004, 2026])
  const springYear = useSpring(yearProgress, { stiffness: 60, damping: 20 })
  const [displayYear, setDisplayYear] = useState(2004)
  useEffect(() => springYear.on('change', v => setDisplayYear(Math.round(v))), [springYear])

  return (
    <div ref={ref} className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none">
      <div className="sticky top-24 font-serif font-bold text-white/[0.04] select-none leading-none"
        style={{ fontSize: 'clamp(6rem, 15vw, 14rem)' }}>
        {displayYear}
      </div>
    </div>
  )
}

export default function MinistryTimeline() {
  return (
    <section className="bg-[#060d1a] py-28 overflow-hidden relative">
      {/* Floating year in background */}
      <YearCounter />

      <div className="max-w-5xl mx-auto px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
            A walk of faithfulness, from the university years to the present day.
          </p>
        </motion.div>

        {/* Desktop alternating timeline */}
        <div className="hidden md:block">
          {timelineItems.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} isLast={i === timelineItems.length - 1} />
          ))}
        </div>

        {/* Mobile single-column timeline */}
        <div className="md:hidden">
          {timelineItems.map((item, i) => (
            <MobileTimelineItem key={i} item={item} index={i} isLast={i === timelineItems.length - 1} />
          ))}
        </div>

        {/* End cap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-4"
        >
          <div className="w-5 h-5 rounded-full border-2 border-[#c9a84c]"
            style={{ backgroundColor: '#c9a84c', boxShadow: '0 0 20px rgba(201,168,76,0.5)' }} />
          <p className="font-serif italic text-[#c9a84c] text-sm mt-4">And the journey continues…</p>
        </motion.div>
      </div>
    </section>
  )
}
