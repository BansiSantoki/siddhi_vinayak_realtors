import React from 'react'

const NAVY = '#0f2550'
const GOLD = '#c8962e'

/** Navy handset inside a gold ring. */
export function PhoneIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
      <circle cx="26" cy="26" r="23.5" fill="#fffaf0" stroke={GOLD} strokeWidth="2.5" />
      <path
        fill={NAVY}
        d="M19.6 14.2c.8-.5 1.8-.3 2.4.4l2.6 3.4c.6.8.6 1.9-.1 2.6l-1.6 1.6c-.3.3-.3.7-.1 1.1 1.2 2.3 3 4.1 5.3 5.4.4.2.8.1 1.1-.1l1.6-1.6c.7-.7 1.8-.8 2.6-.2l3.4 2.6c.8.6 1 1.7.5 2.5l-1.2 2c-.9 1.5-2.7 2.2-4.4 1.7-6.5-2-11.6-7.1-13.6-13.6-.5-1.7.2-3.5 1.7-4.4l1.8-1z"
      />
    </svg>
  )
}

/** Navy roof line over a gold house. */
export function HouseIcon() {
  return (
    <svg width="58" height="50" viewBox="0 0 58 50" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v24h34V22" stroke={GOLD} strokeWidth="3" />
      <path d="M3 25 29 4l26 21" stroke={NAVY} strokeWidth="4" />
      <rect x="23.5" y="26" width="11" height="10" fill={GOLD} rx="1" />
      <path d="M29 26v10M23.5 31h11" stroke="#fffaf0" strokeWidth="1.4" />
    </svg>
  )
}

/** Navy envelope with a gold flap. */
export function MailIcon() {
  return (
    <svg width="58" height="44" viewBox="0 0 58 44" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="52" height="36" rx="4" stroke={NAVY} strokeWidth="3.6" />
      <path d="M7 9l22 16 22-16" stroke={GOLD} strokeWidth="3.2" />
    </svg>
  )
}

/** Navy map pin on a gold ground ring. */
export function PinIcon() {
  return (
    <svg width="46" height="52" viewBox="0 0 46 52" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="23" cy="45" rx="15" ry="4.5" stroke={GOLD} strokeWidth="2.6" />
      <path d="M23 44S9 29.5 9 18.5a14 14 0 0 1 28 0C37 29.5 23 44 23 44z" fill="#fffaf0" stroke={NAVY} strokeWidth="3.4" />
      <circle cx="23" cy="18.5" r="5" stroke={NAVY} strokeWidth="3" />
    </svg>
  )
}
