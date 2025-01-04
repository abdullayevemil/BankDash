import { invoices } from "@/data/invoices";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const limit = searchParams.get("limit");

  let invoicesList = invoices;

  if (limit && Number.parseInt(limit)) {
    invoicesList = invoicesList.slice(0, Number(limit));
  }

  return NextResponse.json(invoicesList);
}
