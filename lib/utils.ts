import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Fusionne les classes Tailwind en évitant les conflits.
 * Usage : cn('px-4', condition && 'py-2', 'bg-gold')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
