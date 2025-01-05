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
    <main className="flex flex-col px-10 pt-6 pb-7 flex-1 bg-backgroundPrimary gap-3 md:gap-4 lg:gap-5 w-screen sm:w-full">
      <section className="flex gap-7 flex-col sm:flex-row">
        {creditCards}

        {recentTransactions}
      </section>

      <section className="flex flex-col gap-7 sm:flex-row">
        {barChart}

        {pieChart}
      </section>

      <section className="flex flex-col gap-7 sm:flex-row">
        {contacts}

        {areaChart}
      </section>

      {children}
    </main>
  );
}
