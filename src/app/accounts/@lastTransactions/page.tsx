"use client"

import TransactionsOverviewTable from "@/components/accounts/transactionOverview";
import { Card } from "@/components/ui/card";
import { Transaction } from "@/types/transaction";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function LastTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const session = await getSession();

        const user = session?.user;

        const response = await axios.get(
          `/api/transactions?userId=${user?.id}&offset=0&limit=3`
        );

        if (response.status != 200) {
          throw new Error("Failed to fetch transactions");
        }

        setTransactions(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTransactions();
  }, [setTransactions]);

  return (
    <div className="w-2/3 flex flex-col gap-3 md:gap-4 lg:gap-5">
      <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">Last Transaction</div>

      <Card className="py-[22] px-6">
        <TransactionsOverviewTable
          transactions={transactions}
        ></TransactionsOverviewTable>
      </Card>
    </div>
  );
}
