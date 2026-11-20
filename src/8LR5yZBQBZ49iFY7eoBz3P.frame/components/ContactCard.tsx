import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  index: number
  icon: React.ReactNode
  title: React.ReactNode
  children: React.ReactNode
  /** When set, the whole card is the link (tel:, mailto:, maps). */
  href?: string
  label?: string
  external?: boolean
}

export function ContactCard({ index, icon, title, children, href, label, external }: Props) {
  const reduce = useReducedMotion()
  const interactive = Boolean(href)

  const body = (
    <>
      <div className="flex h-[56px] shrink-0 items-center justify-center">{icon}</div>
      <h2 className="mt-1.5 text-[clamp(15px,4.2vw,17px)] font-semibold leading-[1.12] text-navy">
        <span className="relative top-[1px]">{title}</span>
      </h2>
      <span className="mx-auto mt-1.5 block h-0.5 w-12 rounded-full bg-[linear-gradient(90deg,transparent,#c8962e_20%,#c8962e_80%,transparent)]" />
      <div className="mt-auto flex w-full justify-center pt-2">{children}</div>
    </>
  )

  const shell =
    'flex h-full min-w-0 flex-col items-center rounded-[24px] border border-white/90 bg-[linear-gradient(180deg,#ffffff_0%,#fffaf0_100%)] px-2 pb-2.5 pt-3 text-center shadow-[0_12px_28px_rgba(140,100,35,0.16),0_2px_6px_rgba(140,100,35,0.08)] min-[380px]:px-2.5'

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -30px 0px' }}
      transition={{ duration: 0.42, delay: 0.08 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="min-w-0"
    >
      {interactive ? (
        <a
          href={href}
          aria-label={label}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`${shell} outline-none transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:ring-gold active:scale-[0.98] active:duration-100 [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:shadow-[0_18px_36px_rgba(140,100,35,0.22),0_3px_8px_rgba(140,100,35,0.1)]`}
        >
          {body}
        </a>
      ) : (
        <article className={shell}>{body}</article>
      )}
    </motion.div>
  )
}
