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

        const userResponse = await axios.get(`/api/users?email=${user?.email}`);

        const currentUser = userResponse.data;

        const response = await axios.get(
          `/api/transactions?userId=${currentUser?.id}&offset=0&limit=3`
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
    <div className="w-full sm:w-2/3 flex flex-col gap-3 md:gap-4 lg:gap-5">
      <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">Last Transaction</div>

      <Card className="p-5 sm:px-5 sm:py-4 lg:py-5 lg:px-6 rounded-small sm:rounded-medium lg:rounded-large ">
        <TransactionsOverviewTable
          transactions={transactions}
        ></TransactionsOverviewTable>
      </Card>
    </div>
  );
}
