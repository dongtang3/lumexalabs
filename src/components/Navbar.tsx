import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { publicAsset } from '../lib/publicAsset'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#case-study', label: 'Case Study' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const

const zoomLink = 'https://us05web.zoom.us/j/3859499381?pwd=ORUrEScO7Ganzg4ErxwYMmtqlQk8Xc.1'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/95 shadow-sm backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 text-base font-bold tracking-tight text-white sm:text-lg"
        >
          <img
            src={publicAsset('lumexa-labs-mark.svg')}
            alt=""
            className="size-9 rounded-lg"
            width={36}
            height={36}
          />
          <span>Lumexa Labs LLC</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-white/90 transition hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={zoomLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg bg-electric-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-electric-500/25 transition hover:bg-electric-400 md:inline-flex"
          >
            Schedule a Call
          </a>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 bg-navy-950 md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={zoomLink}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg bg-electric-500 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-electric-400"
              onClick={() => setOpen(false)}
            >
              Schedule a Call
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
