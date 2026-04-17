import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import MinistryTimeline from '@/components/MinistryTimeline'
import portraitImg from '@/assets/portrait.jpg'
import coupleImg from '@/assets/couple.jpg'


export default function About() {
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-medium">The Minister</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-semibold text-white leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            About Rev. Gbola Oladosu
          </motion.h1>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-[#f8f6f0] py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <div className="relative">
                <img
                  src={portraitImg}
                  alt="Rev. Gbola Oladosu"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="hidden sm:block absolute bottom-[-16px] right-[-16px] w-1/2 h-1/2 border-2 border-[#c9a84c] -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="font-serif font-semibold text-[#0a1628] leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
              >
                A Minister of the Word<br />and of Prayer
              </h2>
              <div className="space-y-5 text-[0.95rem] leading-[1.85] text-[#4a4a4a]">
                <p>
                  Rev. Gbola Oladosu, fondly called "Brother Gbola", is an ordained minister
                  of the Gospel, credentialed with the Rhema Ministerial Association International
                  (Kenneth Hagin Ministries), Nigeria.
                </p>
                <p>
                  His ministerial journey began in his undergraduate years, where the Lord's calling
                  became clear, a calling to teach the Word with precision, to build a life of prayer,
                  and to lead believers into deep intimacy with the Holy Spirit.
                </p>
                <p>
                  After completing his formal ministerial training at the Rhema Bible Training Center
                  Nigeria, earning a Diploma in Ministerial Studies with emphasis on Spiritual and
                  Supportive Leadership, he was ordained and credentialed with RMAI, the ministerial
                  arm of Kenneth Hagin Ministries.
                </p>
                <p>
                  Rev. Gbola serves within Rhema Nigeria in leadership and administrative roles, and
                  teaches at the Bible Training Center. His ministry emphases include prayer, intimacy
                  with God, following and flowing with the Holy Spirit, and teaching the Word with
                  clarity and practical application.
                </p>
                <p>
                  He holds a Bachelor's degree from Obafemi Awolowo University, Ile-Ife, and
                  professional certifications in Business Intelligence &amp; Data Analysis, Financial
                  Modeling, and Valuation Analysis from the Corporate Finance Institute (CFI).
                </p>
                <p>
                  He is married to Mrs. Deborah Oluwadamilola Oladosu, and they are based in Abuja,
                  Nigeria, where they continue to serve the Body of Christ faithfully.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: 'Organization', value: 'Rhema Ministerial Association International' },
                  { label: 'Base', value: 'Abuja, Nigeria' },
                  { label: 'Emphases', value: 'Prayer · Holy Spirit · The Word' },
                  { label: 'Role', value: 'Minister · Instructor · Leader' },
                ].map((item) => (
                  <div key={item.label} className="bg-white px-5 py-4 border-l-[3px] border-[#c9a84c] shadow-sm">
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] mb-1 font-medium">{item.label}</p>
                    <p className="text-sm text-[#0a1628] font-medium leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <MinistryTimeline />

      {/* Family Section */}
      <section className="bg-[#f8f6f0] py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#0a1628]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a1628] font-medium">Family</span>
              </div>
              <h2
                className="font-serif font-semibold text-[#0a1628] leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
              >
                Together in Ministry
              </h2>
              <p className="text-[#4a4a4a] text-[0.95rem] leading-[1.85] mb-5">
                Rev. Gbola Oladosu is married to Mrs. Deborah Oluwadamilola Oladosu, a
                gracious partner in life and ministry. Together, they are based in Abuja, Nigeria,
                faithfully serving the Lord and the Body of Christ.
              </p>
              <p className="text-[#4a4a4a] text-[0.95rem] leading-[1.85]">
                Their home is a testimony of grace, prayer, and the presence of God, a foundation
                from which ministry flows.
              </p>
              <Link
                to="/invite"
                className="inline-flex items-center gap-2.5 mt-8 text-[#0a1628] text-[11px] tracking-[0.15em] uppercase font-semibold border-b border-[#c9a84c] pb-0.5 hover:text-[#c9a84c] transition-colors duration-300 group"
              >
                Invite Rev. Gbola to Minister
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={coupleImg}
                alt="Rev. Gbola and Mrs. Deborah Oladosu"
                className="w-full object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              />
              <div className="absolute top-4 left-4 bg-[#0a1628]/80 backdrop-blur-sm px-4 py-2 border-l-2 border-[#c9a84c]">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c]">Rhema Conference</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Section reference */}
      <section className="bg-[#112240] py-20 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <h3
            className="font-serif font-semibold text-white mb-4"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}
          >
            Hear the Word Taught with Clarity
          </h3>
          <p className="text-white/50 text-sm leading-[1.8] mb-8">
            Access Rev. Gbola's growing library of sermons across prayer, the Holy Spirit, faith,
            and the Word of God.
          </p>
          <Link
            to="/teachings"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0a1628] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)' }}
          >
            Explore Teachings <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </>
  )
}
