"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaChartData } from "@/types/areaChartData";

interface Props {
  chartData: AreaChartData[];
  chartConfig: ChartConfig;
}

export function GradientAreaChart({chartData, chartConfig} : Props) {
  return (
    <Card className="flex-1 p-4 pl-0 lg:p-6 lg:pl-0 w-full">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -6,
              right: 12,
              top: 20,
            }}
          >
            <CartesianGrid
              vertical={true}
              horizontal={true}
              strokeDasharray="3 3"
              stroke="#DFE5EE"
            />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={true} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillBalance" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-balance)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-balance)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="balance"
              type="natural"
              fill="url(#fillBalance)"
              fillOpacity={0.4}
              stroke="var(--color-balance)"
              stackId="a"
              strokeWidth={3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
