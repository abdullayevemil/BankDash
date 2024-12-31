"use client";

import {
  ChartConfig,
} from "@/components/ui/chart";
import { DashboardBarChart } from "@/components/dashboard/barChart";
import { BarChartData } from "@/types/barChartData";
import { ExpenseBarChart } from "@/components/transactions/barChart";

const chartData: BarChartData[] = [
  { day: "Saturday", diposit: 186, withdraw: 80, maximum: 186 },
  { day: "Sunday", diposit: 305, withdraw: 200, maximum: 305 },
  { day: "Monday", diposit: 237, withdraw: 120, maximum: 237 },
  { day: "Tuesday", diposit: 73, withdraw: 190, maximum: 190 },
  { day: "Wednesday", diposit: 209, withdraw: 130, maximum: 209 },
  { day: "Thursday", diposit: 214, withdraw: 140, maximum: 214 },
  { day: "Friday", diposit: 56, withdraw: 238, maximum: 238 },
];

const chartConfig = {
  diposit: {
    label: "Diposit",
    color: "var(--chart-1)",
  },
  withdraw: {
    label: "Withdraw",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function BalanceBarChart() {
  return (
    <ExpenseBarChart></ExpenseBarChart>
  );
}
