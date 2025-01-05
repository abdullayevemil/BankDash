"use client";

import { Pie, PieChart, LabelList } from "recharts";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChartData } from "@/types/pieChartData";
import useWindowWidth from "@/hooks/width";

interface Props {
  chartData: PieChartData[];
  chartConfig: ChartConfig;
}

export function DashboardPieChart({ chartData, chartConfig }: Props) {
  const width = useWindowWidth();

  return (
    <Card className="flex flex-col w-full h-full px-4 py-2 items-center justify-center">
      <CardContent className="flex-1 w-full h-full p-0 flex flex-col justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square [&_.recharts-text]:fill-background w-full h-full p-0"
        >
          <PieChart className="w-full h-full">
          <ChartTooltip
              content={<ChartTooltipContent nameKey="category"/>}
            />
            <Pie
              data={chartData}
              dataKey="percentage"
              className="relative w-full h-full"
              strokeWidth={6}
              stroke="white"
              
              isAnimationActive={true}
            >
              <LabelList
                dataKey="percentage"
                position={'inside'}
                stroke="none"
                fontSize={(width || 700) > 1024 ? 16 : 12}
                fontWeight={700}
                fontFamily="inter"
                formatter={(value: keyof typeof chartConfig) =>
                  `${value.toString()} %`
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}