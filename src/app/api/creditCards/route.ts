import { cards } from "@/data/creditCards";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const limit = searchParams.get("limit");

  const userId = searchParams.get("userId");

  let creditCards = cards;

  if (userId && Number.parseInt(userId)) {
    creditCards = creditCards.filter(card => card.userId === Number.parseInt(userId));
  }

  if (limit && Number.parseInt(limit)) {
    creditCards = creditCards.slice(0, Number(limit));
  }

  return Response.json(creditCards);
}
