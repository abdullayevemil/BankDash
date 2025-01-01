import TransactionsOverviewTable from "@/components/accounts/transactionOverview";
import { Card } from "@/components/ui/card";
import { TransactionOverview } from "@/types/transactionOverview";

const transactions: TransactionOverview[] = [
  {
    name: "John Doe",
    date: "25 Jan 2024",
    category: "Groceries",
    cardNumber: "1234567812345678",
    status: "Completed",
    amount: 45,
    iconBackground: "#4CAF50",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/118/118079.png",
  },
  {
    name: "Alice Smith",
    date: "24 Jan 2024",
    category: "Dining",
    cardNumber: "8765432187654321",
    status: "Pending",
    amount: -78,
    iconBackground: "#FF9800",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
  {
    name: "Michael Johnson",
    date: "22 Jann 2024",
    category: "Utilities",
    cardNumber: "1122334411223344",
    status: "Failed",
    amount: 150,
    iconBackground: "#F44336",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/610/610334.png",
  },
];

export default function LastTransactions() {
  return (
    <div className="w-2/3 flex flex-col gap-5">
      <div className="font-inter text-large font-semibold flex justify-left items-center text-primary2">Last Transaction</div>

      <Card className="py-[22] px-6">
        <TransactionsOverviewTable
          transactions={transactions}
        ></TransactionsOverviewTable>
      </Card>
    </div>
  );
}
