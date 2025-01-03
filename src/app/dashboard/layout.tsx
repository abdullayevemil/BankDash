interface Props {
  children: React.ReactNode;
  barChart: React.ReactNode;
  creditCards: React.ReactNode;
  pieChart: React.ReactNode;
  areaChart: React.ReactNode;
  contacts: React.ReactNode;
  recentTransactions: React.ReactNode;
}

export default function DashboardRootLayout({
  children,
  barChart,
  creditCards,
  pieChart,
  areaChart,
  contacts,
  recentTransactions,
}: Props) {
  return (
    <main className="flex flex-col px-10 pt-6 pb-7 flex-1 bg-backgroundPrimary gap-5">
      <section className="flex gap-[30] flex-col md:flex-row">
        <div className="flex flex-row w-2/3 justify-between">
          <div className="font-inter text-large font-semibold flex justify-left items-center text-primary2">
            My Cards
          </div>

          <div className="font-inter text-sectionSubtitle font-semibold flex justify-right items-center px-2 text-primary2">
            See All
          </div>
        </div>

        <div className="flex flex-row w-1/3 justify-between">
          <div className="font-inter text-large font-semibold flex justify-left items-center text-primary2">
            Recent Transactions
          </div>
        </div>
      </section>

      <section>
        <div className="flex gap-[30] flex-col md:flex-row">
          {creditCards}

          {recentTransactions}
        </div>
      </section>

      <section className="flex flex-col gap-[30] md:flex-row">
        <div className="flex flex-row w-2/3 justify-between">
          <div className="font-inter text-large font-semibold flex justify-left items-center text-primary2">
            Weekly Activity
          </div>
        </div>

        <div className="flex flex-row w-1/3 justify-between">
          <div className="font-inter text-large font-semibold flex justify-left items-center text-primary2">
            Expense Statistics
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[30] md:flex-row">
        {barChart}

        {pieChart}
      </section>

      <section className="flex flex-col gap-[30] md:flex-row">
        {contacts}

        {areaChart}
      </section>

      {children}
    </main>
  );
}
