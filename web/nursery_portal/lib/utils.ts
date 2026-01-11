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

export const parseStringify = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export function calculateAge(
  dob: string,
  format: 'short' | 'long' = 'short'
) {
  if (!dob) return '-';

  const birthDate = new Date(dob);
  const now = new Date();

  const years = differenceInYears(now, birthDate);
  const months = differenceInMonths(now, birthDate) % 12;

  const yLabel = format === 'long' ? 'years' : 'y';
  const mLabel = format === 'long' ? 'months' : 'm';

  if (years === 0) {
    return `${months} ${mLabel}`;
  }

  return `${years} ${yLabel} ${months} ${mLabel}`;
}

export function toPlainObject<T = any>(value: T): Record<string, any> {
  try {
    return JSON.parse(JSON.stringify(value ?? {}))
  } catch {
    return {};
  }
}
