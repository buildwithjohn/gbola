import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Youtube, X, BookOpen, ExternalLink } from 'lucide-react'
import { type Sermon, categoryColors } from '@/data/sermons'

interface SermonCardProps {
  sermon: Sermon
  index?: number
}

export default function SermonCard({ sermon, index = 0 }: SermonCardProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [title, setTitle] = useState(sermon.title)
  const bgColor = categoryColors[sermon.category]
  const thumbnailUrl = `https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg`
  const sdThumbnail  = `https://img.youtube.com/vi/${sermon.youtubeId}/hqdefault.jpg`

  // Fetch real title from YouTube oEmbed at runtime
  useEffect(() => {
    fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${sermon.youtubeId}&format=json`)
      .then(r => r.json())
      .then(d => { if (d?.title) setTitle(d.title) })
      .catch(() => {})
  }, [sermon.youtubeId])

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.4) }}
        whileHover={{ y: -6 }}
        className="bg-white overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] transition-shadow duration-300 cursor-pointer group"
        onClick={() => setModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { (e.target as HTMLImageElement).src = sdThumbnail }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#c9a84c]/25 animate-ping scale-150" />
              <div className="relative w-14 h-14 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-[0_0_30px_rgba(201,168,76,0.5)]">
                <Play size={20} fill="#0a1628" className="text-[#0a1628] ml-1" />
              </div>
            </div>
          </div>
          {/* YouTube badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-sm">
            <Youtube size={11} className="text-red-500" />
            <span className="text-[9px] tracking-wider uppercase text-white/80 font-medium">YouTube</span>
          </div>
          {/* Category bar */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-2"
            style={{ backgroundColor: bgColor + 'dd' }}
          >
            <span className="text-[9px] tracking-[0.22em] uppercase text-[#c9a84c] font-medium">
              {sermon.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <div className="flex items-center gap-1.5 text-[11px] text-[#c9a84c] mb-2">
            <BookOpen size={11} />
            <span className="tracking-wide">{sermon.scripture}</span>
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#0a1628] leading-snug mb-3 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#c9a84c] group-hover:text-[#0a1628] transition-colors duration-300">
              <div className="w-8 h-8 rounded-full border-[1.5px] border-current flex items-center justify-center">
                <Play size={11} fill="currentColor" />
              </div>
              Watch Now
            </span>
            <a
              href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="text-gray-300 hover:text-[#c9a84c] transition-colors duration-300"
              title="Open on YouTube"
            >
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
            onClick={() => setModalOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-4xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute -top-12 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
              >
                <X size={18} />
                <span className="tracking-widest uppercase text-[10px]">Close</span>
              </button>

              {/* Video title */}
              <div className="mb-3">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-6 h-px bg-[#c9a84c]" />
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c] font-medium">
                    {sermon.category}
                  </span>
                </div>
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-white leading-snug">
                  {title}
                </h2>
              </div>

              {/* YouTube iframe */}
              <div className="aspect-video bg-black shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${sermon.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Bottom bar */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-white/40 text-xs">{sermon.scripture}</span>
                <a
                  href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-[#c9a84c] text-[11px] transition-colors duration-300"
                >
                  <ExternalLink size={12} />
                  Open on YouTube
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
