'use client';

import TransactionInformation from "@/components/dashboard/transactionInfo";
import { Card } from "@/components/ui/card";
import { TransactionInfo } from "@/types/transactionInfo";

const transactions: TransactionInfo[] = [
  {
    "iconUrl": "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
    "iconbackground": "#FF6347",
    "amount": -45.67,
    "name": "Grocery Shopping",
    "date": "2024-12-25"
  },
  {
    "iconUrl": "https://cdn-icons-png.flaticon.com/512/62/62611.png",
    "iconbackground": "#4682B4",
    "amount": 15.89,
    "name": "Gas Station",
    "date": "2024-12-24"
  },
  {
    "iconUrl": "https://cdn-icons-png.flaticon.com/512/2089/2089751.png",
    "iconbackground": "#32CD32",
    "amount": 60.00,
    "name": "Concert Tickets",
    "date": "2024-12-23"
  }
];

export default function Transactions() {
    return (
        <Card className="w-1/3 p-6 flex items-center">
            <ul className="flex flex-col gap-3 w-full">
            {transactions.map((transaction, index) => <li className="w-full" key={index}><TransactionInformation iconbackground={transaction.iconbackground} iconUrl={transaction.iconUrl} name={transaction.name} date={transaction.date} amount={transaction.amount} /></li>)}
            </ul>
        </Card>
    );
}