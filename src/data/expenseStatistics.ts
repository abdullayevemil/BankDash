import { PieChartData } from "@/types/pieChartData";

export const expenseStatistics: PieChartData[] = [
  {
    id: 1,
    category: "entertainment",
    percentage: 30,
    fill: "var(--color-entertainment)",
  },
  {
    id: 2,
    category: "investments",
    percentage: 20,
    fill: "var(--color-investments)",
  },
  { id: 3, category: "others", percentage: 35, fill: "var(--color-others)" },
  {
    id: 4,
    category: "bill_expense",
    percentage: 15,
    fill: "var(--color-bill_expense)",
  },
];
