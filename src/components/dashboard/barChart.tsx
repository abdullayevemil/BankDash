"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChartData } from "@/types/barChartData";
import useWindowWidth from "@/hooks/width";

interface Props {
  chartData: BarChartData[];
  chartConfig: ChartConfig;
}

export function DashboardBarChart({ chartData, chartConfig }: Props) {
  const width = useWindowWidth();
  
  return (
    <Card className="flex-1 p-4 pl-0 lg:p-6 lg:pl-2">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />

            <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />

            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              dataKey="maximum"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />

            <Bar barSize={(width || 700) >= 1024 ? 15 : (width || 700) >= 640 ? 10 : 7} dataKey="diposit" fill="var(--color-diposit)" radius={30} />

            <Bar barSize={(width || 700) >= 1024 ? 15 : (width || 700) >= 640 ? 10 : 7} dataKey="withdraw" fill="var(--color-withdraw)" radius={30} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
