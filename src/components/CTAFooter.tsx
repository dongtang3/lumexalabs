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
          <a
            href="mailto:dohntahng@gmail.com"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-electric-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-electric-500/25 transition hover:bg-electric-400"
          >
            Contact Lumexa Labs
          </a>
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
