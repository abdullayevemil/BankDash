import { transactions } from "@/data/transactions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const offset = url.searchParams.get("offset");

  const limit = url.searchParams.get("limit");

  const userId = url.searchParams.get("userId");

  const type = url.searchParams.get("type");

  let paginatedTransactions = transactions;

  if (userId && Number.parseInt(userId)) {
    paginatedTransactions = paginatedTransactions.filter(
      (transaction) => transaction.userId === Number.parseInt(userId)
    );
  }

  if (type && (type as "all" | "income" | "expense")) {
    if (type === "income") {
      paginatedTransactions = paginatedTransactions.filter(
        (transaction) => transaction.amount > 0
      );
    } else if (type === "expense") {
      paginatedTransactions = paginatedTransactions.filter(
        (transaction) => transaction.amount < 0
      );
    }
  }

  if (
    offset &&
    limit &&
    Number.parseInt(offset) >= 0 &&
    Number.parseInt(limit) >= 0
  ) {
    paginatedTransactions = paginatedTransactions.slice(
      Number.parseInt(offset),
      Number.parseInt(offset) + Number.parseInt(limit)
    );
  }

  return NextResponse.json({
    data: paginatedTransactions,
    total: transactions.length,
  });
}
