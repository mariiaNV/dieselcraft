import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

let phoneConversionTrackingInstalled = false

function isLeadAnchor(anchor: HTMLAnchorElement): boolean {
  const href = (anchor.getAttribute('href') ?? '').toLowerCase()
  if (!href) return false
  if (anchor.dataset.conversion === 'off') return false
  if (anchor.dataset.conversion === 'lead') return true
  if (href.startsWith('tel:')) return true
  if (href.startsWith('viber:')) return true
  if (href.startsWith('https://wa.me/') || href.startsWith('http://wa.me/')) return true
  if (href.startsWith('https://t.me/') || href.startsWith('http://t.me/')) return true
  if (href.startsWith('mailto:')) return true
  return false
}

function reportConversion() {
  try {
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion()
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'lead_contact', { event_category: 'lead' })
    }
  } catch {
    // tracking must never break the UX
  }
}

function installPhoneConversionTracking() {
  if (phoneConversionTrackingInstalled) return
  phoneConversionTrackingInstalled = true

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest('a')
      if (anchor instanceof HTMLAnchorElement && isLeadAnchor(anchor)) {
        // IMPORTANT (iOS Safari): never preventDefault on tel:/wa.me/t.me — would block the action.
        reportConversion()
        return
      }

      const leadButton = target.closest('[data-conversion="lead"]')
      if (leadButton) {
        reportConversion()
      }
    },
    true,
  )

  // Also catch real form submissions
  document.addEventListener(
    'submit',
    (event) => {
      const form = event.target
      if (form instanceof HTMLFormElement && form.dataset.conversion !== 'off') {
        reportConversion()
      }
    },
    true,
  )
}

installPhoneConversionTracking()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
