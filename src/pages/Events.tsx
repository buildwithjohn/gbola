import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CalendarCheck, ChevronDown, Clock, CheckCircle } from 'lucide-react'
import EventCard from '@/components/EventCard'
import { events } from '@/data/events'
import { splitEvents, relativeLabel, isEventPast } from '@/lib/eventUtils'
import prayerConferenceFlyer from '@/assets/prayer-conference-flyer.jpg'
import prayerSchoolFlyer from '@/assets/prayer-school-flyer.png'
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
const flyerMap: Record<string, string> = {
  // Upcoming
  'prayer-school-rhema': prayerSchoolFlyer,
  'rhema-authority-1': authorityBelieversFlyer,
  'scripture-city-1': prayerConferenceFlyer,
  'scripture-city-2': prayerConferenceFlyer,
  // Past
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

// Featured spotlight, the next upcoming event with a flyer
const spotlightEvent = {
  id: 'rhema-authority-1',
  flyer: authorityBelieversFlyer,
  badge: 'Rhema Nigeria, Abuja Campus · Open to the Public',
  title: 'Authority of the Believer 1',
  subtitle: 'A Taster Session: Free Bible Class',
  description: 'Too many believers live beneath what Christ has provided. Too many tolerate what they have authority over. Jesus said: "I give you the authority… over all the power of the enemy.", Luke 10:19 (NKJV)\n\nIt\'s time to rise.',
  bullets: [
    'Come ready to be grounded in truth',
    'Come ready to grow in confidence',
    'Come ready to walk in authority',
  ],
  venue: 'Rhema Bible Training Centre, Plot 1531, CAD Zone B11, Kaura District, beside Eagle FM Station, Abuja',
  enquiries: '09034841366 · 08100163948',
  speakers: ['Rev. Toks Adejuwon', 'Rev. Gbola Oladosu'],
}

const { upcoming, past } = splitEvents(events)
const spotlightIsPast = isEventPast({ id: 'rhema-authority-1', day: '14', month: 'Apr', year: '2026', title: '', location: '', time: '', tag: '' })

export default function Events() {
  const [pastOpen, setPastOpen] = useState(false)

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#050e1d] via-[#0a1628] to-[#0f2040] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(201,168,76,0.4) 60px,rgba(201,168,76,0.4) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(201,168,76,0.4) 60px,rgba(201,168,76,0.4) 61px)`,
        }} />
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Calendar</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Events & Meetings
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/55 text-base max-w-xl leading-[1.75]">
            Upcoming conferences, prayer summits, training days, and special meetings where Rev. Gbola will be ministering.
          </motion.p>

          {/* Live stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Clock size={13} className="text-[#c9a84c]" />
              <span className="text-[11px] tracking-[0.15em] uppercase text-white/40">
                {upcoming.length} Upcoming
              </span>
            </div>
            {past.length > 0 && (
              <div className="flex items-center gap-2">
                <CheckCircle size={13} className="text-white/25" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-white/30">
                  {past.length} Past
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED SPOTLIGHT (only show if not past) ── */}
      {!spotlightIsPast && (
        <section className="bg-[#0d0505] py-16 border-b border-[#c9a84c]/15">
          <div className="max-w-5xl mx-auto px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <img src={spotlightEvent.flyer} alt="Authority of the Believer flyer"
                  className="w-full max-w-sm mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-sm" />
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] tracking-[0.15em] uppercase font-bold px-3 py-1.5">
                  ★ Next Up
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-[#c9a84c]" />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">{spotlightEvent.badge}</span>
                </div>
                <h2 className="font-serif font-semibold text-white leading-[1.1] mb-1" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
                  {spotlightEvent.title}
                </h2>
                <p className="font-serif italic text-[#c9a84c] text-lg mb-5">{spotlightEvent.subtitle}</p>
                {spotlightEvent.description.split('\n\n').map((p, i) => (
                  <p key={i} className="text-white/60 text-sm leading-[1.85] mb-3">{p}</p>
                ))}
                <div className="space-y-2 my-5">
                  {spotlightEvent.bullets.map(b => (
                    <div key={b} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0 mt-1.5" />
                      <span className="text-white/70 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 my-6 p-4 border border-[#c9a84c]/25 hover:border-[#c9a84c]/60 transition-colors duration-300">
                  <div className="text-center bg-[#c9a84c] px-3 py-2 flex-shrink-0">
                    <div className="font-serif text-xl font-bold text-[#0a1628] leading-none">12–14</div>
                    <div className="text-[8px] tracking-widest uppercase text-[#0a1628]/70 mt-0.5">Apr 2026</div>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Sun · Mon · Tue</p>
                    <p className="text-[#c9a84c] text-[11px] font-semibold mt-0.5">5:00 PM – 8:30 PM daily</p>
                  </div>
                </div>
                <div className="text-sm text-white/50 mb-4 flex items-start gap-2">
                  <span className="text-[#c9a84c] flex-shrink-0">📍</span>
                  <span>{spotlightEvent.venue}</span>
                </div>
                <div className="mb-5">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-medium mb-2">Faculty</p>
                  <div className="flex flex-wrap gap-2">
                    {spotlightEvent.speakers.map(s => (
                      <span key={s} className={`text-[10px] px-3 py-1.5 tracking-wide ${
                        s.includes('Gbola') ? 'bg-[#c9a84c] text-[#0a1628] font-semibold' : 'border border-white/20 text-white/60'
                      }`}>{s}</span>
                    ))}
                  </div>
                </div>
                <p className="text-white/30 text-[11px]">Enquiries: {spotlightEvent.enquiries}</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ── UPCOMING EVENTS ── */}
      <section className="bg-[#f8f6f0] py-20">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          {upcoming.length > 0 ? (
            <>
              <div className="flex items-center gap-4 mb-3">
                <Clock size={14} className="text-[#0a1628]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a1628] font-medium">
                  Upcoming, {upcoming.length} event{upcoming.length !== 1 ? 's' : ''}
                </span>
              </div>
              <p className="text-[11px] text-gray-400 mb-8 ml-6">Dates are auto-detected. Past events move down automatically.</p>

              <div className="flex flex-col gap-4">
                {upcoming.map((event, i) => (
                  <div key={event.id} className="relative">
                    {/* Relative date badge */}
                    <div className="absolute -top-2.5 right-3 z-10">
                      <span className="text-[9px] tracking-[0.15em] uppercase bg-[#0a1628] text-[#c9a84c] px-2.5 py-1 font-semibold">
                        {relativeLabel(event)}
                      </span>
                    </div>
                    <EventCard event={event} index={i} flyerSrc={flyerMap[event.id]} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <CalendarCheck size={40} className="text-gray-300 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-gray-400 mb-2">No Upcoming Events</h3>
              <p className="text-gray-400 text-sm">Check back soon, new events will appear here automatically.</p>
            </div>
          )}

          {/* ── PAST EVENTS (collapsible) ── */}
          {past.length > 0 && (
            <div className="mt-16">
              <button
                onClick={() => setPastOpen(v => !v)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white border border-gray-200 hover:border-[#0a1628] transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle size={14} className="text-gray-300" />
                  <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-medium group-hover:text-[#0a1628] transition-colors duration-300">
                    Past Events, {past.length}
                  </span>
                </div>
                <motion.div animate={{ rotate: pastOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={16} className="text-gray-300 group-hover:text-[#0a1628] transition-colors duration-300" />
                </motion.div>
              </button>

              <AnimatePresence>
                {pastOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-3 pt-3 pb-2">
                      {past.map((event, i) => (
                        <div key={event.id} className="relative opacity-70 hover:opacity-100 transition-opacity duration-300">
                          {/* "Completed" badge */}
                          <div className="absolute -top-2.5 right-3 z-10">
                            <span className="text-[9px] tracking-[0.15em] uppercase bg-gray-200 text-gray-500 px-2.5 py-1 font-semibold">
                              Completed
                            </span>
                          </div>
                          <EventCard event={event} index={i} flyerSrc={flyerMap[event.id]} />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Invite CTA */}
          <div className="bg-[#0a1628] px-8 sm:px-10 py-12 text-center mt-16">
            <CalendarCheck size={32} className="text-[#c9a84c] mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-semibold text-white mb-3">Invite Rev. Gbola to Your Church</h3>
            <p className="text-white/50 text-sm leading-[1.75] max-w-md mx-auto mb-7">
              Would you like Rev. Gbola Oladosu to minister at your church, conference, or special gathering?
            </p>
            <Link to="/invite"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)' }}>
              Submit an Invitation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
