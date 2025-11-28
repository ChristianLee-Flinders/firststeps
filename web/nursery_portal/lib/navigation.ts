import { Baby, BookOpen, Building2, Calendar, CreditCard, FileText, LayoutDashboard, Settings, Shield, UserCog, Users } from "lucide-react";

export const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, page: 'Dashboard' },
  { name: 'Children', icon: Baby, page: 'Children' },
  { name: 'Learning Logs', icon: BookOpen, page: 'LearningLogs' },
  { name: 'Attendance', icon: Calendar, page: 'Attendance' },
  { name: 'Staff', icon: Users, page: 'Staff' },
  { name: 'Nurseries', icon: Building2, page: 'Nurseries' },
  { name: 'Reports', icon: FileText, page: 'Reports' },
  { name: 'Users', icon: UserCog, page: 'Users' },
  { name: 'Roles & Permissions', icon: Shield, page: 'Roles' },
  { name: 'Finance', icon: CreditCard, page: 'Finance' },
  { name: 'Settings', icon: Settings, page: 'Settings' },
];