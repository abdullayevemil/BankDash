interface Props {
  children: React.ReactNode;
  overviewCards: React.ReactNode;
  lastTransactions: React.ReactNode;
  creditCard: React.ReactNode;
  creditOverview: React.ReactNode;
  invoices: React.ReactNode;
}

export default function DashboardRootLayout({
  children,
  overviewCards,
  lastTransactions,
  creditCard,
  creditOverview,
  invoices,
}: Props) {
  return (
    <main className="flex flex-col px-10 pt-6 pb-7 flex-1 bg-backgroundPrimary gap-5">
      <section>{overviewCards}</section>

      <section className="flex flex-row gap-7">
        {lastTransactions} {creditCard}
      </section>

      <section className="flex flex-row gap-7">{creditOverview} {invoices}</section>

      {children}
    </main>
  );
}
