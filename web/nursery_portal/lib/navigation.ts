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
