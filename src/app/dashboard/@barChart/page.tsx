"use client";

import { ChartConfig } from "@/components/ui/chart";
import { DashboardBarChart } from "@/components/dashboard/barChart";
import { useEffect, useState } from "react";
import { BarChartData } from "@/types/barChartData";
import axios from "axios";

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
  const [chartData, setChartData] = useState<BarChartData[]>([]);

  useEffect(() => {
    const fetchBarChartData = async () => {
      const response = await axios.get("/api/balanceChanges");

      setChartData(response.data);
    };

    fetchBarChartData();
  }, [setChartData]);

  return (
    <DashboardBarChart
      chartData={chartData}
      chartConfig={chartConfig}
    ></DashboardBarChart>
  );
}
