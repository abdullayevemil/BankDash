"use client";

import { ChartConfig } from "@/components/ui/chart";
import { DashboardPieChart } from "@/components/dashboard/pieChart";
import { useEffect, useState } from "react";
import { PieChartData } from "@/types/pieChartData";
import axios from "axios";

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
  const [statistics, setStatistics] = useState<PieChartData[]>([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await axios.get("/api/expenseStatistics");

      setStatistics(response.data);
    };

    fetchStatistics();
  }, [setStatistics]);

  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 w-full sm:w-1/3">
      <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">
        Expense Statistics
      </div>

      <DashboardPieChart chartConfig={chartConfig} chartData={statistics} />
    </div>
  );
}
