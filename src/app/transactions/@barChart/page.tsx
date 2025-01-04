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

  return <ExpenseBarChart chartData={expenses}></ExpenseBarChart>;
}
