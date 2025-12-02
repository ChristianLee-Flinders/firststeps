export interface HelpArticle {
  id: string
  title: string
  summary?: string
  content: string
  category: string
  tags?: string[]
}

export const articles: HelpArticle[] = [
  {
    id: 'h1',
    title: 'Getting started: setting up your nursery in First Steps',
    summary: 'A quick step-by-step guide to set up rooms, staff and children.',
    content:
      'After creating your account, the setup wizard will guide you through adding your nursery details, creating rooms, configuring ratios and inviting staff members. You can return to the Settings area at any time to update information or add new rooms, children or staff.',
    category: 'getting_started',
    tags: ['setup', 'onboarding'],
  },
  {
    id: 'h2',
    title: 'Adding and managing staff roles',
    summary: 'Invite staff, assign permissions and set safeguarding access levels.',
    content:
      'Go to Staff > Manage Staff to invite new team members. Enter their email and assign a role such as Manager, Practitioner, Admin or Finance. Each role controls what the user can see — for example, Managers can access reports and staffing, while Practitioners focus on daily records, observations and attendance.',
    category: 'staff',
    tags: ['staff', 'roles', 'permissions'],
  },
  {
    id: 'h3',
    title: 'Managing your subscription and nursery billing',
    summary: 'Update payment details, view invoices and manage your plan.',
    content:
      'Open Settings > Billing to check your current plan, update card details or download invoices. Changes to your plan take effect immediately. Invoices are automatically generated and stored in your billing history for easy record-keeping.',
    category: 'billing',
    tags: ['billing', 'payments', 'plans'],
  },
  {
    id: 'h4',
    title: 'Resetting your First Steps password',
    summary: 'Recover access securely if you’ve forgotten your password.',
    content:
      'Use the "Forgot password" link on the login screen to request a secure reset email. The link will expire after a short period for security. If you don’t receive the email, check your spam folder or contact your Nursery Administrator for support.',
    category: 'account',
    tags: ['security', 'password'],
  },
  {
    id: 'h5',
    title: 'Configuring rooms, ratios and capacities',
    summary: 'Set up rooms, age groups and legal staffing ratios.',
    content:
      'Navigate to Nursery > Rooms to edit each room’s capacity, age range and required ratios (e.g., 1:3 for babies, 1:4 for toddlers). These settings help the system calculate whether your staffing meets EYFS guidelines and will flag any shortfalls in real time.',
    category: 'nursery_setup',
    tags: ['rooms', 'ratios', 'compliance'],
  },
  {
    id: 'h6',
    title: 'Troubleshooting: app or dashboard not loading',
    summary: 'Common fixes for browser or connectivity issues.',
    content:
      'If the dashboard doesn’t load, try refreshing the page, clearing your browser cache or switching to an incognito window. Ensure your internet connection is stable and that your device is not blocking scripts. If issues persist, contact First Steps support and include screenshots for faster help.',
    category: 'troubleshooting',
    tags: ['debug', 'support', 'loading'],
  },
  {
    id: 'h7',
    title: 'Integrations: connecting calendars, payments and external tools',
    summary: 'How to connect First Steps with third-party apps.',
    content:
      'Visit Settings > Integrations to connect tools such as calendars, accounting software or communication systems. Select the platform you want and follow the authentication steps. Once connected, First Steps will sync relevant data automatically where supported.',
    category: 'integrations',
    tags: ['api', 'sync', 'connectivity'],
  },
  {
    id: 'h8',
    title: 'Creating observations and adding to learning journals',
    summary: 'How to log observations and securely share them with parents.',
    content:
      'Go to Children > Observations to capture notes, photos and EYFS development statements. Observations automatically build each child’s learning journal. You can choose whether to share entries with parents via the parent app — they receive a secure notification when new learning is published.',
    category: 'learning_journals',
    tags: ['observations', 'eyfs', 'parents'],
  },
  {
    id: 'h9',
    title: 'Recording daily attendance for children',
    summary: 'Mark arrivals, departures and absences quickly and accurately.',
    content:
      'Open the Attendance screen to mark children in or out with a single tap. You can record reasons for absence, add notes for late arrivals and view historical registers. Attendance feeds into safeguarding, funding reports and daily staffing calculations.',
    category: 'attendance',
    tags: ['register', 'children', 'daily'],
  },
  {
    id: 'h10',
    title: 'Managing parent communication',
    summary: 'Send updates, messages and learning securely to families.',
    content:
      'Using the Parent Communication area, you can send announcements, individual messages or share learning journal entries. Parents receive notifications through the parent app and can reply where messaging is enabled.',
    category: 'parents',
    tags: ['communication', 'messaging', 'parents'],
  },
]
