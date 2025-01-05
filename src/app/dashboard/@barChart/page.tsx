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
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 w-full sm:w-2/3">
      <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">
        Weekly Activity
      </div>

      <DashboardBarChart
        chartData={chartData}
        chartConfig={chartConfig}
      ></DashboardBarChart>
    </div>
  );
}
