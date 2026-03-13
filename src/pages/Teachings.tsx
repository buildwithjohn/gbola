import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import SermonCard from '@/components/SermonCard'
import { sermons, type SermonCategory } from '@/data/sermons'


const categories: ('All' | SermonCategory)[] = [
  'All',
  'Prayer',
  'Holy Spirit',
  'Intimacy with God',
  'Faith',
  'Leadership',
  'The Word',
]

const SERMONS_PER_PAGE = 6

export default function Teachings() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<'All' | SermonCategory>('All')
  const [page, setPage] = useState(1)

  const filtered = sermons.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory
    const matchSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const totalPages = Math.ceil(filtered.length / SERMONS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * SERMONS_PER_PAGE, page * SERMONS_PER_PAGE)

  const handleCategoryChange = (cat: typeof activeCategory) => {
    setActiveCategory(cat)
    setPage(1)
  }

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">The Word</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Teachings & Sermons
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/52 text-base max-w-xl leading-[1.75]"
          >
            A growing library of messages covering prayer, the Holy Spirit, intimacy with God,
            faith, leadership, and the Word.
          </motion.p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-[#f4f1eb] pt-16 pb-4">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          {/* Search */}
          <div className="relative max-w-lg mb-8">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search sermons..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1) }}
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 text-sm font-[DM Sans,sans-serif] outline-none focus:border-[#c9a84c] transition-colors duration-300"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 text-[10px] tracking-[0.18em] uppercase font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#0a1628] text-[#c9a84c]'
                    : 'bg-white text-gray-500 hover:bg-[#0a1628]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="bg-[#f4f1eb] py-12 pb-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          {paginated.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="font-serif text-2xl mb-2">No sermons found</p>
              <p className="text-sm">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((sermon, i) => (
                <SermonCard key={sermon.id} sermon={sermon} index={i} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 text-sm font-medium transition-all duration-300 ${
                    page === p
                      ? 'bg-[#0a1628] text-[#c9a84c]'
                      : 'bg-white text-gray-500 hover:bg-[#0a1628]/10'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
