export type SubscriptionPlan = 'free' | 'starter' | 'professional' | 'enterprise'
export type SubscriptionStatus = 'active' | 'inactive' | 'trial'

export interface Organisation {
  id?: string
  name: string
  registration_number?: string
  address_line_1?: string
  address_line_2?: string
  city?: string
  postcode?: string
  phone?: string
  email?: string
  website?: string
  logo_url?: string
  subscription_plan?: SubscriptionPlan
  subscription_status?: SubscriptionStatus
}

export const dummyOrganisation: Organisation = {
  id: 'org-1',
  name: 'Alphabet House',
  registration_number: 'REG12345678',
  address_line_1: '123 Learning Street',
  address_line_2: 'Suite 100',
  city: 'Manchester',
  postcode: 'M1 1AA',
  phone: '0161 123 4567',
  email: 'info@alphabethou.se',
  website: 'https://alphabethou.se',
  logo_url: 'https://example.com/logo.png',
  subscription_plan: 'professional',
  subscription_status: 'active',
}