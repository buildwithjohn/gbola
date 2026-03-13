import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AudioPlayer from '@/components/AudioPlayer'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Teachings from '@/pages/Teachings'
import Videos from '@/pages/Videos'
import Events from '@/pages/Events'
import Invite from '@/pages/Invite'
import Contact from '@/pages/Contact'

import { useAudioPlayer } from '@/hooks/useAudioPlayer'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teachings" element={<Teachings />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/events" element={<Events />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const { player, togglePlay, closePlayer, seek, elapsedStr, totalStr } = useAudioPlayer()

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark' : ''}>
        <Navbar darkMode={darkMode} toggleDark={() => setDarkMode((v) => !v)} />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <AudioPlayer
          player={player}
          onTogglePlay={togglePlay}
          onClose={closePlayer}
          onSeek={seek}
          elapsedStr={elapsedStr}
          totalStr={totalStr}
        />
      </div>
    </BrowserRouter>
  )
}
