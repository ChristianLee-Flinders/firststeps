export const organisationNavItems = [
  { name: 'Organisation', icon:'Building' ,page: 'organisation' },
];

// Main navigation items

export const navItems = [
  { name: 'Dashboard', icon: 'LayoutDashboard', page: 'Dashboard' },
  { name: 'Children', icon: 'Baby', page: 'Children' },
  { name: 'Staff', icon: 'Users', page: 'Staff' },
  { name: 'Reports', icon: 'FileText', page: 'Reports' },
];

export const financeNavItems = [
  { name: 'Overview', icon: 'PoundSterling', page: 'finance' },
  { name: 'Family Accounts', icon: 'Users', page: 'finance/accounts' },
  { name: 'Invoicing', icon: 'ReceiptTax', page: 'finance/invoicing' },
  { name: 'Payments', icon: 'Wallet', page: 'finance/payments' },
  { name: 'Funding', icon: 'Landmark', page: 'finance/funding' },
  { name: 'Adhoc Charges', icon: 'HandCoins', page: 'finance/adhoc' },
];

// Settings navigation items

export const settingsnavItems = [
  {
    group: 'Organisation',
    items: [
      { name: 'General', page: 'settings', icon: 'Building2'},
      { name: 'Nurseries', page: 'settings/nurseries', icon: 'Baby'},
      { name: 'Roles & Permissions', page: 'settings/roles', icon: 'Shield' },
    ]
  },
  {
    group: 'Nursery',
    items: [
      { name: 'General', page: 'settings/nursery/general', icon: 'House'},
      { name: 'Operating Hours', page: 'settings/nursery/hours', icon: 'Clock', description: 'Opening times and sessions' },
      { name: 'Rooms & Moves', page: 'settings/nursery/rooms', icon: 'DoorOpen', description: 'Manage rooms and child moves' },
    ]
  },
  {
    group: 'Finance',
    items: [
      { name: 'Invoice Settings', page: 'settings/invoices', icon: 'FileText', description: 'Invoice templates and defaults' },
      { name: 'Fees & Pricing', page: 'settings/fees', icon: 'Receipt', description: 'Session rates and fee structures' },
      { name: 'Funding', page: 'settings/funding', icon: 'HandHelping', description: 'Government funding options' },
      { name: 'Term Dates', page: 'settings/term-dates', icon: 'CalendarDays', description: 'Define term dates and holidays' },
      { name: 'Payment Methods', page: 'settings/payments', icon: 'CreditCard', description: 'Accepted payment types' },
    ]
  },
  {
    group: 'Customisation',
    items: [
      { name: 'Appearance', page: 'settings/appearance', icon: 'Palette', description: 'Theme and display options' },
      
      { name: 'Email Templates', page: 'settings/email-templates', icon: 'Mail', description: 'Customise email content' },
      { name: 'Localisation', page: 'settings/localisation', icon: 'Globe', description: 'Language and regional settings' },
    ]
  },
  {
    group: 'System',
    items: [
      { name: 'Notifications', page: 'settings/notifications', icon: 'Bell', description: 'Email and alert preferences' },
      { name: 'Integrations', page: 'settings/integrations', icon: 'Plug', description: 'Third-party connections' },
      { name: 'Data & Privacy', page: 'settings/data', icon: 'Database', description: 'Data management and GDPR' },
    ]
  },
];

// Sub-navigation items for Children

export const childrenNavItems = [
  { name: 'Children', icon: 'Baby', page: 'children' },
  { name: 'Learning Logs', icon: 'BookOpen', page: 'children/learning-logs' },
  { name: 'Attendance', icon: 'CalendarCheck', page: 'children/attendance' },
  { name: 'Diaries', icon: 'BookUser', page: 'children/diaries' },
  { name: 'Accidents', icon: 'TriangleAlert', page: 'children/incidents', group: 'Safeguarding' },
  { name: 'Medications', icon: 'Pill', page: 'children/medications', group: 'Safeguarding' },
  { name: 'Reports', icon: 'ChartColumn', page: 'children/reports', group: 'Analytics' },
];

export const childProfileNavItems = [
  { name: 'Overview', icon: 'Activity', tabValue: 'overview' },
  { name: 'Emergency', icon: 'Phone', tabValue: 'contacts' },
  { name: 'Health & SEND', icon:'Sheild', tabValue: 'health' },
  { name: 'Family Account', icon: 'PoundSterling', tabValue: 'account' },
];

// Sub-navigation items for Staff

export const staffNavItems = [
  { name: 'Team', icon: 'Users', page: 'staff' },
  { name: 'Clock In', icon: 'Clock', page: 'staff/registers' },
  { name: 'Rota', icon: 'Calendar', page: 'staff/rota' },
  { name: 'Time Off', icon: 'PalmTree', page: 'staff/leave' },
  { name: 'Training', icon: 'GraduationCap', page: 'staff/training', group: 'Development' },
  { name: 'Reviews', icon: 'FolderKanban', page: 'staff/reviews', group: 'Development' },
  { name: 'Documents', icon: 'Document', page: 'staff/documents', group: 'Records' },
  { name: 'Incidents', icon: 'TriangleAlert', page: 'staff/incidents', group: 'Records' },
  { name: 'Ratios', icon: 'Users', page: 'staff/ratios', group: 'Compliance' },
];
