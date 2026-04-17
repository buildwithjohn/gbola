import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle } from 'lucide-react'
import rhemaImg from '@/assets/rhema.jpg'

const speakingAreas = [
  'Word & Prayer Conferences',
  'Ministers & Leadership Training',
  'Revivals & Evangelistic Meetings',
  'Prayer Summits & Retreats',
  'Youth & Campus Ministry Events',
  'Special Sunday Services',
]

export default function Invite() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', church: '', email: '', phone: '', date: '', type: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#050e1d] via-[#0a1628] to-[#0f2040] pt-40 pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">Speaking Engagements</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Invite Rev. Gbola
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8f6f0] py-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left info */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src={rhemaImg}
                alt="Rev. Gbola at conference"
                className="w-full aspect-video object-cover object-top mb-10 shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
              />
              <h2
                className="font-serif font-semibold text-[#0a1628] leading-[1.15] mb-5"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
              >
                Bring a Clear Word to<br />Your Congregation
              </h2>
              <p className="text-[#555] text-sm leading-[1.85] mb-7">
                Rev. Gbola Oladosu carries a strong teaching anointing and ministers powerfully
                in prayer and the Holy Spirit. He is available for conferences, revivals, prayer
                summits, ministers' training, and special services across Nigeria.
              </p>

              <div className="space-y-2.5 mb-8">
                {speakingAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#c9a84c] flex-shrink-0" />
                    <span className="text-sm text-[#444]">{area}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-5 bg-white border-l-[3px] border-[#c9a84c] shadow-sm">
                <Mail size={16} className="text-[#c9a84c] flex-shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-medium mb-0.5">Direct Email</p>
                  <p className="text-sm text-[#0a1628] font-medium">revgbolaoladosu@gmail.com</p>
                </div>
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <div className="bg-white p-12 text-center shadow-sm">
                  <CheckCircle size={48} className="text-[#c9a84c] mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-[#0a1628] mb-3">
                    Request Received!
                  </h3>
                  <p className="text-[#555] text-sm leading-[1.75]">
                    Thank you for your invitation. Rev. Gbola's team will review your request and
                    contact you shortly. God bless you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm space-y-5">
                  <h3 className="font-serif text-xl font-semibold text-[#0a1628] mb-2">
                    Invitation Request Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Pastor John Doe"
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Church / Ministry *</label>
                      <input name="church" value={form.church} onChange={handleChange} required placeholder="Grace Assembly"
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="pastor@church.org"
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Event Date *</label>
                      <input name="date" type="date" value={form.date} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Event Type *</label>
                      <select name="type" value={form.type} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors bg-white text-gray-700">
                        <option value="">Select type...</option>
                        <option>Conference</option>
                        <option>Prayer Summit</option>
                        <option>Revival Meeting</option>
                        <option>Ministers Training</option>
                        <option>Youth Event</option>
                        <option>Sunday Service</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-gray-400 mb-2">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Tell us about your event and what you're trusting God for..."
                      className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#c9a84c] transition-colors resize-vertical" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)] transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)' }}
                  >
                    Submit Invitation Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
