import { cards } from "@/data/creditCards";
import { type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const creditCard = cards.find((card) => card.id === Number.parseInt(id));

  if (!creditCard) {
    return new Response(JSON.stringify({ error: "Credit card not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(creditCard), {
    status: 200,
  });
}
