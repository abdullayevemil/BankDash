import React from "react";

interface Props {
  children: React.ReactNode;
  creditCards: React.ReactNode;
  barChart: React.ReactNode;
  transactionsTable: React.ReactNode;
}

export default function TransactionsRootLayout({
  children,
  creditCards,
  barChart,
  transactionsTable,
}: Props) {
  return (
    <main className="flex flex-col px-10 pt-6 pb-7 flex-1 bg-backgroundPrimary gap-3 md:gap-4 lg:gap-5 w-screen sm:w-full">
      <section className="flex flex-col gap-7 sm:flex-row">
          {creditCards}

          {barChart}
      </section>

      <section className="font-inter text-base md:text-lg lg:text-large font-semibold flex justify-left items-center text-primary2">
        Recent Transactions
      </section>

      <section>{transactionsTable}</section>

      {children}
    </main>
  );
}
