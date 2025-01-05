"use client";

import { TablePagination } from "@/components/transactions/pagination";
import TrasactionTypeTabs from "@/components/transactions/tabs";
import { TransactionsTable } from "@/components/transactions/transactionsTable";
import { Card } from "@/components/ui/card";
import { Transaction } from "@/types/transaction";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Transactions() {
  const [activeTab, setActiveTab] = useState("all");

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [transactionsCount, setTransactionsCount] = useState(0);

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchTransactions = async () => {
      const session = await getSession();

      const user = session?.user;

      const userResponse = await axios.get(`/api/users?email=${user?.email}`);

      const currentUser = userResponse.data;

      try {
        const response = await axios.get(
          `/api/transactions?userId=${currentUser?.id}&offset=${
            (currentPage - 1) * itemsPerPage
          }&limit=${itemsPerPage}&type=${activeTab}`
        );

        setTransactions(response.data.data);

        setTransactionsCount(response.data.total);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, [activeTab, currentPage]);

  return (
    <div className="flex flex-col gap-7">
      <TrasactionTypeTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></TrasactionTypeTabs>

      <Card className="p-7 pt-5">
        <TransactionsTable transactions={transactions} />
      </Card>

      <TablePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={Math.ceil(transactionsCount / itemsPerPage)}
      />
    </div>
  );
}
