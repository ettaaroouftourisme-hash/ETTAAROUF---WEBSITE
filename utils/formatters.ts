/**
 * Formatters — helpers de formatage des données
 */

import type { Currency } from '@/types'

// ── Prix ──────────────────────────────────────────────────────
export function formatPrice(amount: number, currency: Currency = 'DZD'): string {
  const formatters: Record<Currency, Intl.NumberFormat> = {
    DZD: new Intl.NumberFormat('fr-DZ', { style: 'currency', currency: 'DZD', minimumFractionDigits: 0 }),
    EUR: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }),
    USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }),
    SAR: new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR', minimumFractionDigits: 0 }),
  }
  return formatters[currency]?.format(amount) ?? `${amount} ${currency}`
}

// ── Date ──────────────────────────────────────────────────────
export function formatDate(dateString: string, locale = 'fr-DZ'): string {
  return new Intl.DateTimeFormat(locale, {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  }).format(new Date(dateString))
}

export function formatDateShort(dateString: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day:   '2-digit',
    month: '2-digit',
    year:  'numeric',
  }).format(new Date(dateString))
}

// ── Durée ─────────────────────────────────────────────────────
export function formatDuration(days: number): string {
  if (days === 1) return '1 jour'
  const nights = days - 1
  return `${days} jours / ${nights} nuit${nights > 1 ? 's' : ''}`
}

// ── Note ──────────────────────────────────────────────────────
export function formatRating(rating: number): string {
  return rating.toFixed(1)
}

// ── Slug ──────────────────────────────────────────────────────
export function toSlug(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// ── Troncature ────────────────────────────────────────────────
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength).trimEnd() + '…'
}

// ── Téléphone WhatsApp ────────────────────────────────────────
export function getWhatsAppUrl(phone: string, message?: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const encoded = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${cleaned}${encoded}`
}
