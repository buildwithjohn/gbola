import { Link } from 'react-router-dom'
import logoImg from '@/assets/logo.png'
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert('Thank you for subscribing! God bless you.')
      setEmail('')
    }
  }

  return (
    <footer className="bg-[#050d1a]">
      {/* Newsletter bar */}
      <div className="bg-[#c9a84c]">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="font-serif text-[1.75rem] text-[#0a1628] font-semibold">
                Stay Connected to the Word
              </h2>
              <p className="text-[#0a1628]/65 text-sm mt-2">
                Receive sermon updates, event announcements, and devotionals from Rev. Gbola.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto md:min-w-[400px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-5 py-4 bg-[#0a1628] text-white text-sm placeholder-white/35 outline-none font-[DM_Sans,sans-serif]"
              />
              <button
                type="submit"
                className="bg-[#112240] hover:bg-[#1a3358] text-[#c9a84c] px-7 py-4 text-[10px] tracking-[0.18em] uppercase font-semibold font-[DM_Sans,sans-serif] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-8 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-3">
              <img
                src={logoImg}
                alt="Rev. Gbola Oladosu"
                className="h-14 w-auto object-contain opacity-95"
              />
            </div>
            <p className="text-white/38 text-sm leading-[1.75] mt-5 max-w-[260px]">
              Ordained with Rhema Ministerial Association International. Teaching the Word.
              Raising Men of Prayer. Based in Abuja, Nigeria.
            </p>

            {/* Social icons */}
            <div className="flex gap-1.5 mt-6">
              {[
                { icon: Youtube, href: 'https://www.youtube.com/@gbola_oladosu', label: 'YouTube', hoverClass: 'hover:border-red-500 hover:text-red-500' },
                { icon: Facebook, href: 'https://www.facebook.com/gbolaoladosu', label: 'Facebook', hoverClass: 'hover:border-[#1877f2] hover:text-[#1877f2]' },
                { icon: Instagram, href: '#', label: 'Instagram', hoverClass: 'hover:border-[#e1306c] hover:text-[#e1306c]' },
                { icon: Twitter, href: '#', label: 'Twitter/X', hoverClass: 'hover:border-[#c9a84c] hover:text-[#c9a84c]' },
              ].map(({ icon: Icon, href, label, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`w-9 h-9 border border-white/12 flex items-center justify-center text-white/40 transition-all duration-300 ${hoverClass}`}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#c9a84c] font-medium mb-5">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Teachings', to: '/teachings' },
                { label: 'Videos', to: '/videos' },
              { label: 'Articles', to: '/articles' },
                { label: 'Events', to: '/events' },
                { label: 'Invite', to: '/invite' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/48 text-sm hover:text-[#e8c97a] transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching Areas */}
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#c9a84c] font-medium mb-5">
              Teaching Areas
            </h4>
            <ul className="space-y-2.5">
              {['Prayer', 'Holy Spirit', 'Intimacy with God', 'Faith', 'Leadership', 'The Word'].map((t) => (
                <li key={t}>
                  <Link
                    to="/teachings"
                    className="text-white/48 text-sm hover:text-[#e8c97a] transition-colors duration-300"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#c9a84c] font-medium mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={13} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:revgbolaoladosu@gmail.com"
                  className="text-white/48 text-sm hover:text-[#e8c97a] transition-colors duration-300 break-all"
                >
                  revgbolaoladosu@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={13} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+2348138519224"
                  className="text-white/48 text-sm hover:text-[#e8c97a] transition-colors duration-300"
                >
                  +234 813 851 9224
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="text-white/48 text-sm">Abuja, Nigeria</span>
              </div>
              {/* WhatsApp */}
              <a
                href="https://wa.me/2348138519224"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-[10px] tracking-[0.15em] uppercase text-[#25D366] hover:text-[#20ba5a] transition-colors duration-300 font-medium"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/08 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Rev. Adegbola Oladosu Ministry. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Abuja, Nigeria · Rhema Ministerial Association International</p>
        </div>
      </div>
    </footer>
  )
}
