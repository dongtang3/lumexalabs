import { Cloud, Workflow, FolderOpen, LineChart } from 'lucide-react'

const cards = [
  {
    icon: Cloud,
    title: 'Custom SaaS Development',
    body: 'Build secure, scalable platforms tailored to your business model.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    body: 'Replace spreadsheets, paper forms, and repetitive admin work with structured digital flows.',
  },
  {
    icon: FolderOpen,
    title: 'Document & File Systems',
    body: 'Organize uploads, approvals, records, and customer workflows in one place.',
  },
  {
    icon: LineChart,
    title: 'Operational Software Consulting',
    body: 'Turn real business pain points into practical, maintainable software solutions.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
          What We Build
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Focused capabilities for teams that need dependable software without enterprise bloat.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group flex flex-col rounded-xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-electric-500/30 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500/15 to-sky-100 text-electric-600 transition group-hover:from-electric-500/25 group-hover:to-sky-100">
                <Icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-navy-950">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
