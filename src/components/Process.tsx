import { PencilLine, Rocket, Search, TrendingUp } from 'lucide-react'

const steps = [
  {
    n: 1,
    icon: Search,
    title: 'Understand the Workflow',
    body: 'We learn your processes, pain points, and goals to identify the highest impact opportunities.',
  },
  {
    n: 2,
    icon: PencilLine,
    title: 'Design the System',
    body: 'We map the workflows, data, and user roles into a clean system architecture and experience.',
  },
  {
    n: 3,
    icon: Rocket,
    title: 'Build the MVP',
    body: 'We build and launch a focused MVP that solves the core problem and delivers immediate value.',
  },
  {
    n: 4,
    icon: TrendingUp,
    title: 'Refine and Scale',
    body: 'We iterate based on feedback, improve performance, and scale as your business grows.',
  },
] as const

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
          How Lumexa Labs Works
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          A clear path from messy operations to software your team actually uses.
        </p>

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent lg:block"
            aria-hidden
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ n, icon: Icon, title, body }) => (
              <li key={n} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-electric-500 text-sm font-bold text-white shadow-lg shadow-electric-500/30">
                  {n}
                </div>
                <div className="mt-4 inline-flex size-11 items-center justify-center rounded-lg bg-sky-100 text-electric-600">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-3 text-base font-semibold text-navy-950">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{body}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          We focus on practical software that solves real operational friction first, then grows with
          the business.
        </p>
      </div>
    </section>
  )
}
