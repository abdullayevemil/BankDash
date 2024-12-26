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

interface Props {
  chartData: BarChartData[];
  chartConfig: ChartConfig;
}

export function DashboardBarChart({ chartData, chartConfig }: Props) {
  return (
    <Card className="flex-1 p-6">
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

            <Bar barSize={15} dataKey="diposit" fill="var(--color-diposit)" radius={100} />

            <Bar barSize={15} dataKey="withdraw" fill="var(--color-withdraw)" radius={100} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
