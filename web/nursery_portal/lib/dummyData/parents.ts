export type Relationship = 'mother' | 'father' | 'guardian' | 'grandparent' | 'other'

export interface Parent {
  id?: string
  first_name: string
  last_name: string
  email?: string
  phone?: string
  relationship: Relationship
  children_ids: string[]
  pin_code: string
  can_pickup?: boolean
  notes?: string
}

export const dummyParents: Parent[] = [
  {
    id: 'parent-2',
    first_name: 'Emma',
    last_name: 'Johnson',
    email: 'emma.johnson@email.com',
    phone: '07123 456789',
    relationship: 'mother',
    children_ids: ['child-1', 'child-2'],
    pin_code: '1111',
    can_pickup: true,
    notes: 'Amelia has peanut allergy - please confirm with parent'
  },
  {
    id: 'parent-3',
    first_name: 'Mark',
    last_name: 'Williams',
    email: 'mark.williams@email.com',
    phone: '07222 222222',
    relationship: 'father',
    children_ids: ['child-3'],
    pin_code: '3333',
    can_pickup: true,
    notes: 'George is on waitlist'
  },
  {
    id: 'parent-4',
    first_name: 'Hannah',
    last_name: 'Brown',
    email: 'hannah.brown@email.com',
    phone: '07333 333333',
    relationship: 'mother',
    children_ids: ['child-4'],
    pin_code: '4444',
    can_pickup: true,
    notes: 'Isla has asthma - inhaler in room'
  },
  {
    id: 'parent-5',
    first_name: 'Sophie',
    last_name: 'Jones',
    email: 'sophie.jones@email.com',
    phone: '07444 444444',
    relationship: 'mother',
    children_ids: ['child-5'],
    pin_code: '5555',
    can_pickup: true,
    notes: 'Leo - 15 hours funded'
  },
  {
    id: 'parent-6',
    first_name: 'Carlos',
    last_name: 'Garcia',
    email: 'carlos.garcia@email.com',
    phone: '07555 555555',
    relationship: 'father',
    children_ids: ['child-6'],
    pin_code: '6666',
    can_pickup: true,
    notes: 'Aunt May can pickup - contact details on file'
  },
]