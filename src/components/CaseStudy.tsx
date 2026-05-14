import { Folder, Shield, GitBranch, Scale } from 'lucide-react'
import { DashboardMockup } from './DashboardMockup'
import { publicAsset } from '../lib/publicAsset'

const badges = [
  { icon: Folder, label: 'File Management', tone: 'bg-sky-100 text-sky-900' },
  { icon: Shield, label: 'Role-Based Access', tone: 'bg-emerald-100 text-emerald-900' },
  { icon: GitBranch, label: 'Workflow Tracking', tone: 'bg-violet-100 text-violet-900' },
  { icon: Scale, label: 'RTA / DV Support', tone: 'bg-amber-100 text-amber-900' },
] as const

export function CaseStudy() {
  return (
    <section
      id="case-study"
      className="scroll-mt-24 border-y border-slate-200/80 bg-gradient-to-b from-slate-50 to-sky-50/30 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-electric-600">
              Featured Case Study: TBSA
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              The Body Shop Appraiser
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-md">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                <img
                  src={publicAsset('the-body-shop-appraiser-logo.png')}
                  alt="The Body Shop Appraiser logo"
                  className="h-36 w-auto max-w-[200px] object-contain sm:h-40"
                  width={200}
                  height={160}
                />
                <p className="text-sm leading-relaxed text-slate-600 sm:min-w-0 sm:flex-1 sm:pt-2">
                  Lumexa Labs helped The Body Shop Appraiser develop TBSA, a specialized SaaS
                  platform designed to modernize appraisal and body shop operations. The system
                  supports file management, workflow tracking, user roles, document handling, and
                  Right to Appraisal / Diminished Value process flows.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {badges.map(({ icon: Icon, label, tone }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${tone}`}
                  >
                    <Icon className="size-3.5 shrink-0" strokeWidth={2} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <DashboardMockup variant="tbsa" />
          </div>
        </div>
      </div>
    </section>
  )
}
