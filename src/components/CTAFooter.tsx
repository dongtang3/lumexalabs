import { Globe, Mail, Phone, Video } from 'lucide-react'

const businessEmail = 'dohntang@gmail.com'
const phoneNumber = '7745259015'
const displayPhoneNumber = '(774) 525-9015'
const websiteUrl = 'https://lumexalabs.me'
const zoomLink = 'https://us05web.zoom.us/j/3859499381?pwd=ORUrEScO7Ganzg4ErxwYMmtqlQk8Xc.1'

const contactMethods = [
  {
    icon: Mail,
    label: 'Business Email',
    value: businessEmail,
    href: `mailto:${businessEmail}`,
  },
  {
    icon: Phone,
    label: 'Phone Number',
    value: displayPhoneNumber,
    href: `tel:${phoneNumber}`,
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'lumexalabs.me',
    href: websiteUrl,
  },
] as const

export function CTAFooter() {
  return (
    <footer className="bg-navy-950 text-white">
      <div
        id="contact"
        className="scroll-mt-24 border-b border-white/10 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-14 sm:py-16"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to modernize your workflow?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/80 sm:text-base">
              Let&apos;s build software that fits how your business actually works.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={`mailto:${businessEmail}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-electric-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-electric-500/25 transition hover:bg-electric-400"
            >
              <Mail className="size-4" strokeWidth={1.9} />
              Contact Lumexa Labs
            </a>
            <a
              href={zoomLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/15"
            >
              <Video className="size-4" strokeWidth={1.9} />
              Schedule a Zoom Call
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-3 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-white/20 hover:bg-white/10"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-electric-500/15 text-sky-200">
                <Icon className="size-4" strokeWidth={1.9} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                  {label}
                </span>
                <span className="mt-0.5 block truncate text-sm font-semibold text-white">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold sm:text-left">Lumexa Labs LLC</p>
        <p className="mt-2 text-center text-xs text-white/60 sm:text-left">
          Custom software development · SaaS systems · Workflow automation
        </p>
      </div>
    </footer>
  )
}
