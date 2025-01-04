import { balanceHistory } from "@/data/balanceHistory";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(balanceHistory);
}