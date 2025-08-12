import { COPY } from '@/content/copy.es'

/**
 * Generates a WhatsApp link with prefilled message
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || COPY.whatsapp.message
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${COPY.whatsapp.number}?text=${encodedMessage}`
}

/**
 * Opens WhatsApp link
 */
export function openWhatsApp(customMessage?: string): void {
  if (typeof window !== 'undefined') {
    window.open(getWhatsAppLink(customMessage), '_blank', 'noopener,noreferrer')
  }
}
