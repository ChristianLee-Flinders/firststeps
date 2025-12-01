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