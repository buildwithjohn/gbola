import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CalendarCheck } from 'lucide-react'
import EventCard from '@/components/EventCard'
import { events } from '@/data/events'
import prayerConferenceFlyer from '@/assets/prayer-conference-flyer.jpg'
import authorityBelieversFlyer from '@/assets/authority-believer-flyer.jpg'

// Map event IDs to their flyer images
const flyerMap: Record<string, string> = {
  'rhema-authority-1': authorityBelieversFlyer,
  'scripture-city-1': prayerConferenceFlyer,
  'scripture-city-2': prayerConferenceFlyer,
}

// Featured event spotlight data
const featuredSpotlight = {
  id: 'rhema-authority-1',
  flyer: authorityBelieversFlyer,
  badge: 'Rhema Nigeria — Abuja Campus · Open to the Public',
  title: 'Authority of the Believer 1',
  subtitle: 'A Taster Session — Free Bible Class',
  description: 'Too many believers live beneath what Christ has provided. Too many tolerate what they have authority over. Jesus said: "I give you the authority… over all the power of the enemy." — Luke 10:19 (NKJV)\n\nIt\'s time to rise.',
  bullets: [
    'Come ready to be grounded in truth',
    'Come ready to grow in confidence',
    'Come ready to walk in authority',
  ],
  dates: [
    { label: '12–14 Apr 2026', sub: 'Sun · Mon · Tue', time: '5:00 PM – 8:30 PM daily' },
  ],
  venue: 'Rhema Bible Training Centre, Plot 1531, CAD Zone B11, Kaura District, beside Eagle FM Station, Abuja',
  enquiries: '09034841366 · 08100163948',
  speakers: ['Rev. Toks Adejuwon', 'Rev. Gbola Oladosu'],
}

export default function Events() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#050e1d] via-[#0a1628] to-[#0f2040] pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.4) 60px, rgba(201,168,76,0.4) 61px)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Calendar</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Events & Meetings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-base max-w-xl leading-[1.75]"
          >
            Upcoming conferences, prayer summits, training days, and special meetings where Rev. Gbola will be ministering.
          </motion.p>
        </div>
      </section>

      {/* ── FEATURED SPOTLIGHT: Authority of the Believer ── */}
      <section className="bg-[#0d0505] py-16 border-b border-[#c9a84c]/15">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Flyer */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={featuredSpotlight.flyer}
                alt="Authority of the Believer — Free Bible Class flyer"
                className="w-full max-w-sm mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-sm"
              />
              <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] tracking-[0.15em] uppercase font-bold px-3 py-1.5">
                ★ Next Up
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#c9a84c]" />
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">
                  {featuredSpotlight.badge}
                </span>
              </div>

              <h2 className="font-serif font-semibold text-white leading-[1.1] mb-1" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
                {featuredSpotlight.title}
              </h2>
              <p className="font-serif italic text-[#c9a84c] text-lg mb-5">
                {featuredSpotlight.subtitle}
              </p>

              {featuredSpotlight.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-white/60 text-sm leading-[1.85] mb-3">
                  {para}
                </p>
              ))}

              {/* Bullets */}
              <div className="space-y-2 my-5">
                {featuredSpotlight.bullets.map(b => (
                  <div key={b} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0 mt-1.5" />
                    <span className="text-white/70 text-sm">{b}</span>
                  </div>
                ))}
              </div>

              {/* Date box */}
              <div className="flex gap-3 my-6">
                {featuredSpotlight.dates.map(d => (
                  <div key={d.label} className="flex gap-3 p-4 border border-[#c9a84c]/25 hover:border-[#c9a84c]/60 transition-colors duration-300 flex-1">
                    <div className="text-center bg-[#c9a84c] px-3 py-2 flex-shrink-0">
                      <div className="font-serif text-xl font-bold text-[#0a1628] leading-none">12–14</div>
                      <div className="text-[8px] tracking-widest uppercase text-[#0a1628]/70 mt-0.5">Apr 2026</div>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{d.sub}</p>
                      <p className="text-[#c9a84c] text-[11px] font-semibold mt-0.5">{d.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Venue */}
              <div className="text-sm text-white/50 mb-4 flex items-start gap-2">
                <span className="text-[#c9a84c] flex-shrink-0">📍</span>
                <span>{featuredSpotlight.venue}</span>
              </div>

              {/* Speakers */}
              <div className="mb-5">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-medium mb-2">Faculty</p>
                <div className="flex flex-wrap gap-2">
                  {featuredSpotlight.speakers.map(s => (
                    <span key={s} className={`text-[10px] px-3 py-1.5 tracking-wide ${
                      s.includes('Gbola')
                        ? 'bg-[#c9a84c] text-[#0a1628] font-semibold'
                        : 'border border-white/20 text-white/60'
                    }`}>{s}</span>
                  ))}
                </div>
              </div>

              {/* Enquiries */}
              <p className="text-white/30 text-[11px]">
                Enquiries: {featuredSpotlight.enquiries}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SCRIPTURE CITY FEATURED BANNER ── */}
      <section className="bg-[#0a1628] py-16 border-b border-[#c9a84c]/15">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={prayerConferenceFlyer}
                alt="ScriptureCity Prayer Conference flyer"
                className="w-full max-w-sm mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-sm"
              />
              <div className="absolute -top-3 -right-3 bg-[#c9a84c] text-[#0a1628] text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1.5">
                ★ Featured
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#c9a84c]" />
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">ScriptureCity Church · Abuja</span>
              </div>
              <h2 className="font-serif font-semibold text-white leading-[1.1] mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                Prayer Conference 2026
              </h2>

              <div className="space-y-3 mb-8">
                <div className="flex gap-4 p-4 border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-colors duration-300">
                  <div className="text-center bg-[#c9a84c] px-3 py-2 flex-shrink-0">
                    <div className="font-serif text-xl font-bold text-[#0a1628] leading-none">27–28</div>
                    <div className="text-[8px] tracking-widest uppercase text-[#0a1628]/70 mt-0.5">Mar 2026</div>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Friday 5pm · Saturday 9am</p>
                    <p className="text-white/50 text-[11px] mt-1">📍 Charis Hub, Atlantic Mall, Utako, Abuja</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-colors duration-300">
                  <div className="text-center bg-[#c9a84c] px-3 py-2 flex-shrink-0">
                    <div className="font-serif text-xl font-bold text-[#0a1628] leading-none">29</div>
                    <div className="text-[8px] tracking-widest uppercase text-[#0a1628]/70 mt-0.5">Mar 2026</div>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Sunday 9am</p>
                    <p className="text-white/50 text-[11px] mt-1">📍 Hall 3, Novare Central Mall, Wuse Zone 5, Abuja</p>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-medium mb-2">Ministers</p>
                <div className="flex flex-wrap gap-2">
                  {['Rev. Gbola Oladosu', 'Min. Emmanuel Akin-Williams', 'Min. Obajuwon Adeboye', 'Min. Seyi Oke'].map(name => (
                    <span key={name} className={`text-[10px] px-3 py-1.5 tracking-wide ${
                      name.includes('Gbola') ? 'bg-[#c9a84c] text-[#0a1628] font-semibold' : 'border border-white/20 text-white/60'
                    }`}>{name}</span>
                  ))}
                </div>
              </div>
              <p className="text-white/35 text-xs italic">Hosted by Emeka &amp; Toorera Iduma</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Events List */}
      <section className="bg-[#f8f6f0] py-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-[#0a1628]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a1628] font-medium">All Upcoming</span>
          </div>

          <div className="flex flex-col gap-4 mb-20">
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} flyerSrc={flyerMap[event.id]} />
            ))}
          </div>

          {/* Invite CTA */}
          <div className="bg-[#0a1628] px-8 sm:px-10 py-12 text-center">
            <CalendarCheck size={32} className="text-[#c9a84c] mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-semibold text-white mb-3">
              Invite Rev. Gbola to Your Church
            </h3>
            <p className="text-white/50 text-sm leading-[1.75] max-w-md mx-auto mb-7">
              Would you like Rev. Adegbola Oladosu to minister at your church, conference, or special gathering? Submit an invitation request.
            </p>
            <Link
              to="/invite"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)' }}
            >
              Submit an Invitation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
