import {
  LayoutDashboard,
  GitBranch,
  Folder,
  CheckSquare,
  FileText,
  BarChart3,
  Settings,
  Car,
  Scale,
  TrendingDown,
  Users,
  UserCircle,
} from 'lucide-react'

type Variant = 'operations' | 'tbsa'

export function DashboardMockup({ variant }: { variant: Variant }) {
  if (variant === 'tbsa') {
    return <TbsaMockup />
  }
  return <OperationsMockup />
}

function OperationsMockup() {
  const nav = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: GitBranch, label: 'Workflows' },
    { icon: Folder, label: 'Files' },
    { icon: CheckSquare, label: 'Tasks' },
    { icon: FileText, label: 'Forms' },
    { icon: BarChart3, label: 'Reports' },
    { icon: Settings, label: 'Settings' },
  ] as const

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
      <div className="flex min-h-[420px]">
        <aside className="hidden w-44 shrink-0 flex-col gap-0.5 border-r border-slate-200 bg-navy-950 p-3 sm:flex">
          <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Menu
          </p>
          {nav.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-slate-300 hover:bg-white/5"
            >
              <Icon className="size-3.5 shrink-0 text-electric-400" strokeWidth={1.5} />
              <span>{label}</span>
            </div>
          ))}
        </aside>
        <div className="min-w-0 flex-1 bg-gradient-to-b from-sky-50/80 to-white p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-navy-950 sm:text-base">
                Operations Dashboard
              </h3>
              <p className="text-xs text-slate-500">Live pipeline & tasks</p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              Healthy
            </span>
          </div>

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Workflow Pipeline
          </p>
          <div className="mb-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {(
              [
                ['Submitted', '24', 'border-l-amber-400'],
                ['In Review', '16', 'border-l-blue-500'],
                ['Approved', '9', 'border-l-emerald-500'],
                ['Completed', '31', 'border-l-slate-400'],
              ] as const
            ).map(([label, n, border]) => (
              <div
                key={label}
                className={`rounded-lg border border-slate-100 border-l-4 bg-white p-3 shadow-sm ${border}`}
              >
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                  {label}
                </p>
                <p className="text-2xl font-bold tabular-nums text-navy-950">{n}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
              <p className="mb-2 text-[11px] font-semibold text-slate-600">Tasks</p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center justify-between gap-2">
                  <span className="truncate text-slate-700">Review vendor contract</span>
                  <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-800">
                    Pending
                  </span>
                </li>
                <li className="flex items-center justify-between gap-2">
                  <span className="truncate text-slate-700">Approve Q2 workflow</span>
                  <span className="shrink-0 rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-medium text-sky-800">
                    In Review
                  </span>
                </li>
                <li className="flex items-center justify-between gap-2">
                  <span className="truncate text-slate-700">Onboard new location</span>
                  <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800">
                    Done
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
              <p className="mb-2 text-[11px] font-semibold text-slate-600">Recent Activity</p>
              <ul className="space-y-2 text-[11px] text-slate-600">
                <li>Workflow #482 moved to Approved</li>
                <li>New document batch uploaded (12 files)</li>
                <li>User role updated for J. Rivera</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-slate-100 bg-navy-950 p-3 text-white shadow-inner">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              System Overview
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {(
                [
                  ['Active Workflows', '80'],
                  ['Documents', '1,245'],
                  ['Users', '36'],
                  ['Completion Rate', '92%'],
                ] as const
              ).map(([k, v]) => (
                <div key={k} className="rounded-md bg-white/5 px-2 py-2">
                  <p className="text-[9px] uppercase tracking-wide text-slate-400">{k}</p>
                  <p className="text-lg font-bold tabular-nums text-white">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TbsaMockup() {
  const nav = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Car, label: 'Appraisals' },
    { icon: Scale, label: 'Right to Appraisal' },
    { icon: TrendingDown, label: 'Diminished Value' },
    { icon: Folder, label: 'Files' },
    { icon: Users, label: 'Customers' },
    { icon: UserCircle, label: 'Users' },
    { icon: BarChart3, label: 'Reports' },
    { icon: Settings, label: 'Settings' },
  ] as const

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
      <div className="flex min-h-[440px]">
        <aside className="hidden w-48 shrink-0 flex-col gap-0.5 border-r border-slate-200 bg-navy-950 p-3 lg:flex">
          <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            TBSA
          </p>
          {nav.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] text-slate-300 hover:bg-white/5"
            >
              <Icon className="size-3.5 shrink-0 text-electric-400" strokeWidth={1.5} />
              <span className="leading-tight">{label}</span>
            </div>
          ))}
        </aside>
        <div className="min-w-0 flex-1 bg-gradient-to-br from-slate-50 to-sky-50/50 p-4 sm:p-5">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-navy-950 sm:text-base">TBSA Dashboard</h3>
              <p className="text-xs text-slate-500">Appraisal operations at a glance</p>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {(
              [
                ['Total Appraisals', '152'],
                ['RTA Requests', '38'],
                ['DV Claims', '27'],
                ['Open Tasks', '19'],
              ] as const
            ).map(([label, val]) => (
              <div
                key={label}
                className="rounded-lg border border-slate-100 bg-white p-2.5 shadow-sm sm:p-3"
              >
                <p className="text-[9px] font-medium uppercase tracking-wide text-slate-500 sm:text-[10px]">
                  {label}
                </p>
                <p className="text-xl font-bold tabular-nums text-navy-950 sm:text-2xl">{val}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-5">
            <div className="flex flex-col items-center justify-center rounded-lg border border-slate-100 bg-white p-4 shadow-sm lg:col-span-2">
              <p className="mb-3 text-center text-[11px] font-semibold text-slate-600">
                Workflow Status
              </p>
              <div
                className="relative size-28 rounded-full sm:size-32"
                style={{
                  background:
                    'conic-gradient(from -90deg, #3b82f6 0deg 158deg, #22c55e 158deg 248deg, #f59e0b 248deg 312deg, #94a3b8 312deg 360deg)',
                }}
                role="img"
                aria-label="Workflow status distribution"
              >
                <div className="absolute inset-[18%] flex flex-col items-center justify-center rounded-full bg-white shadow-inner">
                  <span className="text-lg font-bold text-navy-950">152</span>
                  <span className="text-[9px] uppercase text-slate-500">Active</span>
                </div>
              </div>
              <ul className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[9px] text-slate-600">
                <li className="flex items-center gap-1">
                  <span className="size-2 rounded-full bg-electric-500" /> In progress
                </li>
                <li className="flex items-center gap-1">
                  <span className="size-2 rounded-full bg-emerald-500" /> Approved
                </li>
                <li className="flex items-center gap-1">
                  <span className="size-2 rounded-full bg-amber-500" /> Waiting
                </li>
                <li className="flex items-center gap-1">
                  <span className="size-2 rounded-full bg-slate-400" /> Closed
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm lg:col-span-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-[11px] font-semibold text-slate-600">Recent Activity</p>
                  <ul className="space-y-1.5 text-[11px] text-slate-600">
                    <li>DV packet submitted — Claim #9081</li>
                    <li>RTA workflow advanced to Legal Review</li>
                    <li>New appraisal files uploaded (5)</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-semibold text-slate-600">My Tasks</p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex justify-between gap-2">
                      <span className="truncate text-slate-700">Verify RTA documents</span>
                      <span className="shrink-0 text-[10px] text-amber-600">Due today</span>
                    </li>
                    <li className="flex justify-between gap-2">
                      <span className="truncate text-slate-700">Assign DV specialist</span>
                      <span className="shrink-0 text-[10px] text-sky-600">In queue</span>
                    </li>
                    <li className="flex justify-between gap-2">
                      <span className="truncate text-slate-700">Customer follow-up call</span>
                      <span className="shrink-0 text-[10px] text-slate-500">Scheduled</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
