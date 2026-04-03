export interface MinistryEvent {
  id: string
  day: string
  month: string
  year: string
  title: string
  location: string
  time: string
  tag: string
  flyer?: string
  featured?: boolean
  coSpeakers?: string[]
  host?: string
}

export const events: MinistryEvent[] = [
  // ─── CONFIRMED UPCOMING ─────────────────────────────────────────
  {
    id: 'rhema-authority-1',
    day: '12',
    month: 'Apr',
    year: '2026',
    title: 'Authority of the Believer 1 — Free Bible Class',
    location: 'Rhema Bible Training Centre, Plot 1531, CAD Zone B11, Kaura District, beside Eagle FM Station, Abuja',
    time: 'Sun–Tue (12th–14th Apr) · 5:00 PM – 8:30 PM daily',
    tag: 'Bible Class',
    featured: true,
    host: 'Rhema Nigeria — Abuja Campus',
    coSpeakers: ['Rev. Toks Adejuwon'],
  },
  {
    id: 'scripture-city-1',
    day: '27',
    month: 'Mar',
    year: '2026',
    title: 'ScriptureCity Prayer Conference',
    location: 'Charis Hub, Atlantic Mall, Utako, Abuja',
    time: 'Friday 5pm · Saturday 9am',
    tag: 'Prayer Conference',
    featured: true,
    host: 'ScriptureCity Church',
    coSpeakers: ['Min. Emmanuel Akin-Williams', 'Min. Obajuwon Adeboye', 'Min. Seyi Oke'],
  },
  {
    id: 'scripture-city-2',
    day: '29',
    month: 'Mar',
    year: '2026',
    title: 'ScriptureCity Prayer Conference — Sunday',
    location: 'Hall 3, Novare Central Mall, Plot 502 Dalaba Street, Wuse Zone 5, Abuja',
    time: 'Sunday 9am',
    tag: 'Prayer Conference',
    featured: true,
    host: 'ScriptureCity Church',
    coSpeakers: ['Min. Emmanuel Akin-Williams', 'Min. Obajuwon Adeboye', 'Min. Seyi Oke'],
  },
]
