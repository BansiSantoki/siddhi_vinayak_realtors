export const CONTACT = {
  company: 'SIDDHI VINAYAK REALTORS',
  phoneDisplay: '+91 92279 05111',
  phoneTel: '+919227905111',
  email: 'jatin_shah5151@yahoo.com',
  street: 'Rander Road',
  city: 'Surat',
  region: 'Gujarat',
  postcode: '395009',
  country: 'India',
}

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Rander Road, Surat - 395009, Gujarat, India')

/** A vCard 3.0 for the business, lines joined with CRLF as the spec requires. */
export function buildVCard(): string {
  const c = CONTACT
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${c.company};;;`,
    `FN:${c.company}`,
    `ORG:${c.company}`,
    'TITLE:Real Estate Consultants',
    `TEL;TYPE=WORK,VOICE,CELL:${c.phoneTel}`,
    `EMAIL;TYPE=INTERNET,WORK:${c.email}`,
    `ADR;TYPE=WORK:;;${c.street};${c.city};${c.region};${c.postcode};${c.country}`,
    `LABEL;TYPE=WORK:${c.street}\\, ${c.city} - ${c.postcode}\\, ${c.region}\\, ${c.country}`,
    'NOTE:Property Leasing | Buying & Selling | Resale — 33 Years of Experience',
    'END:VCARD',
  ].join('\r\n') + '\r\n'
}

/** Downloads the vCard; phones hand a .vcf straight to their contacts app. */
export function downloadVCard() {
  const vcf = buildVCard()
  const fileName = 'Siddhi-Vinayak-Realtors.vcf'
  const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' })

  // iOS Safari opens a data: URL vCard in its "Add to Contacts" sheet more reliably than a blob
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  if (isIOS) {
    window.location.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcf)
    return
  }

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1500)
}
