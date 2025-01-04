"use client";

import TransactionInformation from "@/components/dashboard/transactionInfo";
import { Card } from "@/components/ui/card";
import { Transaction } from "@/types/transaction";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Transactions() {
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
    <Card className="w-1/3 p-6 flex items-center">
      <ul className="flex flex-col gap-3 w-full">
        {transactions.map((transaction, index) => (
          <li className="w-full" key={index}>
            <TransactionInformation
              iconbackground={transaction.iconBackground}
              iconUrl={transaction.iconUrl}
              name={transaction.name}
              date={transaction.date}
              amount={transaction.amount}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}
