import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, Contact } from 'lucide-react'

import logo from '../shared/assets/logo.png'
import { CONTACT, MAPS_URL, downloadVCard } from '../shared/contact'
import { Background } from './components/Background'
import { ContactCard } from './components/ContactCard'
import { PhoneIcon, HouseIcon, MailIcon, PinIcon } from './components/Icons'

type Props = Partial<typeof args> & { onSave?: () => void }

export default function BusinessCard(props: Props) {
  const { state, experience, onSave } = { ...args, ...props }
  const reduce = useReducedMotion()
  const [saved, setSaved] = useState(state === 'saved')

  useEffect(() => setSaved(state === 'saved'), [state])

  const handleSave = () => {
    downloadVCard()
    onSave?.()
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2600)
  }

  return (
    <div className="relative min-h-screen font-sans text-navy antialiased">
      <Background animate={!reduce} />

      <main className="relative z-10 mx-auto flex w-full max-w-[460px] flex-col px-3.5 pb-8 pt-[max(env(safe-area-inset-top),14px)] min-[380px]:px-4">
        {/* Logo + tagline: leaves the villa in view before the cards begin */}
        <motion.header
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="hero-space flex flex-col items-center"
        >
          <h1 className="sr-only">{CONTACT.company}</h1>
          <img
            src={logo}
            alt="SIDDHI VINAYAK REALTORS logo"
            width={640}
            height={451}
            decoding="async"
            className="h-auto w-[76%] max-w-[300px] select-none"
          />
          <p className="mt-2 rounded-full border-[1.5px] border-gold/80 bg-ivory/85 px-5 py-1 text-sm font-semibold leading-none tracking-[0.01em] text-navy shadow-[0_4px_14px_rgba(168,118,26,0.14)] min-[380px]:text-[15px]">
            <span className="relative top-[2px]">{experience}</span>
          </p>
        </motion.header>

        {/* The four contact cards */}
        <section aria-label="Contact details" className="grid grid-cols-1 gap-2.5 min-[330px]:grid-cols-2 min-[380px]:gap-3">
          <ContactCard
            index={0}
            href={`tel:${CONTACT.phoneTel}`}
            label={`Call ${CONTACT.phoneDisplay}`}
            icon={<PhoneIcon />}
            title="Contact Us Now"
          >
            <span className="inline-flex min-w-0 w-full items-center justify-center whitespace-nowrap rounded-full bg-[linear-gradient(180deg,#c39232_0%,#a8761a_55%,#946510_100%)] px-1 py-1.5 text-[clamp(10px,3.2vw,13px)] font-bold leading-none text-white shadow-[0_4px_10px_rgba(148,101,16,0.3),inset_0_1px_0_rgba(255,232,170,0.6)] [text-shadow:0_1px_1px_rgba(90,55,0,0.35)]">
              <span className="relative top-[1.5px]">{CONTACT.phoneDisplay}</span>
            </span>
          </ContactCard>

          <ContactCard index={1} icon={<HouseIcon />} title={<>Our Real<br />Estate Services</>}>
            <p className="px-1 text-[clamp(11px,3.2vw,13px)] font-medium leading-snug text-navy-soft">
              Property Leasing | Buying &amp; Selling | Resale
            </p>
          </ContactCard>

          <ContactCard
            index={2}
            href={`mailto:${CONTACT.email}`}
            label={`Email ${CONTACT.email}`}
            icon={<MailIcon />}
            title="Email Us"
          >
            <span className="block w-full rounded-2xl bg-sand px-1.5 py-2 text-[clamp(9.5px,2.8vw,11.5px)] font-medium leading-tight text-navy-soft [overflow-wrap:anywhere]">
              {CONTACT.email}
            </span>
          </ContactCard>

          <ContactCard
            index={3}
            href={MAPS_URL}
            external
            label="Open Rander Road, Surat in Google Maps"
            icon={<PinIcon />}
            title="Our Location"
          >
            <address className="block w-full rounded-2xl bg-sand px-1.5 py-1.5 text-[clamp(10px,3vw,12.5px)] font-medium not-italic leading-snug text-navy-soft">
              Rander Road,
              <br />
              Surat – 395009, Gujarat
            </address>
          </ContactCard>
        </section>

        {/* Save contact */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -20px 0px' }}
          transition={{ duration: 0.28, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-4"
        >
          <button
            type="button"
            onClick={handleSave}
            className="group flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#f6dd9a] bg-[linear-gradient(180deg,#f1d68b_0%,#d9ac4b_50%,#c8962e_100%)] text-[15px] font-bold tracking-[0.12em] text-navy shadow-[0_10px_24px_rgba(168,118,26,0.32),inset_0_1px_0_rgba(255,246,214,0.9)] transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] active:duration-100 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:shadow-[0_14px_30px_rgba(168,118,26,0.4),inset_0_1px_0_rgba(255,246,214,0.9)]"
          >
            {saved ? <Check className="size-5" strokeWidth={2.6} /> : <Contact className="size-5" strokeWidth={2.2} />}
            <span className="relative top-[1.5px] whitespace-nowrap">{saved ? 'CONTACT SAVED' : 'SAVE CONTACT'}</span>
          </button>
          <p className="mt-2 text-center text-xs font-medium text-navy-soft/80" aria-live="polite">
            {saved ? 'Open the downloaded file to add it to your contacts.' : 'Adds us to your phone contacts in one tap.'}
          </p>
        </motion.div>
      </main>
    </div>
  )
}

export const args = {
  state: 'default',
  experience: '33 Years of Experience',
}

export const argTypes = {
  state: { control: 'radio', options: ['default', 'saved'] },
  experience: { control: 'text' },
}
