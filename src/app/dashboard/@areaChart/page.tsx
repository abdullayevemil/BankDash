"use client";

import { GradientAreaChart } from "@/components/dashboard/areaChart";

export default function DashboardAreaChart() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="font-inter text-large font-semibold flex justify-left items-center text-primary2">Balance History</div>

      <GradientAreaChart></GradientAreaChart>
    </div>
  );
}
