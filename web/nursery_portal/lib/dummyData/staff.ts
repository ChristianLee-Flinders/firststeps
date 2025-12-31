export type StaffStatus = 'active' | 'inactive' | 'on_leave'
export type ContractType = 'full_time' | 'part_time' | 'casual' | 'contractor'
export type DbsStatus = 'clear' | 'pending' | 'expired' | 'not_submitted'

export interface Staff {
  id: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  avatar_url?: string
  job_title?: string
  nursery_id?: string
  room?: string
  start_date?: string // ISO date
  status?: StaffStatus
  contract_type?: ContractType
  hourly_rate?: number
  overtime_rate?: number
  annual_leave_entitlement?: number
  annual_leave_used?: number
  contracted_hours?: number
  qualifications?: string
  dbs_status?: DbsStatus
  dbs_check_date?: string
  dbs_certificate_number?: string
  first_aid_certified?: boolean
  first_aid_expiry?: string
  emergency_contact_name?: string
  emergency_contact_phone?: string
  pin_code: string
  notes?: string
}

export const dummyStaff: Staff[] = [
  {
    id: 'staff-1',
    first_name: 'Alice',
    last_name: 'Parker',
    email: 'alice.parker@alphabethou.se',
    phone: '0161 700 1111',
    avatar_url: 'https://i.pravatar.cc/150?img=11',
    job_title: 'Lead Practitioner',
    nursery_id: 'nursery-1',
    room: 'Toddlers',
    start_date: '2019-04-01',
    status: 'active',
    contract_type: 'full_time',
    hourly_rate: 14.5,
    overtime_rate: 21.75,
    annual_leave_entitlement: 28,
    annual_leave_used: 5,
    contracted_hours: 40,
    qualifications: 'CACHE Level 3',
    dbs_status: 'clear',
    dbs_check_date: '2023-02-10',
    dbs_certificate_number: 'DBS-001122',
    first_aid_certified: true,
    first_aid_expiry: '2025-03-01',
    emergency_contact_name: 'Mark Parker',
    emergency_contact_phone: '07900 111222',
    pin_code: '1234',
    notes: 'Room lead for Toddlers'
  },
  {
    id: 'staff-2',
    first_name: 'Bob',
    last_name: 'Khan',
    email: 'bob.khan@alphabethou.se',
    phone: '0113 700 2222',
    avatar_url: 'https://i.pravatar.cc/150?img=12',
    job_title: 'Nursery Manager',
    nursery_id: 'nursery-2',
    room: 'Reception',
    start_date: '2016-09-12',
    status: 'active',
    contract_type: 'full_time',
    hourly_rate: 18.0,
    overtime_rate: 27.0,
    annual_leave_entitlement: 30,
    annual_leave_used: 8,
    contracted_hours: 37.5,
    qualifications: 'NVQ Level 4',
    dbs_status: 'clear',
    dbs_check_date: '2024-01-15',
    dbs_certificate_number: 'DBS-009988',
    first_aid_certified: true,
    first_aid_expiry: '2026-07-20',
    emergency_contact_name: 'Nadia Khan',
    emergency_contact_phone: '07800 222333',
    pin_code: '9876',
    notes: 'Responsible for Leeds site'
  },
  {
    id: 'staff-3',
    first_name: 'Claire',
    last_name: 'Evans',
    email: 'claire.evans@alphabethou.se',
    phone: '0121 700 3333',
    avatar_url: 'https://i.pravatar.cc/150?img=13',
    job_title: 'Cover Staff',
    nursery_id: 'nursery-3',
    room: 'Babies',
    start_date: '2022-06-01',
    status: 'on_leave',
    contract_type: 'part_time',
    hourly_rate: 12.0,
    overtime_rate: 18.0,
    annual_leave_entitlement: 20,
    annual_leave_used: 2,
    contracted_hours: 20,
    qualifications: 'Level 2 Childcare',
    dbs_status: 'pending',
    dbs_check_date: '2024-11-01',
    dbs_certificate_number: undefined,
    first_aid_certified: false,
    first_aid_expiry: undefined,
    emergency_contact_name: 'Gareth Evans',
    emergency_contact_phone: '07700 333444',
    pin_code: '2468',
    notes: 'Currently on parental leave'
  },
]