"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Sat", debit: 186, credit: 80 },
  { month: "Sun", debit: 305, credit: 200 },
  { month: "Mon", debit: 237, credit: 120 },
  { month: "Tue", debit: 73, credit: 190 },
  { month: "Wed", debit: 209, credit: 130 },
  { month: "Thu", debit: 214, credit: 140 },
  { month: "Fri", debit: 214, credit: 140 },
];

const chartConfig = {
  debit: {
    label: "Debit",
    color: "var(--chart-3)",
  },
  credit: {
    label: "Credit",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function CreditBarChart() {
  const totalDebit = chartData.reduce((sum, item) => sum + item.debit, 0);
  const totalCredit = chartData.reduce((sum, item) => sum + item.credit, 0);

  return (
    <Card className="w-full p-7">
      <CardHeader>
        <CardDescription className="font-inter">
          <span className="text-black">${totalDebit}</span> Debited & <span className="text-black">${totalCredit}</span> Credited in this Week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />

            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="debit" fill="var(--color-debit)" radius={10} barSize={30}/>
            <Bar dataKey="credit" fill="var(--color-credit)" radius={10} barSize={30} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
