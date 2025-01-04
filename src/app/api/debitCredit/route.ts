import { creditDebitData } from "@/data/creditDebitData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(creditDebitData);
}
