// ─── FAMILY ──────────────────────────────────────────────────────
import fam1 from '@/assets/gallery/family/WhatsApp Image 2026-03-30 at 22.07.00.jpeg'
import fam2 from '@/assets/gallery/family/WhatsApp Image 2026-03-30 at 22.07.06.jpeg'
import fam3 from '@/assets/gallery/family/WhatsApp Image 2026-03-30 at 22.07.08 (1).jpeg'
import fam4 from '@/assets/gallery/family/WhatsApp Image 2026-03-30 at 22.07.09 (1).jpeg'
import fam5 from '@/assets/gallery/family/WhatsApp Image 2026-03-30 at 22.07.09.jpeg'
import fam6 from '@/assets/gallery/family/WhatsApp Image 2026-03-30 at 22.07.10 (1).jpeg'
import fam7 from '@/assets/gallery/family/WhatsApp Image 2026-03-30 at 22.07.10 (2).jpeg'
import fam8 from '@/assets/gallery/family/WhatsApp Image 2026-03-30 at 22.07.10.jpeg'

// ─── ORDINATION ───────────────────────────────────────────────────
import ord1 from '@/assets/gallery/ordination/WhatsApp Image 2026-03-30 at 21.45.57 (1).jpeg'
import ord2 from '@/assets/gallery/ordination/WhatsApp Image 2026-03-30 at 21.45.57 (2).jpeg'
import ord3 from '@/assets/gallery/ordination/WhatsApp Image 2026-03-30 at 21.45.57.jpeg'

// ─── RMAI ─────────────────────────────────────────────────────────
import rmai1 from '@/assets/gallery/rmai/WhatsApp Image 2026-03-30 at 21.53.20 (1).jpeg'
import rmai2 from '@/assets/gallery/rmai/WhatsApp Image 2026-03-30 at 21.53.20 (2).jpeg'
import rmai3 from '@/assets/gallery/rmai/WhatsApp Image 2026-03-30 at 21.53.20.jpeg'
import rmai4 from '@/assets/gallery/rmai/WhatsApp Image 2026-03-30 at 21.53.21.jpeg'

// ─── RHEMA CHAPEL ─────────────────────────────────────────────────
import rc1 from '@/assets/gallery/rhema-chapel/WhatsApp Image 2026-03-30 at 21.55.07 (1).jpeg'
import rc2 from '@/assets/gallery/rhema-chapel/WhatsApp Image 2026-03-30 at 21.55.07.jpeg'

// ─── SCRIPTURE CITY ───────────────────────────────────────────────
import sc1 from '@/assets/gallery/scripture-city/CREO6748.jpg.jpeg'
import sc2 from '@/assets/gallery/scripture-city/CREO6756.jpg.jpeg'
import sc3 from '@/assets/gallery/scripture-city/CREO6757.jpg.jpeg'
import sc4 from '@/assets/gallery/scripture-city/WhatsApp Image 2026-03-30 at 21.57.44.jpeg'
import sc5 from '@/assets/gallery/scripture-city/WhatsApp Image 2026-03-30 at 21.57.45 (1).jpeg'
import sc6 from '@/assets/gallery/scripture-city/WhatsApp Image 2026-03-30 at 21.57.45.jpeg'

export type GalleryCategory =
  | 'All'
  | 'Family Moments'
  | 'Ordination'
  | 'RMAI Ministers Conference'
  | 'Rhema Chapel International'
  | 'ScriptureCity Church'

export interface GalleryPhoto {
  id: string
  src: string
  category: Exclude<GalleryCategory, 'All'>
  alt: string
}

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Family Moments',
  'Ordination',
  'RMAI Ministers Conference',
  'Rhema Chapel International',
  'ScriptureCity Church',
]

export const galleryPhotos: GalleryPhoto[] = [
  // Family
  { id: 'fam1', src: fam1, category: 'Family Moments', alt: 'Rev. Gbola Oladosu, Family' },
  { id: 'fam2', src: fam2, category: 'Family Moments', alt: 'Rev. Gbola Oladosu, Family' },
  { id: 'fam3', src: fam3, category: 'Family Moments', alt: 'Rev. Gbola Oladosu, Family' },
  { id: 'fam4', src: fam4, category: 'Family Moments', alt: 'Rev. Gbola Oladosu, Family' },
  { id: 'fam5', src: fam5, category: 'Family Moments', alt: 'Rev. Gbola Oladosu, Family' },
  { id: 'fam6', src: fam6, category: 'Family Moments', alt: 'Rev. Gbola Oladosu, Family' },
  { id: 'fam7', src: fam7, category: 'Family Moments', alt: 'Rev. Gbola Oladosu, Family' },
  { id: 'fam8', src: fam8, category: 'Family Moments', alt: 'Rev. Gbola Oladosu, Family' },

  // Ordination
  { id: 'ord1', src: ord1, category: 'Ordination', alt: 'Rev. Gbola Oladosu, Ordination' },
  { id: 'ord2', src: ord2, category: 'Ordination', alt: 'Rev. Gbola Oladosu, Ordination' },
  { id: 'ord3', src: ord3, category: 'Ordination', alt: 'Rev. Gbola Oladosu, Ordination' },

  // RMAI
  { id: 'rmai1', src: rmai1, category: 'RMAI Ministers Conference', alt: 'RMAI Ministers Conference' },
  { id: 'rmai2', src: rmai2, category: 'RMAI Ministers Conference', alt: 'RMAI Ministers Conference' },
  { id: 'rmai3', src: rmai3, category: 'RMAI Ministers Conference', alt: 'RMAI Ministers Conference' },
  { id: 'rmai4', src: rmai4, category: 'RMAI Ministers Conference', alt: 'RMAI Ministers Conference' },

  // Rhema Chapel
  { id: 'rc1', src: rc1, category: 'Rhema Chapel International', alt: 'Rhema Chapel International Churches' },
  { id: 'rc2', src: rc2, category: 'Rhema Chapel International', alt: 'Rhema Chapel International Churches' },

  // ScriptureCity
  { id: 'sc1', src: sc1, category: 'ScriptureCity Church', alt: 'ScriptureCity Church Prayer Conference' },
  { id: 'sc2', src: sc2, category: 'ScriptureCity Church', alt: 'ScriptureCity Church Prayer Conference' },
  { id: 'sc3', src: sc3, category: 'ScriptureCity Church', alt: 'ScriptureCity Church Prayer Conference' },
  { id: 'sc4', src: sc4, category: 'ScriptureCity Church', alt: 'ScriptureCity Church Prayer Conference' },
  { id: 'sc5', src: sc5, category: 'ScriptureCity Church', alt: 'ScriptureCity Church Prayer Conference' },
  { id: 'sc6', src: sc6, category: 'ScriptureCity Church', alt: 'ScriptureCity Church Prayer Conference' },
]
