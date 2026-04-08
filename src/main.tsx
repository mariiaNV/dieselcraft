import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

let phoneConversionTrackingInstalled = false

function installPhoneConversionTracking() {
  if (phoneConversionTrackingInstalled) return
  phoneConversionTrackingInstalled = true

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest('a')
      if (!(anchor instanceof HTMLAnchorElement)) return
      if (anchor.dataset.conversion === 'off') return

      const href = anchor.getAttribute('href') ?? undefined
      if (!href || !href.toLowerCase().startsWith('tel:')) return

      if (typeof window.gtag_report_conversion !== 'function') return

      // IMPORTANT (iOS Safari): do not preventDefault() for tel: links.
      // Safari can block opening the dialer if navigation is not a direct user gesture.
      // We still send the conversion event without redirecting.
      try {
        window.gtag_report_conversion()
      } catch {
        // ignore tracking errors
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
