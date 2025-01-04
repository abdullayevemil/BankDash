import { TablePagination } from "@/components/transactions/pagination";
import PhotoInspiredTabs from "@/components/transactions/tabs";
import { TransactionsTable } from "@/components/transactions/transactionsTable";
import { Card } from "@/components/ui/card";
import { TransactionDetailed } from "@/types/transactionDetailed";

const transactions: TransactionDetailed[] = [
  {
    description: "Grocery Purchase",
    transactionId: "TXN001",
    type: "Debit",
    card: "4111222233334444",
    date: "2024-12-15",
    amount: -125.5,
  },
  {
    description: "Coffee Shop",
    transactionId: "TXN002",
    type: "Debit",
    card: "5222333344445555",
    date: "2024-12-14",
    amount: -8.75,
  },
  {
    description: "Salary Payment",
    transactionId: "TXN003",
    type: "Credit",
    card: "4012111122223333",
    date: "2024-12-13",
    amount: 2000.0,
  },
  {
    description: "Utility Bill Payment",
    transactionId: "TXN004",
    type: "Debit",
    card: "4333444455556666",
    date: "2024-12-12",
    amount: -75.3,
  },
  {
    description: "Online Subscription",
    transactionId: "TXN005",
    type: "Debit",
    card: "5214555566667777",
    date: "2024-12-11",
    amount: -19.99,
  },
  {
    description: "Freelance Payment",
    transactionId: "TXN006",
    type: "Credit",
    card: "4532111122223333",
    date: "2024-12-10",
    amount: 500.0,
  },
  {
    description: "Bookstore Purchase",
    transactionId: "TXN007",
    type: "Debit",
    card: "4621444455556666",
    date: "2024-12-09",
    amount: -45.2,
  },
  {
    description: "Gym Membership",
    transactionId: "TXN008",
    type: "Debit",
    card: "4321555566667777",
    date: "2024-12-08",
    amount: -55.0,
  },
  {
    description: "Tax Refund",
    transactionId: "TXN009",
    type: "Credit",
    card: "4091222233334444",
    date: "2024-12-07",
    amount: 300.0,
  },
  {
    description: "Gas Station",
    transactionId: "TXN010",
    type: "Debit",
    card: "4785555566667777",
    date: "2024-12-06",
    amount: -30.45,
  },
  {
    description: "Charity Donation",
    transactionId: "TXN011",
    type: "Debit",
    card: "4460222233334444",
    date: "2024-12-05",
    amount: -100.0,
  },
  {
    description: "Birthday Gift",
    transactionId: "TXN012",
    type: "Credit",
    card: "4900111122223333",
    date: "2024-12-04",
    amount: 150.0,
  },
];

export default function Transactions() {
  return (
    <div className="flex flex-col gap-7">
      <PhotoInspiredTabs></PhotoInspiredTabs>
      
      <Card className="p-[30] pt-[22]">
        <TransactionsTable transactions={transactions} />
      </Card>

      <TablePagination />
    </div>
  );
}
