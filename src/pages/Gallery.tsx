import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react'
import { galleryPhotos, galleryCategories, type GalleryCategory, type GalleryPhoto } from '@/data/gallery'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All')
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered = activeCategory === 'All'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory)

  // Open lightbox
  const openLightbox = (photo: GalleryPhoto) => {
    const idx = filtered.findIndex(p => p.id === photo.id)
    setLightboxIndex(idx)
    setLightboxPhoto(photo)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxPhoto(null)
    document.body.style.overflow = ''
  }, [])

  const prev = useCallback(() => {
    const newIdx = (lightboxIndex - 1 + filtered.length) % filtered.length
    setLightboxIndex(newIdx)
    setLightboxPhoto(filtered[newIdx])
  }, [lightboxIndex, filtered])

  const next = useCallback(() => {
    const newIdx = (lightboxIndex + 1) % filtered.length
    setLightboxIndex(newIdx)
    setLightboxPhoto(filtered[newIdx])
  }, [lightboxIndex, filtered])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightboxPhoto) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxPhoto, prev, next, closeLightbox])

  // Category counts
  const counts: Record<string, number> = { All: galleryPhotos.length }
  galleryPhotos.forEach(p => {
    counts[p.category] = (counts[p.category] ?? 0) + 1
  })

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#050e1d] via-[#0a1628] to-[#0f2040] pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(201,168,76,0.4) 60px,rgba(201,168,76,0.4) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(201,168,76,0.4) 60px,rgba(201,168,76,0.4) 61px)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Ministry in Pictures</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-base max-w-xl leading-[1.75]"
          >
            A collection of moments from ministry, family life, and the journey of faith.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-2 mt-8"
          >
            <Images size={14} className="text-[#c9a84c]" />
            <span className="text-[11px] tracking-[0.15em] uppercase text-white/40">
              {galleryPhotos.length} Photos · {galleryCategories.length - 1} Categories
            </span>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#0a1628] border-b border-[#c9a84c]/15 sticky top-[64px] z-40">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 text-[10px] tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#c9a84c] text-[#0a1628]'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat ? 'bg-[#0a1628]/20 text-[#0a1628]' : 'bg-white/10 text-white/40'
                }`}>
                  {counts[cat] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="bg-[#060e1c] py-16 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          {/* Category heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mb-8"
            >
              {activeCategory !== 'All' && (
                <div className="flex items-center gap-4 mb-1">
                  <div className="w-6 h-px bg-[#c9a84c]" />
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[#c9a84c] font-medium">
                    {activeCategory}
                  </span>
                  <span className="text-[9px] text-white/30">— {filtered.length} photos</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Masonry-style responsive grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
            >
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
                  onClick={() => openLightbox(photo)}
                  className="relative break-inside-avoid cursor-pointer group overflow-hidden block mb-3"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0a1628]/0 group-hover:bg-[#0a1628]/50 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn
                      size={28}
                      className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
                    />
                  </div>
                  {/* Category tag on hover */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 px-3 py-2 bg-[#0a1628]/80 backdrop-blur-sm">
                    <p className="text-[9px] tracking-[0.18em] uppercase text-[#c9a84c] font-medium truncate">
                      {photo.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[400] flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-sm"
            >
              <X size={20} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-white/40 text-[11px] tracking-[0.2em] uppercase">
              {lightboxIndex + 1} / {filtered.length}
            </div>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-sm"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxPhoto.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 max-w-5xl max-h-[85vh] mx-16"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                className="max-w-full max-h-[85vh] object-contain shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
              />
              {/* Caption */}
              <div className="absolute -bottom-9 left-0 right-0 text-center">
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#c9a84c] font-medium">
                  {lightboxPhoto.category}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-sm"
            >
              <ChevronRight size={28} />
            </button>

            {/* Keyboard hint */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4 text-white/20 text-[10px] tracking-widest uppercase">
              <span>← → Navigate</span>
              <span>· ESC Close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
