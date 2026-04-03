import { type MinistryEvent } from '@/data/events'

const MONTH_MAP: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
}

/**
 * Returns the end-of-day Date for an event.
 * We use end-of-day so an event only moves to Past after its day fully ends.
 */
export function eventEndDate(event: MinistryEvent): Date {
  const month = MONTH_MAP[event.month] ?? 0
  const day = parseInt(event.day, 10)
  const year = parseInt(event.year, 10)
  // End of the event day (23:59:59)
  return new Date(year, month, day, 23, 59, 59)
}

/** True if the event date has fully passed */
export function isEventPast(event: MinistryEvent): boolean {
  return eventEndDate(event) < new Date()
}

/** Sort events by date ascending (soonest first) */
export function sortByDate(evts: MinistryEvent[], direction: 'asc' | 'desc' = 'asc'): MinistryEvent[] {
  return [...evts].sort((a, b) => {
    const diff = eventEndDate(a).getTime() - eventEndDate(b).getTime()
    return direction === 'asc' ? diff : -diff
  })
}

/** Split events into upcoming and past, both sorted correctly */
export function splitEvents(evts: MinistryEvent[]) {
  const upcoming = sortByDate(evts.filter(e => !isEventPast(e)), 'asc')
  const past = sortByDate(evts.filter(e => isEventPast(e)), 'desc')
  return { upcoming, past }
}

/** Format a relative label like "In 3 days" or "2 days ago" */
export function relativeLabel(event: MinistryEvent): string {
  const now = new Date()
  const end = eventEndDate(event)
  const diffMs = end.getTime() - now.getTime()
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays < 0) return `${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? '' : 's'} ago`
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Tomorrow'
  if (diffDays <= 7) return `In ${diffDays} days`
  if (diffDays <= 30) return `In ${Math.ceil(diffDays / 7)} week${Math.ceil(diffDays / 7) === 1 ? '' : 's'}`
  return `${event.day} ${event.month} ${event.year}`
}
