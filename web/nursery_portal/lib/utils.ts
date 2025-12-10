import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as Icons from 'lucide-react'
import { differenceInMonths, differenceInYears } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createPageUrl(pageName: string) {
  // Simple slugify: turn 'LearningLogs' -> '/learninglogs'
  return `/${String(pageName).replace(/\s+/g, "").toLowerCase()}`
}

export function getIconByName(name?: string) {
  if (!name) return Icons.FileText // fallback
  return (Icons as any)[name] ?? Icons.FileText
}

export function calculateAge(dob: string) {
  if (!dob) return '-';
  const birthDate = new Date(dob);
  const years = differenceInYears(new Date(), birthDate);
  const months = differenceInMonths(new Date(), birthDate) % 12;
  if (years === 0) return `${months}m`;
  return `${years}y ${months}m`;
}
  