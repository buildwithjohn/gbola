import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, X, ChevronLeft, ChevronRight, FileText, ExternalLink } from 'lucide-react'
import { articles } from '@/data/articles'
import articleP1 from '@/assets/article-prophecy-p1.jpg'
import articleP2 from '@/assets/article-prophecy-p2.jpg'

// Map article id → actual imported images
const articleImages: Record<string, string[]> = {
  '1': [articleP1, articleP2],
}

export default function Articles() {
  const [openArticleId, setOpenArticleId] = useState<string | null>(null)
  const [scanView, setScanView] = useState(false)
  const [scanPage, setScanPage] = useState(0)

  const openArticle = articles.find(a => a.id === openArticleId)

  const closeModal = () => {
    setOpenArticleId(null)
    setScanView(false)
    setScanPage(0)
    document.body.style.overflow = ''
  }

  const openModal = (id: string) => {
    setOpenArticleId(id)
    setScanView(false)
    setScanPage(0)
    document.body.style.overflow = 'hidden'
  }

  const images = openArticleId ? (articleImages[openArticleId] ?? []) : []

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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Written Word</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Articles & Writings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-base max-w-xl leading-[1.75]"
          >
            Published writings from Rev. Gbola Oladosu, expounding the Word with clarity and precision.
          </motion.p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-[#f8f6f0] py-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.13)] transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => openModal(article.id)}
              >
                {/* Magazine scan thumbnail */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0a1628]">
                  <img
                    src={articleImages[article.id]?.[0]}
                    alt={article.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                  {/* Publication badge */}
                  <div className="absolute top-3 left-3 bg-[#c9a84c] text-[#0a1628] text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1.5">
                    {article.publication} · {article.year}
                  </div>
                  {/* Pages count */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                    <FileText size={10} className="text-white/70" />
                    <span className="text-[9px] text-white/70 tracking-wide">{(articleImages[article.id] ?? []).length} pages</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#c9a84c] mb-2">
                    <BookOpen size={11} />
                    <span className="tracking-wide">{article.scripture}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#0a1628] leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-[1.75] line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#0a1628] group-hover:text-[#c9a84c] transition-colors duration-300">
                      <div className="w-7 h-7 rounded-full border-[1.5px] border-current flex items-center justify-center">
                        <BookOpen size={10} />
                      </div>
                      Read Article
                    </span>
                    <span className="text-[10px] text-gray-300 italic">
                      {article.author}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {openArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[300] flex items-start justify-center overflow-y-auto py-8 px-4"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-3xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close + view toggle */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setScanView(false)}
                    className={`text-[10px] tracking-[0.15em] uppercase px-4 py-2 font-semibold transition-all duration-200 ${
                      !scanView ? 'bg-[#c9a84c] text-[#0a1628]' : 'border border-white/30 text-white/60 hover:text-white'
                    }`}
                  >
                    Read Text
                  </button>
                  <button
                    onClick={() => { setScanView(true); setScanPage(0) }}
                    className={`text-[10px] tracking-[0.15em] uppercase px-4 py-2 font-semibold transition-all duration-200 ${
                      scanView ? 'bg-[#c9a84c] text-[#0a1628]' : 'border border-white/30 text-white/60 hover:text-white'
                    }`}
                  >
                    View Original
                  </button>
                </div>
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                >
                  <X size={18} />
                  <span className="text-[10px] tracking-widest uppercase">Close</span>
                </button>
              </div>

              {/* ── SCAN VIEW ── */}
              {scanView ? (
                <div>
                  <img
                    src={images[scanPage]}
                    alt={`${openArticle.title} page ${scanPage + 1}`}
                    className="w-full shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
                  />
                  {images.length > 1 && (
                    <div className="flex items-center justify-between mt-4">
                      <button
                        onClick={() => setScanPage(p => Math.max(0, p - 1))}
                        disabled={scanPage === 0}
                        className="flex items-center gap-2 text-white/50 hover:text-[#c9a84c] disabled:opacity-25 transition-colors text-sm"
                      >
                        <ChevronLeft size={16} /> Previous Page
                      </button>
                      <span className="text-white/40 text-xs">
                        Page {scanPage + 1} of {images.length}
                      </span>
                      <button
                        onClick={() => setScanPage(p => Math.min(images.length - 1, p + 1))}
                        disabled={scanPage === images.length - 1}
                        className="flex items-center gap-2 text-white/50 hover:text-[#c9a84c] disabled:opacity-25 transition-colors text-sm"
                      >
                        Next Page <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* ── TEXT VIEW ── */
                <div className="bg-white">
                  {/* Header */}
                  <div className="bg-[#0a1628] px-8 py-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-px bg-[#c9a84c]" />
                      <span className="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c] font-medium">
                        {openArticle.publication} · {openArticle.year}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white leading-snug mb-3">
                      {openArticle.title}
                    </h2>
                    <div className="flex items-center gap-3">
                      <span className="text-white/50 text-sm">By {openArticle.author}</span>
                      <span className="w-1 h-1 rounded-full bg-[#c9a84c]/50" />
                      <span className="flex items-center gap-1.5 text-[#c9a84c] text-sm">
                        <BookOpen size={12} /> {openArticle.scripture}
                      </span>
                    </div>
                  </div>

                  {/* Pull quote 1 */}
                  <div className="px-8 py-6 bg-[#f8f6f0] border-l-4 border-[#c9a84c]">
                    <p className="font-serif italic text-[#0a1628] text-lg leading-[1.6]">
                      "{openArticle.content.pullQuotes[0]}"
                    </p>
                  </div>

                  {/* Article body */}
                  <div className="px-8 py-8 space-y-6">
                    {openArticle.content.sections.map((section, i) => (
                      <div key={i}>
                        {section.heading && (
                          <h3 className="font-serif text-xl font-semibold text-[#0a1628] mb-3 mt-2">
                            {section.heading}
                          </h3>
                        )}
                        {section.paragraphs.map((para, j) => (
                          <p key={j} className="text-[0.93rem] text-gray-600 leading-[1.85] mb-3">
                            {para}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Pull quote 2 */}
                  {openArticle.content.pullQuotes[1] && (
                    <div className="mx-8 mb-8 px-8 py-6 bg-[#0a1628] border-l-4 border-[#c9a84c]">
                      <p className="font-serif italic text-white text-lg leading-[1.6]">
                        "{openArticle.content.pullQuotes[1]}"
                      </p>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="px-8 py-5 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs text-gray-400">
                      Published in <span className="font-medium text-[#c9a84c]">{openArticle.publication}</span> · {openArticle.year}
                    </p>
                    <button
                      onClick={() => { setScanView(true); setScanPage(0) }}
                      className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#0a1628] hover:text-[#c9a84c] transition-colors duration-300 font-semibold"
                    >
                      <ExternalLink size={11} /> View Original Scans
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
