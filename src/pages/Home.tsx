import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Users, Flame, HandHeart, Youtube } from 'lucide-react'

import HeroSection from '@/components/HeroSection'
import SermonCard from '@/components/SermonCard'
import EventCard from '@/components/EventCard'
import TestimonialQuote from '@/components/TestimonialQuote'
import CTASection from '@/components/CTASection'
import VideoCard from '@/components/VideoCard'

import { sermons } from '@/data/sermons'
import { events } from '@/data/events'
import { youtubeVideos, YOUTUBE_CHANNEL_URL } from '@/data/videos'
import { splitEvents, relativeLabel } from '@/lib/eventUtils'
import { galleryPhotos } from '@/data/gallery'
import prayerConferenceFlyer from '@/assets/prayer-conference-flyer.jpg'
import authorityBelieversFlyer from '@/assets/authority-believer-flyer.jpg'
import rmaiGroup from '@/assets/past-flyers/rmai-faithful-able-group.jpg'
import lapUntangled from '@/assets/past-flyers/lap-untangled-2024.jpg'
import gopnetGloryNov from '@/assets/past-flyers/gopnet-glory-conf-2024-nov.jpg'
import gopnetGloryMar from '@/assets/past-flyers/gopnet-glory-conf-mar.jpg'
import zionCrossover from '@/assets/past-flyers/zion-dwellers-crossover-2024.jpg'
import ncpcYouth from '@/assets/past-flyers/ncpc-youth-convention.jpg'
import charisTabernacle from '@/assets/past-flyers/charis-tabernacle-dec-2024.jpg'
import bibleStudyZone from '@/assets/past-flyers/bible-study-zone-feb.jpg'
import agnesAgada from '@/assets/past-flyers/agnes-agada-50th-birthday.jpg'
import pathlightUpperRoom from '@/assets/past-flyers/pathlight-upper-room-mar25.jpg'
import articleP1 from '@/assets/article-prophecy-p1.jpg'

// Map event IDs to flyer images
const flyerMap: Record<string, string> = {
  'rhema-authority-1': authorityBelieversFlyer,
  'scripture-city-1': prayerConferenceFlyer,
  'scripture-city-2': prayerConferenceFlyer,
  'rmai-faithful-able-2025': rmaiGroup,
  'lap-untangled-2024': lapUntangled,
  'gopnet-glory-nov-2024': gopnetGloryNov,
  'gopnet-glory-mar-2024': gopnetGloryMar,
  'zion-crossover-2024': zionCrossover,
  'ncpc-youth-convention': ncpcYouth,
  'charis-tabernacle-dec-2024': charisTabernacle,
  'bible-study-zone-feb': bibleStudyZone,
  'agnes-agada-50th': agnesAgada,
  'pathlight-upper-room-mar25': pathlightUpperRoom,
}

import preachingImg from '@/assets/preaching.jpg'



const focusPillars = [
  {
    icon: BookOpen,
    title: 'The Word',
    desc: 'Grounded in Scripture, we are committed to building on The Word, in sound doctrine, Christ-centred teaching, and the spiritual formation of believers through truth. (Acts 20:32, Col. 3:16).',
  },
  {
    icon: Flame,
    title: 'The Spirit',
    desc: 'We value the ministry of the Holy Spirit, embracing prayer, divine direction, spiritual sensitivity, and life in His power. (Rom. 8:14, Zec. 4:6).',
  },
  {
    icon: Users,
    title: 'Faith',
    desc: 'We believe believers are called to walk with God in confidence, obedience, and unwavering trust in His Word. (2 Cor. 5:7, Heb. 11:6).',
  },
  {
    icon: HandHeart,
    title: 'Love',
    desc: 'We believe the life of Christ is best revealed through love, humility, compassion, and service to God and people. (John 13:34-35, Gal. 5:6).',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* About Snippet */}
      <section className="bg-[#f8f6f0] py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <img
                src={preachingImg}
                alt="Rev. Adegbola Oladosu preaching"
                className="w-full aspect-[3/4] object-cover object-top"
              />
              {/* Gold accent frame */}
              <div className="absolute bottom-[-20px] right-[-20px] w-[60%] h-[60%] border-2 border-[#c9a84c] -z-10" />
              {/* Name tag */}
              <div className="absolute bottom-8 left-0 lg:left-[-20px] bg-[#0a1628] px-5 py-3.5 border-l-[3px] border-[#c9a84c]">
                <p className="font-serif italic text-[#c9a84c] text-sm">"Brother Gbola"</p>
                <p className="text-[9px] tracking-[0.18em] uppercase text-white/50 mt-1">As he is fondly called</p>
              </div>
            </motion.div>

            {/* Content column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#0a1628]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a1628] font-medium">
                  About the Minister
                </span>
              </div>
              <h2
                className="font-serif font-semibold text-[#0a1628] leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                A Faithful Steward<br />of the Gospel
              </h2>
              <p className="text-[#4a4a4a] text-[0.95rem] leading-[1.85] mb-4">
                Rev. Adegbola Oladosu is an ordained minister of the Gospel, credentialed with the
                Rhema Ministerial Association International (Kenneth Hagin Ministries), Nigeria.
                From his undergraduate years, he has faithfully walked in the Lord's calling, preaching the Word, cultivating prayer, and leading believers into deeper intimacy with the Holy Spirit.
              </p>
              <p className="text-[#4a4a4a] text-[0.95rem] leading-[1.85] mb-8">
                He serves within Rhema Nigeria in both leadership and administrative capacities, and
                instructs at the Rhema Bible Training Center. He itinerates widely, carrying the
                fire of God's Word to churches and conferences across Nigeria.
              </p>

              {/* Credentials */}
              <div className="space-y-3 mb-8">
                {[
                  'Diploma in Ministerial Studies, Rhema Bible Training Center Nigeria',
                  'B.Sc., Obafemi Awolowo University, Ile-Ife',
                  'Certified in Business Intelligence & Financial Modeling, CFI',
                ].map((cred) => (
                  <div
                    key={cred}
                    className="flex items-start gap-3.5 px-4 py-3.5 bg-white border-l-[3px] border-[#c9a84c] shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0 mt-1.5" />
                    <p className="text-sm text-[#333] leading-snug">{cred}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 text-[#0a1628] text-[11px] tracking-[0.15em] uppercase font-semibold border-b border-[#c9a84c] pb-0.5 hover:text-[#c9a84c] transition-colors duration-300 group"
              >
                Full Biography
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministry Focus */}
      <section className="bg-[#0a1628] py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Ministry Emphases</span>
              <div className="w-8 h-px bg-[#c9a84c]" />
            </div>
            <h2
              className="font-serif font-semibold text-white"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              The Pillars of This Ministry
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {focusPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className="bg-[#112240] px-8 py-12 text-center group hover:bg-[#1a3358] transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-14 h-14 mx-auto mb-5 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] group-hover:border-[#c9a84c] transition-colors duration-300">
                  <pillar.icon size={22} />
                </div>
                <h3 className="font-serif text-[1.25rem] font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/50 text-[0.83rem] leading-[1.75]">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Ministry Expression Teaser */}
      <section className="bg-[#f8f6f0] py-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="flex items-end justify-between mb-12 gap-5 flex-col sm:flex-row">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-px bg-[#0a1628]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a1628] font-medium">What We Do</span>
              </div>
              <h2 className="font-serif font-semibold text-[#0a1628]" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                Ministry Expression
              </h2>
            </div>
            <Link to="/ministry" className="inline-flex items-center gap-2 text-[#0a1628] text-[11px] tracking-[0.15em] uppercase font-semibold border border-[#0a1628] px-6 py-3 hover:bg-[#0a1628] hover:text-white transition-all duration-300 self-start">
              Explore All <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', label: 'Itinerant Ministry', desc: 'Teaching and ministering across churches, campuses, and conferences, with miracles, signs and wonders following.', color: '#0a1628', light: false, id: 'itinerant' },
              { num: '02', label: 'Prayer Lab', desc: 'Monthly meetings for deep, intentional, Spirit-led prayer. Open to all believers.', color: '#c9a84c', light: false, id: 'prayer-lab' },
              { num: '03', label: 'Mentorship Table', desc: 'Intentional guidance for growth, clarity, purpose, and personal development.', color: '#0a1628', light: false, id: 'mentorship' },
              { num: '04', label: 'Music', desc: 'A new expression of worship and the Word, currently in development.', color: '#c9a84c', light: false, soon: true, id: 'music' },
            ].map(({ num, label, desc, color, light, soon }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                className="p-6 relative overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                style={{ backgroundColor: color }}>
                <Link to="/ministry" className="absolute inset-0" />
                <div className={`text-[9px] tracking-[0.3em] uppercase font-medium mb-4 ${light ? 'text-[#0a1628]/40' : 'text-white/30'}`}>{num}</div>
                <h3 className={`font-serif text-xl font-semibold mb-3 leading-snug ${light ? 'text-[#0a1628]' : 'text-white'}`}>{label}</h3>
                <p className={`text-sm leading-[1.75] ${light ? 'text-[#555]' : 'text-white/55'}`}>{desc}</p>
                {soon && (
                  <div className="absolute top-4 right-4 text-[8px] tracking-[0.2em] uppercase text-[#c9a84c] border border-[#c9a84c]/40 px-2 py-1">
                    Soon
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="bg-[#f4f1eb] py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-5">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-px bg-[#0a1628]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a1628] font-medium">Latest Teachings</span>
              </div>
              <h2
                className="font-serif font-semibold text-[#0a1628]"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Sermon Library
              </h2>
            </div>
            <Link
              to="/teachings"
              className="inline-flex items-center gap-2 text-[#0a1628] text-[11px] tracking-[0.15em] uppercase font-semibold border border-[#0a1628] px-6 py-3 hover:bg-[#0a1628] hover:text-white transition-all duration-300"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.slice(0, 6).map((sermon, i) => (
              <SermonCard key={sermon.id} sermon={sermon} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <TestimonialQuote
        quote="Prayer is not a religious duty. It is the breath of the spirit-filled believer. When you learn to pray, you learn to reign."
        author="Rev. Adegbola Oladosu"
      />


      {/* Articles Teaser */}
      <section className="bg-[#112240] py-20">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#c9a84c]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Written Word</span>
              </div>
              <h2 className="font-serif font-semibold text-white leading-[1.1] mb-5" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                Featured Article
              </h2>
              <div className="border-l-4 border-[#c9a84c] pl-5 mb-6">
                <p className="font-serif italic text-white/80 text-lg leading-[1.6]">
                  "The simple answer to whether God still speaks through visions and dreams is 'Yes.' But we must be careful how we apply this. Every vision and dream must agree with scripture."
                </p>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#e8c97a] mb-2">
                Leading Through Prophecy, Dreams and Visions
              </h3>
              <p className="text-white/50 text-sm leading-[1.75] mb-6">
                Published in <span className="text-[#c9a84c]">Faith Digest</span> · 2022
              </p>
              <Link
                to="/articles"
                className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] px-8 py-4 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)' }}
              >
                Read Full Article
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={articleP1}
                alt="Leading Through Prophecy, Dreams and Visions, Faith Digest"
                className="w-full max-w-sm mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.6)] transition-shadow duration-500"
              />
              <div className="absolute top-3 left-4 bg-[#c9a84c] text-[#0a1628] text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1.5">
                Faith Digest · 2022
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-[#f8f6f0] py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-5">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-px bg-[#0a1628]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a1628] font-medium">Calendar</span>
              </div>
              <h2
                className="font-serif font-semibold text-[#0a1628]"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Upcoming Events
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-[#0a1628] text-[11px] tracking-[0.15em] uppercase font-semibold border border-[#0a1628] px-6 py-3 hover:bg-[#0a1628] hover:text-white transition-all duration-300"
            >
              All Events <ArrowRight size={12} />
            </Link>
          </div>
          {(() => {
            const { upcoming } = splitEvents(events)
            const displayEvents = upcoming.slice(0, 3)
            if (displayEvents.length === 0) {
              return (
                <div className="text-center py-10 text-gray-400">
                  <p className="font-serif text-lg">No upcoming events right now</p>
                  <p className="text-sm mt-1">Check back soon!</p>
                </div>
              )
            }
            return (
              <div className="flex flex-col gap-4">
                {displayEvents.map((event, i) => (
                  <div key={event.id} className="relative">
                    <div className="absolute -top-2.5 right-3 z-10">
                      <span className="text-[9px] tracking-[0.15em] uppercase bg-[#0a1628] text-[#c9a84c] px-2.5 py-1 font-semibold">
                        {relativeLabel(event)}
                      </span>
                    </div>
                    <EventCard event={event} index={i} flyerSrc={flyerMap[event.id]} />
                  </div>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-[#0a1628] py-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-5">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-px bg-[#c9a84c]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Gallery</span>
              </div>
              <h2 className="font-serif font-semibold text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Ministry in Pictures
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#c9a84c] text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 group self-start sm:self-auto"
            >
              View Full Gallery
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* 5-photo mosaic preview */}
          <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[420px]">
            {/* Large left */}
            <Link to="/gallery" className="row-span-2 overflow-hidden relative group cursor-pointer">
              <img src={galleryPhotos[0].src} alt={galleryPhotos[0].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-90 group-hover:saturate-100" />
              <div className="absolute inset-0 bg-[#0a1628]/0 group-hover:bg-[#0a1628]/30 transition-all duration-300" />
              <div className="absolute bottom-3 left-3 text-[9px] tracking-[0.18em] uppercase text-white/60 bg-[#0a1628]/60 backdrop-blur-sm px-2 py-1">
                {galleryPhotos[0].category}
              </div>
            </Link>
            {/* Top middle */}
            <Link to="/gallery" className="overflow-hidden relative group cursor-pointer">
              <img src={galleryPhotos[8].src} alt={galleryPhotos[8].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-90 group-hover:saturate-100" />
              <div className="absolute inset-0 bg-[#0a1628]/0 group-hover:bg-[#0a1628]/30 transition-all duration-300" />
            </Link>
            {/* Top right */}
            <Link to="/gallery" className="overflow-hidden relative group cursor-pointer">
              <img src={galleryPhotos[11].src} alt={galleryPhotos[11].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-90 group-hover:saturate-100" />
              <div className="absolute inset-0 bg-[#0a1628]/0 group-hover:bg-[#0a1628]/30 transition-all duration-300" />
            </Link>
            {/* Bottom middle */}
            <Link to="/gallery" className="overflow-hidden relative group cursor-pointer">
              <img src={galleryPhotos[15].src} alt={galleryPhotos[15].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-90 group-hover:saturate-100" />
              <div className="absolute inset-0 bg-[#0a1628]/0 group-hover:bg-[#0a1628]/30 transition-all duration-300" />
            </Link>
            {/* Bottom right, overlay CTA */}
            <Link to="/gallery" className="overflow-hidden relative group cursor-pointer">
              <img src={galleryPhotos[18].src} alt={galleryPhotos[18].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-50 group-hover:saturate-100" />
              <div className="absolute inset-0 bg-[#0a1628]/60 group-hover:bg-[#0a1628]/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-2xl font-semibold text-white">+{galleryPhotos.length - 5}</p>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] mt-1">View All</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="bg-[#060e1c] py-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-5">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-px bg-[#c9a84c]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">YouTube Channel</span>
              </div>
              <h2 className="font-serif font-semibold text-white" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                Watch Rev. Gbola Minister
              </h2>
            </div>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-[10.5px] tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(220,38,38,0.35)] self-start sm:self-auto"
            >
              <Youtube size={13} />
              Subscribe on YouTube
            </a>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden bg-[#0a1628] shadow-[0_8px_48px_rgba(0,0,0,0.4)]"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideos[0].id}?rel=0&modestbranding=1`}
                  title="Featured teaching"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="px-5 py-4 border-t border-white/10">
                <div className="text-[9px] tracking-[0.22em] uppercase text-[#c9a84c] font-medium mb-1">Featured Teaching</div>
                <p className="font-serif text-white font-semibold text-lg">{youtubeVideos[0].title}</p>
              </div>
            </motion.div>
            <div className="flex flex-col gap-5">
              {youtubeVideos.slice(1, 3).map((video, i) => (
                <VideoCard key={video.id} video={video} index={i + 1} />
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {youtubeVideos.slice(3, 5).map((video, i) => (
              <VideoCard key={video.id} video={video} index={i + 3} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/videos"
              className="inline-flex items-center gap-2.5 text-white/50 hover:text-[#c9a84c] text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 group"
            >
              View All Videos
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
