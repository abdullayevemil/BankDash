import { balanceChanges } from "@/data/balanceChanges";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(balanceChanges);
}
