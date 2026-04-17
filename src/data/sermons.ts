export type SermonCategory = 'Prayer' | 'Holy Spirit' | 'Intimacy with God' | 'Faith' | 'Leadership' | 'The Word'

export interface Sermon {
  id: string
  title: string
  category: SermonCategory
  date: string
  duration: string
  excerpt: string
  scripture: string
  youtubeId: string   // Real YouTube video ID, the actual content
}

// These 5 sermons are backed by real YouTube videos from @gbola_oladosu
// Title/category/scripture are descriptive labels, the real content is the YouTube embed
export const sermons: Sermon[] = [
  {
    id: '1',
    title: 'Teaching 1',
    category: 'Prayer',
    date: '2025',
    duration: 'Full Message',
    excerpt: 'A powerful teaching from Rev. Gbola Oladosu. Click Watch to view the full message on YouTube.',
    scripture: 'Matthew 18:18',
    youtubeId: 'HSY6mnleBSk',
  },
  {
    id: '2',
    title: 'Teaching 2',
    category: 'Holy Spirit',
    date: '2025',
    duration: 'Full Message',
    excerpt: 'A powerful teaching from Rev. Gbola Oladosu. Click Watch to view the full message on YouTube.',
    scripture: 'John 16:13',
    youtubeId: 'dpLajwi2nMs',
  },
  {
    id: '3',
    title: 'Teaching 3',
    category: 'Intimacy with God',
    date: '2024',
    duration: 'Full Message',
    excerpt: 'A powerful teaching from Rev. Gbola Oladosu. Click Watch to view the full message on YouTube.',
    scripture: 'Psalm 91:1',
    youtubeId: 'cAlknNe1oiM',
  },
  {
    id: '4',
    title: 'Teaching 4',
    category: 'Faith',
    date: '2024',
    duration: 'Full Message',
    excerpt: 'A powerful teaching from Rev. Gbola Oladosu. Click Watch to view the full message on YouTube.',
    scripture: 'Romans 4:20',
    youtubeId: '6t7YH4TnHIc',
  },
  {
    id: '5',
    title: 'Teaching 5',
    category: 'Leadership',
    date: '2024',
    duration: 'Full Message',
    excerpt: 'A powerful teaching from Rev. Gbola Oladosu. Click Watch to view the full message on YouTube.',
    scripture: 'Luke 10:19',
    youtubeId: 'i7sSAp1R9mE',
  },
]

export const categoryColors: Record<SermonCategory, string> = {
  Prayer: '#1a2f4a',
  'Holy Spirit': '#1a2a4a',
  'Intimacy with God': '#0e2238',
  Faith: '#1c2e1a',
  Leadership: '#2a1a0e',
  'The Word': '#1a0e2a',
}
