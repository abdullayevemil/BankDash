import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TransactionDetailed } from "@/types/transactionDetailed";

interface Props {
    transactions: TransactionDetailed[];
}

export function TransactionsTable({ transactions } : Props) {
  return (
    <Table>
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
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.transactionId}>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.transactionId}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.card.slice(0, 4)} ****</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell  className={`${transaction.amount < 0 ? 'text-negativePrice' : 'text-positivePrice'}`}>{transaction.amount < 0 ? `-$${-transaction.amount}` : `+$${transaction.amount}`}</TableCell>
            <TableCell>
              <button className="bg-transparent text-primaryText rounded-full py-[7] px-4 text-[15] font-inter text-buttonPrimaryText border border-buttonPrimaryText hover:text-buttonHoverText hover:border-buttonHoverText">Download</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
