import SiteShell from "@/components/SiteShell";

type Column = {
  label: string;
  values: string[];
  subLabel?: string;
  deltas?: string[];
  highlights?: number[];
  deltaTones?: (string | null)[];
};

type MetricTableProps = {
  labels: string[];
  columns: Column[];
  labelWidth?: string;
  headerBg?: string;
  headerSpacer?: boolean;
};

const metricLabels = [
  "Outbound Calls",
  "Answered Calls",
  "Answer Rate",
  "Transfers",
  "Transfer Rate"
];

const topSection = {
  title: "Heads Up Dashboard",
  agent: "Initial Call: Scheduled Callback",
  status: { label: "YELLOW", tone: "bg-[#f5e27a]" },
  columns: [
    {
      label: "Today",
      values: ["70", "40", "57.14%", "30", "75.00%"],
      highlights: [2, 4]
    },
    {
      label: "Yesterday",
      values: ["64", "43", "67.19%", "38", "88.37%"],
      subLabel: "Δ DoD",
      deltas: ["6", "-3", "-10.04%", "-8", "-13.37%"]
    },
    {
      label: "Same Day Last Week",
      values: ["60", "33", "55.00%", "25", "75.76%"],
      subLabel: "Δ vs Last Week",
      deltas: ["10", "7", "2.14%", "5", "-0.76%"]
    },
    {
      label: "Goal",
      values: ["", "", "60%", "", "75%"],
      subLabel: "Δ Goal",
      deltas: ["", "", "-2.86%", "", "0.00%"],
      deltaTones: [null, null, "bg-red-50", null, null]
    }
  ]
};

const miniMetrics = {
  labels: ["Ave Duration (Answered Calls)", "# Calls > 240 sec"],
  columns: [
    { label: "Today", values: ["53", "1"] },
    {
      label: "Yesterday",
      values: ["52", "0"],
      subLabel: "Δ DoD",
      deltas: ["3%", "0"]
    },
    {
      label: "Same Day Last Week",
      values: ["60", "1"],
      subLabel: "Δ vs Last Week",
      deltas: ["-11%", "0.00%"]
    },
    {
      label: "Goal",
      values: ["120", ""],
      subLabel: "Δ Goal",
      deltas: ["-56%", ""]
    }
  ]
};

const deliverability = {
  title: "DELIVERABILITY",
  labels: ["# Dial No Answer", "% Dial No Answer / Outbound Calls"],
  columns: [
    { label: "Today", values: ["5", "7.14%"] },
    {
      label: "Yesterday",
      values: ["8", "12.50%"],
      subLabel: "Δ DoD",
      deltas: ["-3", "-5.36%"]
    },
    {
      label: "Same Day Last Week",
      values: ["7", "11.67%"],
      subLabel: "Δ vs Last Week",
      deltas: ["-2", ""]
    },
    {
      label: "Goal",
      values: ["", ""],
      subLabel: "Δ Goal",
      deltas: ["", ""]
    }
  ]
};

const secondSection = {
  agent: "Retry Call: Scheduled Callback",
  status: { label: "GREEN", tone: "bg-[#bfe8c8]" },
  columns: [
    {
      label: "Today",
      values: ["35", "14", "40.00%", "9", "64.29%"],
      highlights: [4]
    },
    {
      label: "Yesterday",
      values: ["36", "12", "33.33%", "8", "66.67%"],
      subLabel: "Δ DoD",
      deltas: ["-1", "2", "6.67%", "1", "-2.38%"]
    },
    {
      label: "Same Day Last Week",
      values: ["47", "10", "21.28%", "2", "20.00%"],
      subLabel: "Δ vs Last Week",
      deltas: ["-12", "4", "18.72%", "7", "44.29%"]
    },
    {
      label: "Goal",
      values: ["", "", "30%", "", "40%"],
      subLabel: "Δ Goal",
      deltas: ["", "", "10%", "", "24.29%"],
      deltaTones: [null, null, "bg-green-100", null, "bg-green-100"]
    }
  ]
};

function MetricTable({
  labels,
  columns,
  labelWidth = "180px",
  headerBg = "#8fb6c7",
  headerSpacer = true
}: MetricTableProps) {
  return (
    <div className="grid gap-6" style={{ gridTemplateColumns: `${labelWidth} 1fr` }}>
      <div className="space-y-2 text-sm font-bold uppercase tracking-wide">
        {headerSpacer ? <div className="h-9" /> : null}
        {labels.map((label) => (
          <div key={label} className="flex h-10 items-center">
            {label}
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => (
          <div key={column.label} className="border border-black bg-white">
            <div
              className="flex items-center justify-between border-b border-black px-4 py-2 text-sm font-bold uppercase"
              style={{ background: headerBg }}
            >
              <span>{column.label}</span>
              {column.subLabel ? (
                <span className="text-xs opacity-70">{column.subLabel}</span>
              ) : null}
            </div>
            <div className={`grid ${column.subLabel ? "grid-cols-2" : "grid-cols-1"}`}>
              <div className="space-y-2 px-4 py-3 text-sm">
                {column.values.map((value, idx) => (
                  <div
                    key={`${column.label}-value-${idx}`}
                    className={`flex h-10 items-center justify-center ${column.highlights?.includes(idx) ? "bg-green-200/70" : ""}`}
                  >
                    {value}
                  </div>
                ))}
              </div>
              {column.subLabel ? (
                <div className="space-y-2 border-l border-black/20 px-4 py-3 text-sm">
                  {column.deltas?.map((value, idx) => (
                    <div
                      key={`${column.label}-delta-${idx}`}
                      className={`flex h-10 items-center justify-center ${column.deltaTones?.[idx] ?? ""}`}
                    >
                      {value}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SampleDashboardPage() {
  return (
    <SiteShell>
      <section className="border-b border-black bg-[var(--c-concrete)] px-8 py-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 text-sm font-medium">
            <div className="grid grid-cols-[120px_1fr] gap-3 border-b border-black pb-2">
              <span className="font-bold uppercase">Dashboard:</span>
              <span className="font-tech">{topSection.title}</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-3 border-b border-black pb-2">
              <span className="font-bold uppercase">Agent:</span>
              <span className="font-tech">{topSection.agent}</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-3">
              <span className="font-bold uppercase">Status:</span>
              <span
                className={`inline-flex w-fit px-6 py-1 text-xs font-bold uppercase ${topSection.status.tone}`}
              >
                {topSection.status.label}
              </span>
            </div>
          </div>

          <div className="mt-10">
            <MetricTable labels={metricLabels} columns={topSection.columns} />
          </div>

          <div className="mt-10">
            <MetricTable labels={miniMetrics.labels} columns={miniMetrics.columns} />
          </div>

          <div className="mt-12">
            <div className="font-bold uppercase">{deliverability.title}</div>
            <div className="mt-6">
              <MetricTable labels={deliverability.labels} columns={deliverability.columns} labelWidth="220px" />
            </div>
          </div>

          <div className="mt-16 border-t border-black pt-8">
            <div className="grid gap-4 text-sm font-medium">
              <div className="grid grid-cols-[120px_1fr] gap-3 border-b border-black pb-2">
                <span className="font-bold uppercase">Agent:</span>
                <span className="font-tech">{secondSection.agent}</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-3">
                <span className="font-bold uppercase">Status:</span>
                <span
                  className={`inline-flex w-fit px-6 py-1 text-xs font-bold uppercase ${secondSection.status.tone}`}
                >
                  {secondSection.status.label}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <MetricTable labels={metricLabels} columns={secondSection.columns} />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
