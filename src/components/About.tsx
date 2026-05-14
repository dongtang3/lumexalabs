import { Check, Cpu, FileText, GitBranch } from 'lucide-react'

const highlights = [
  'Small-business focused',
  'Automation-first mindset',
  'Business workflow driven',
  'Long-term product thinking',
] as const

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-slate-200/80 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Built for Small Businesses Ready to Modernize
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Lumexa Labs LLC partners with growing businesses that still rely on fragmented
              documents, spreadsheets, and manual coordination. Our goal is to transform those
              legacy processes into clean, efficient, software-driven operations that save time,
              reduce errors, and create room for growth.
            </p>
          </div>

          <ul className="flex flex-col gap-3 lg:col-span-3">
            {highlights.map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-electric-500 text-white">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-navy-950 sm:text-base">{text}</span>
              </li>
            ))}
          </ul>

          <div className="relative lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-6 shadow-lg shadow-slate-900/5">
              <div
                className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-electric-500/15 blur-2xl"
                aria-hidden
              />
              <div className="relative mx-auto max-w-[220px]">
                <div className="rounded-xl border border-slate-200 bg-navy-950 p-2 shadow-2xl">
                  <div className="flex gap-1 rounded-t-lg bg-navy-800 px-2 py-1.5">
                    <span className="size-2 rounded-full bg-red-400/90" />
                    <span className="size-2 rounded-full bg-amber-400/90" />
                    <span className="size-2 rounded-full bg-emerald-400/90" />
                  </div>
                  <div className="rounded-b-lg bg-slate-900 p-3 font-mono text-[9px] leading-relaxed text-sky-300/95">
                    <span className="text-violet-400">async function</span>{' '}
                    <span className="text-amber-200">runWorkflow</span>
                    <span className="text-slate-500">() {'{'}</span>
                    <br />
                    <span className="pl-2 text-slate-400">await</span>{' '}
                    <span className="text-sky-300">processStep</span>
                    <span className="text-slate-500">(</span>
                    <span className="text-emerald-300">&apos;approve&apos;</span>
                    <span className="text-slate-500">);</span>
                    <br />
                    <span className="text-slate-500">{'}'}</span>
                  </div>
                </div>

                <div
                  className="absolute -left-4 top-1/4 flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-electric-600 shadow-md"
                  aria-hidden
                >
                  <FileText className="size-5" strokeWidth={1.5} />
                </div>
                <div
                  className="absolute -right-2 top-[18%] flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-electric-600 shadow-md"
                  aria-hidden
                >
                  <GitBranch className="size-4" strokeWidth={1.5} />
                </div>
                <div
                  className="absolute -bottom-2 left-1/4 flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-electric-600 shadow-md"
                  aria-hidden
                >
                  <Cpu className="size-4" strokeWidth={1.5} />
                </div>

                <svg
                  className="pointer-events-none absolute inset-0 -z-10 text-electric-500/25"
                  viewBox="0 0 200 200"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M20 100 Q60 40 100 100 T180 100"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M40 160 Q100 120 160 40"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
              <p className="mt-4 text-center text-xs text-slate-500">
                From documents and spreadsheets to connected, automated systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
