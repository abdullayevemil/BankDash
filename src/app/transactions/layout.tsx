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
    <main className="flex flex-col px-10 pt-6 pb-7 flex-1 bg-backgroundPrimary gap-5">
      <section className="flex flex-row gap-[30]">
        <div className="flex flex-row w-2/3 justify-between">
          <div className="font-inter text-large font-semibold flex justify-left items-center text-primary2">
            My Cards
          </div>

          <div className="font-inter text-sectionSubtitle font-semibold flex justify-right items-center px-2 text-primary2">
            + Add Card
          </div>
        </div>

        <div className="flex flex-row w-1/3 justify-between">
          <div className="font-inter text-large font-semibold flex justify-left items-center text-primary2">
            My Expense
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-row gap-[30]">
          {creditCards}

          {barChart}
        </div>
      </section>

      <section className="font-inter text-large font-semibold flex justify-left items-center text-primary2">
        Recent Transactions
      </section>

      <section>{transactionsTable}</section>

      {children}
    </main>
  );
}
