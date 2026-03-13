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

import preachingImg from '@/assets/preaching.jpg'
import rhemaImg from '@/assets/rhema.jpg'
import coupleImg from '@/assets/couple.jpg'
import portraitImg from '@/assets/portrait.jpg'



const focusPillars = [
  {
    icon: HandHeart,
    title: 'Prayer',
    desc: 'Building a life and culture of prayer that moves heaven and transforms earth — teaching believers to prevail in intercession.',
  },
  {
    icon: Flame,
    title: 'Intimacy with God',
    desc: 'Guiding souls into the secret place — where the knowledge of God is not merely intellectual but deeply experiential.',
  },
  {
    icon: Users,
    title: 'The Holy Spirit',
    desc: 'Teaching the Body of Christ to follow and flow with the Holy Spirit — yielding to His voice, gifts, and leading in daily life.',
  },
  {
    icon: BookOpen,
    title: 'Teaching the Word',
    desc: 'Expounding Scripture with clarity, revelation, and precision — making the Word practical and life-giving for every believer.',
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
                From his undergraduate years, he has faithfully walked in the Lord's calling —
                preaching the Word, cultivating prayer, and leading believers into deeper intimacy
                with the Holy Spirit.
              </p>
              <p className="text-[#4a4a4a] text-[0.95rem] leading-[1.85] mb-8">
                He serves within Rhema Nigeria in both leadership and administrative capacities, and
                instructs at the Rhema Bible Training Center. He itinerates widely, carrying the
                fire of God's Word to churches and conferences across Nigeria.
              </p>

              {/* Credentials */}
              <div className="space-y-3 mb-8">
                {[
                  'Diploma in Ministerial Studies — Rhema Bible Training Center Nigeria',
                  'B.Sc. — Obafemi Awolowo University, Ile-Ife',
                  'Certified in Business Intelligence & Financial Modeling — CFI',
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
        quote="Prayer is not a religious duty — it is the breath of the spirit-filled believer. When you learn to pray, you learn to reign."
        author="Rev. Adegbola Oladosu"
      />

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
          <div className="flex flex-col gap-4">
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="bg-[#0a1628] py-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Gallery</span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>
          <h2
            className="font-serif font-semibold text-white text-center"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Ministry in Pictures
          </h2>
        </div>

        <div className="grid gap-1 h-[260px] sm:h-[320px]" style={{ gridTemplateColumns: 'clamp(120px, 50%, 400px) 1fr 1fr' }}>
          {[
            { src: rhemaImg, alt: 'Rev. Gbola at Rhema Ministers Conference' },
            { src: portraitImg, alt: 'Rev. Gbola portrait' },
            { src: coupleImg, alt: 'Rev. Gbola and Mrs. Deborah Oladosu' },
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden relative group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 saturate-[0.85] group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs tracking-widest uppercase mt-6">
          More photos coming soon
        </p>
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
