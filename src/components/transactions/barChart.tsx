"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Expense } from "@/types/expense";

interface Props {
  chartData: Expense[];
}

export function ExpenseBarChart({ chartData }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (data: Expense[], index: number) => {
    setActiveIndex(index);
  };

  return (
    <Card className="p-4 w-full h-full">
      <CardContent className="w-full h-full">
        <ResponsiveContainer className="w-full h-full">
          <BarChart
            data={chartData}
            className="w-full"
            margin={{
              top: 20,
            }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar radius={10} dataKey="expense" onClick={handleClick}>
              {chartData.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? "var(--chart-2)" : "#EDF0F7"}
                  key={index}
                />
              ))}
              <LabelList
                dataKey="expense"
                position="top"
                className="font-bold text-sm fill-current"
                content={({ x, y, value, index }) =>
                  index === activeIndex ? (
                    <text
                      x={((x as number) || 0) + 22}
                      y={((y as number) || 0) - 7}
                      textAnchor="middle"
                      className="font-bold text-sm fill-current font-inter font-medium bg-red"
                    >
                      ${value}
                    </text>
                  ) : null
                }
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
