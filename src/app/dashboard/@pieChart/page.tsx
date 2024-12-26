"use client";

import {
  ChartConfig,
} from "@/components/ui/chart";
import { DashboardPieChart } from "@/components/dashboard/pieChart";
import { PieChartData } from "@/types/pieChartData";

const chartData: PieChartData[] = [
  {
    category: "entertainment",
    percentage: 30,
    fill: "var(--color-entertainment)",
  },
  { category: "investments", percentage: 20, fill: "var(--color-investments)" },
  { category: "others", percentage: 35, fill: "var(--color-others)" },
  {
    category: "bill_expense",
    percentage: 15,
    fill: "var(--color-bill_expense)",
  },
];

const chartConfig = {
  category: {
    label: "Category",
  },
  entertainment: {
    label: "Entertainment",
    color: "var(--pie-chart-1)",
  },
  bill_expense: {
    label: "Bill Expense",
    color: "var(--pie-chart-2)",
  },
  others: {
    label: "Others",
    color: "var(--pie-chart-3)",
  },
  investments: {
    label: "Investments",
    color: "var(--pie-chart-4)",
  },
} satisfies ChartConfig;

export default function BalancePieChart() {
  return (
    <DashboardPieChart chartConfig={chartConfig} chartData={chartData} />
  );
}
