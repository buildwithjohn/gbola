import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Youtube, ExternalLink, Play } from 'lucide-react'
import VideoCard from '@/components/VideoCard'
import { youtubeVideos, YOUTUBE_CHANNEL_URL } from '@/data/videos'

// Hook to fetch real title per video ID from YouTube oEmbed
function useVideoTitle(id: string, fallback: string) {
  const [title, setTitle] = useState(fallback)
  useEffect(() => {
    fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`)
      .then((r) => r.json())
      .then((d) => { if (d?.title) setTitle(d.title) })
      .catch(() => {})
  }, [id])
  return title
}

export default function Videos() {
  const [featuredId, setFeaturedId] = useState(youtubeVideos[0]?.id ?? '')

  const featured = youtubeVideos.find((v) => v.id === featuredId) ?? youtubeVideos[0]
  const featuredTitle = useVideoTitle(featuredId, featured?.title ?? '')

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
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(220,38,38,0.04) 0%, transparent 70%)' }}
        />
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">YouTube Channel</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Video Teachings
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-5"
          >
            <p className="text-white/55 text-base max-w-xl leading-[1.75]">
              Watch Rev. Gbola Oladosu minister the Word on prayer, the Holy Spirit, faith, and intimacy with God.
            </p>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-[11px] tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(220,38,38,0.4)]"
            >
              <Youtube size={14} />
              Subscribe on YouTube
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Player + Playlist */}
      <section className="bg-[#070f1e] py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Player */}
            <div className="lg:col-span-2">
              <motion.div
                key={featuredId}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="relative aspect-video bg-black shadow-[0_8px_60px_rgba(0,0,0,0.6)]"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${featuredId}?rel=0&modestbranding=1`}
                  title={featuredTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif text-white text-xl font-semibold leading-snug">
                    {featuredTitle}
                  </h2>
                  <p className="text-[#c9a84c] text-[11px] tracking-[0.18em] uppercase font-medium mt-1">
                    Rev. Gbola Oladosu
                  </p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${featuredId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-2 text-white/40 hover:text-[#c9a84c] text-[11px] transition-colors duration-300"
                >
                  <ExternalLink size={13} />
                  <span className="hidden sm:inline">Open on YouTube</span>
                </a>
              </div>
            </div>

            {/* Playlist Sidebar */}
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] font-medium mb-4">
                Up Next
              </p>
              <div className="space-y-1.5">
                {youtubeVideos.map((video) => (
                  <SidebarItem
                    key={video.id}
                    video={video}
                    isActive={video.id === featuredId}
                    onClick={() => setFeaturedId(video.id)}
                  />
                ))}
              </div>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-5 py-3 border border-red-600/50 text-red-500 hover:bg-red-600 hover:text-white text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300"
              >
                <Youtube size={13} />
                View Full Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* All Videos Grid */}
      <section className="bg-[#0a1628] py-20">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-px bg-[#c9a84c]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">All Videos</span>
              </div>
              <h2 className="font-serif font-semibold text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Watch & Be Edified
              </h2>
            </div>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-[10px] tracking-[0.18em] uppercase font-semibold transition-all duration-300"
            >
              <Youtube size={12} />
              Subscribe
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {youtubeVideos.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} />
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-white/30 text-sm mb-5">More teachings on Rev. Gbola's YouTube channel</p>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-[11px] tracking-[0.18em] uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(220,38,38,0.35)]"
            >
              <Youtube size={16} />
              Visit YouTube Channel
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// Sidebar item with its own title fetch
function SidebarItem({
  video,
  isActive,
  onClick,
}: {
  video: { id: string; title: string }
  isActive: boolean
  onClick: () => void
}) {
  const title = useVideoTitle(video.id, video.title)

  return (
    <button
      onClick={onClick}
      className={`w-full flex gap-3 p-3 text-left transition-all duration-300 group ${
        isActive
          ? 'bg-[#c9a84c]/15 border-l-2 border-[#c9a84c]'
          : 'hover:bg-white/5 border-l-2 border-transparent'
      }`}
    >
      {/* Thumbnail */}
      <div className="relative w-20 aspect-video flex-shrink-0 bg-[#112240] overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        {isActive && (
          <div className="absolute inset-0 bg-[#c9a84c]/30 flex items-center justify-center">
            <Play size={14} fill="#c9a84c" className="text-[#c9a84c]" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-xs font-medium leading-snug line-clamp-2 ${
          isActive ? 'text-[#e8c97a]' : 'text-white/70 group-hover:text-white'
        }`}>
          {title}
        </p>
        <p className="text-[10px] text-white/35 mt-1">Rev. Gbola Oladosu</p>
      </div>
    </button>
  )
}
