import { Workflow, Cloud, Layers, Wrench } from 'lucide-react'
import { DashboardMockup } from './DashboardMockup'

const trust = [
  { icon: Workflow, label: 'Workflow Automation' },
  { icon: Cloud, label: 'SaaS Development' },
  { icon: Layers, label: 'Process Digitization' },
  { icon: Wrench, label: 'Custom Internal Tools' },
] as const

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-electric-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-electric-600">
              Lumexa Labs LLC
            </p>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              Software That Replaces Manual Workflows
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Lumexa Labs LLC helps small businesses move beyond document-heavy, manual operations
              and into modern, automated software systems built for real-world workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#case-study"
                className="inline-flex items-center justify-center rounded-lg bg-electric-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-electric-500/25 transition hover:bg-electric-400"
              >
                View Case Study
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-electric-500/80 bg-white px-5 py-2.5 text-sm font-semibold text-electric-600 transition hover:border-electric-500 hover:bg-sky-50"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative lg:justify-self-end">
            <DashboardMockup variant="operations" />
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-10 sm:justify-between">
          {trust.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-slate-600"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-electric-500/10 text-electric-600">
                <Icon className="size-4" strokeWidth={1.75} />
              </span>
              {label}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400 sm:hidden">
          Workflow Automation · SaaS Development · Process Digitization · Custom Internal Tools
        </p>
      </div>
    </section>
  )
}
