"use client";

import InvoiceInfo from "@/components/accounts/invoice";
import { Card } from "@/components/ui/card";
import { Invoice } from "@/types/invoice";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Invoices() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const limit = 6;

  useEffect(() => {
    const fetchInvoices = async () => {
      const response = await axios.get(`/api/invoices?limit=${limit}`);

      setInvoices(response.data);
    };

    fetchInvoices();
  }, [setInvoices]);

  return (
    <div className="flex flex-col w-full sm:w-1/3 gap-3 md:gap-4 lg:gap-5">
      <div className="flex flex-row w-full justify-between">
        <div className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">
          Invoices Sent
        </div>
      </div>

      <Card className="w-full p-5 sm:px-5 sm:py-4 lg:py-8 lg:px-6">
        <ul className="flex flex-col w-full gap-4 lg:gap-5">
          {invoices.map((invoice) => (
            <li className="w-full" key={invoice.id}>
              <InvoiceInfo
                id={invoice.id}
                name={invoice.name}
                time={invoice.time}
                amount={invoice.amount}
                iconBackground={invoice.iconBackground}
                iconUrl={invoice.iconUrl}
              ></InvoiceInfo>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
