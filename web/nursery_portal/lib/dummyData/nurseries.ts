export type OfstedRating = 'outstanding' | 'good' | 'requires_improvement' | 'inadequate' | 'not_rated'
export type NurseryStatus = 'active' | 'inactive'

export interface Room {
  name: string
  age_range: string
  capacity: number
}

export interface Nursery {
  id?: string
  name: string
  organisation_id: string
  address_line_1?: string
  address_line_2?: string
  city?: string
  postcode?: string
  phone?: string
  email?: string
  capacity?: number
  rooms?: Room[]
  opening_time?: string
  closing_time?: string
  ofsted_rating?: OfstedRating
  ofsted_urn?: string
  status?: NurseryStatus
}

export const dummyNurseries: Nursery[] = [
  {
    id: 'nursery-1',
    name: 'Alphabet House - Manchester',
    organisation_id: 'org-1',
    address_line_1: '123 Learning Street',
    address_line_2: 'Suite 100',
    city: 'Manchester',
    postcode: 'M1 1AA',
    phone: '0161 123 4567',
    email: 'manchester@alphabethou.se',
    capacity: 80,
    rooms: [
      { name: 'Babies', age_range: '0-12 months', capacity: 12 },
      { name: 'Toddlers', age_range: '1-2 years', capacity: 30 },
      { name: 'Preschool', age_range: '3-4 years', capacity: 38 },
    ],
    opening_time: '07:30',
    closing_time: '18:00',
    ofsted_rating: 'outstanding',
    ofsted_urn: 'EY123456',
    status: 'active',
  },
  {
    id: 'nursery-2',
    name: 'Alphabet House - Leeds',
    organisation_id: 'org-1',
    address_line_1: '456 Bright Avenue',
    city: 'Leeds',
    postcode: 'LS1 2AB',
    phone: '0113 234 5678',
    email: 'leeds@alphabethou.se',
    capacity: 60,
    rooms: [
      { name: 'Babies', age_range: '0-12 months', capacity: 10 },
      { name: 'Toddlers', age_range: '1-2 years', capacity: 25 },
      { name: 'Preschool', age_range: '3-4 years', capacity: 25 },
    ],
    opening_time: '08:00',
    closing_time: '17:30',
    ofsted_rating: 'good',
    ofsted_urn: 'EY234567',
    status: 'active',
  },
  {
    id: 'nursery-3',
    name: 'Alphabet House - Birmingham',
    organisation_id: 'org-1',
    address_line_1: '789 Rainbow Road',
    address_line_2: 'Unit 5',
    city: 'Birmingham',
    postcode: 'B1 1XY',
    phone: '0121 345 6789',
    email: 'birmingham@alphabethou.se',
    capacity: 75,
    rooms: [
      { name: 'Babies', age_range: '0-12 months', capacity: 15 },
      { name: 'Toddlers', age_range: '1-2 years', capacity: 28 },
      { name: 'Preschool', age_range: '3-4 years', capacity: 32 },
    ],
    opening_time: '07:45',
    closing_time: '18:15',
    ofsted_rating: 'good',
    ofsted_urn: 'EY345678',
    status: 'active',
  },
]