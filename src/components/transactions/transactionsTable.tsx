"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useWindowWidth from "@/hooks/width";
import { Transaction } from "@/types/transaction";

interface Props {
  transactions: Transaction[];
}

export function TransactionsTable({ transactions }: Props) {
  const width = useWindowWidth();

  return (
    <Table>
      {(width || 700) >= 640 ? (
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>

            <TableHead>Transaction ID</TableHead>

            <TableHead>Type</TableHead>

            <TableHead>Card</TableHead>

            <TableHead>Date</TableHead>

            <TableHead>Amount</TableHead>

            <TableHead>Receipt</TableHead>
          </TableRow>
        </TableHeader>
      ) : null}

      <TableBody>
        {transactions.map((transaction) =>
          (width || 700) >= 640 ? (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.name}</TableCell>

              <TableCell>#{transaction.id}</TableCell>

              <TableCell>{transaction.type}</TableCell>

              <TableCell>{transaction.cardNumber.slice(0, 4)} ****</TableCell>

              <TableCell>{transaction.date}</TableCell>

              <TableCell
                className={`${
                  transaction.amount < 0
                    ? "text-negativePrice"
                    : "text-positivePrice"
                }`}
              >
                {transaction.amount < 0
                  ? `-$${-transaction.amount}`
                  : `+$${transaction.amount}`}
              </TableCell>

              <TableCell>
                <button className="bg-transparent text-primaryText rounded-full py-2 px-4 text-base font-inter text-buttonPrimaryText border border-buttonPrimaryText hover:text-buttonHoverText hover:border-buttonHoverText">
                  Download
                </button>
              </TableCell>
            </TableRow>
          ) : (
            <TableRow key={transaction.id}>
              <TableCell className="flex flex-col gap-1">
                <div className="text-small">{transaction.name}</div>

                <div className="text-primaryText text-small">{transaction.date}</div>
              </TableCell>

              <TableCell
                className={`text-small ${
                  transaction.amount < 0
                    ? "text-negativePrice"
                    : "text-positivePrice"
                }`}
              >
                {transaction.amount < 0
                  ? `-$${-transaction.amount}`
                  : `+$${transaction.amount}`}
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
}
