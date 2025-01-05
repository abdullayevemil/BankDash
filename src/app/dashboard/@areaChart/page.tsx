"use client";

import { GradientAreaChart } from "@/components/dashboard/areaChart";
import { ChartConfig } from "@/components/ui/chart";
import { AreaChartData } from "@/types/areaChartData";
import axios from "axios";
import { useEffect, useState } from "react";

const chartConfig = {
  balance: {
    label: "Balance",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function DashboardAreaChart() {
  const [balanceHistory, setBalanceHistory] = useState<AreaChartData[]>([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      const response = await axios.get('/api/balanceHistory');

      setBalanceHistory(response.data);
    };

    fetchHistoryData();
  }, [setBalanceHistory]);

  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 w-full">
      <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">Balance History</div>

      <GradientAreaChart chartConfig={chartConfig} chartData={balanceHistory}></GradientAreaChart>
    </div>
  );
}
