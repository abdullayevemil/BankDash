"use client";

import { CreditBarChart } from "@/components/accounts/creditBarChart";
import { DebitCreditData } from "@/types/debitCreditData";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CreditOverview() {
  const [creditDebitData, setCreditDebitData] = useState<DebitCreditData[]>([]);

  useEffect(() => {
    const fetchCreditDebitData = async () => {
      const response = await axios.get("/api/debitCredit");

      setCreditDebitData(response.data);
    };

    fetchCreditDebitData();
  }, [setCreditDebitData]);

  return (
    <div className="w-full md:w-2/3 flex flex-col gap-3 md:gap-4 lg:gap-5">
      <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">
        Debit & Credit Overview
      </div>

      <CreditBarChart chartData={creditDebitData}></CreditBarChart>
    </div>
  );
}
