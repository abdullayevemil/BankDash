"use client";

import { ExpenseBarChart } from "@/components/transactions/barChart";
import { Expense } from "@/types/expense";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BalanceBarChart() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const respose = await axios.get("/api/expenses");

      setExpenses(respose.data);
    };

    fetchExpenses();
  }, [setExpenses]);

  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 w-full sm:w-1/3">
      <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">
        My Expense
      </div>

      <ExpenseBarChart chartData={expenses}></ExpenseBarChart>
    </div>
  );
}
