"use client";

import { useState } from "react";
import { BarChart, Bar, Cell, XAxis, ResponsiveContainer, LabelList } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const chartData = [
  { name: "January", desktop: 186 },
  { name: "February", desktop: 305 },
  { name: "March", desktop: 237 },
  { name: "April", desktop: 73 },
  { name: "May", desktop: 209 },
  { name: "June", desktop: 214 },
];

export function ExpenseBarChart() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (data: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <Card className="p-4 w-1/3">
      <CardContent className="w-full h-full">
        <ResponsiveContainer className="w-full h-full">
          <BarChart data={chartData} className="w-full" margin={{
              top: 20,
            }}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
            <Bar radius={10} dataKey="desktop" onClick={handleClick}>
              {chartData.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? "var(--chart-2)" : "#EDF0F7"}
                  key={index}
                />
              ))}
              <LabelList
                dataKey="desktop"
                position="top"
                className="font-bold text-sm fill-current"
                content={({ x, y, value, index }) =>
                  index === activeIndex ? (
                    <text
                      x={x + 22}
                      y={y - 7}
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
