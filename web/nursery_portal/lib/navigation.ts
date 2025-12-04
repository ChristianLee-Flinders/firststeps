import { Baby, Building, CircleQuestionMark, CreditCard, FileText, LayoutDashboard, Settings, Users } from "lucide-react";

export const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, page: 'Dashboard' },
  { name: 'Children', icon: Baby, page: 'Children' },
  { name: 'Staff', icon: Users, page: 'Staff' },
  { name: 'Reports', icon: FileText, page: 'Reports' },
  { name: 'Finance', icon: CreditCard, page: 'Finance' },
];

export const organisationNavItems = [
  { name: 'Organisation', icon:Building ,page: 'organisation' },
];

export const helpNavItems = [
  { name: 'Settings', icon: Settings, page: 'settings' },
  { name: 'Help & Support', icon: CircleQuestionMark, page: 'help' },
];

export const childrenNavItems = [
  { name: 'Children', icon: 'Baby', page: 'children' },
  { name: 'Learning Logs', icon: 'BookOpen', page: 'children/learning-logs' },
  { name: 'Attendance', icon: 'CalendarCheck', page: 'children/attendance' },
  { name: 'Diaries', icon: 'BookUser', page: 'children/diaries' },
  { name: 'Accidents', icon: 'TriangleAlert', page: 'children/incidents', group: 'Safeguarding' },
  { name: 'Medications', icon: 'Pill', page: 'children/medications', group: 'Safeguarding' },
  { name: 'Reports', icon: 'ChartColumn', page: 'children/reports', group: 'Analytics' },
];

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
