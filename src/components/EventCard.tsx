import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Users, X, ExternalLink } from 'lucide-react'
import { type MinistryEvent } from '@/data/events'

interface EventCardProps {
  event: MinistryEvent
  index?: number
  flyerSrc?: string   // optional flyer image passed from parent
}

export default function EventCard({ event, index = 0, flyerSrc }: EventCardProps) {
  const [flyerOpen, setFlyerOpen] = useState(false)

  // Lock body scroll when flyer modal is open
  const openFlyer = () => {
    document.body.style.overflow = 'hidden'
    setFlyerOpen(true)
  }
  const closeFlyer = () => {
    document.body.style.overflow = ''
    setFlyerOpen(false)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.09 }}
        whileHover={{ x: 4 }}
        className={`grid items-center bg-white px-6 sm:px-9 py-6 sm:py-7 border-l-[3px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer ${
          event.featured
            ? 'border-[#c9a84c]'
            : 'border-transparent hover:border-[#c9a84c]'
        }`}
        style={{ gridTemplateColumns: '72px 1fr auto' }}
        onClick={flyerSrc ? openFlyer : undefined}
      >
        {/* Date box */}
        <div className="text-center bg-[#112240] px-2 py-3">
          <div className="font-serif text-[2rem] font-bold text-[#c9a84c] leading-none">
            {event.day}
          </div>
          <div className="text-[9px] tracking-[0.22em] uppercase text-white/55 mt-1">
            {event.month} {event.year}
          </div>
        </div>

        {/* Info */}
        <div className="px-4 sm:px-0 sm:ml-6">
          {/* Featured badge */}
          {event.featured && (
            <span className="inline-block text-[8px] tracking-[0.2em] uppercase bg-[#c9a84c]/15 text-[#c9a84c] px-2 py-0.5 mb-2 font-semibold">
              ★ Upcoming
            </span>
          )}

          {/* Host */}
          {event.host && (
            <p className="text-[9px] tracking-[0.18em] uppercase text-[#c9a84c] font-medium mb-1">
              {event.host}
            </p>
          )}

          <h3 className="font-serif text-[1.1rem] font-semibold text-[#0a1628] mb-2 leading-snug">
            {event.title}
          </h3>

          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <MapPin size={11} className="text-[#c9a84c] flex-shrink-0" />
              {event.location}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <Clock size={11} className="text-[#c9a84c] flex-shrink-0" />
              {event.time}
            </span>
          </div>

          {/* Co-speakers */}
          {event.coSpeakers && event.coSpeakers.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2">
              <Users size={10} className="text-[#c9a84c] flex-shrink-0" />
              <span className="text-[10px] text-gray-400 italic">
                With {event.coSpeakers.join(' · ')}
              </span>
            </div>
          )}
        </div>

        {/* Right, tag + flyer button */}
        <div className="flex flex-col items-end gap-2 ml-2">
          <div className="hidden md:block text-[10px] tracking-[0.18em] uppercase text-[#c9a84c] border border-[#c9a84c]/40 px-4 py-1.5 whitespace-nowrap">
            {event.tag}
          </div>
          {flyerSrc && (
            <button
              onClick={e => { e.stopPropagation(); openFlyer() }}
              className="hidden sm:flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase text-[#c9a84c] hover:text-[#e8c97a] transition-colors duration-300 font-medium"
            >
              <ExternalLink size={10} />
              View Flyer
            </button>
          )}
        </div>
      </motion.div>

      {/* Flyer Modal */}
      <AnimatePresence>
        {flyerOpen && flyerSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
            onClick={closeFlyer}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative z-10 max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeFlyer}
                className="absolute -top-10 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
              >
                <X size={18} />
                <span className="text-[10px] tracking-widest uppercase">Close</span>
              </button>

              {/* Flyer image */}
              <img
                src={flyerSrc}
                alt={`${event.title} flyer`}
                className="w-full rounded-sm shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
              />

              {/* Bottom info */}
              <div className="mt-4 text-center">
                <p className="font-serif text-white text-lg font-semibold">{event.title}</p>
                <p className="text-[#c9a84c] text-[11px] tracking-[0.2em] uppercase mt-1">
                  {event.day} {event.month} {event.year} · {event.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
