import { expenseStatistics } from "@/data/expenseStatistics";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(expenseStatistics);
}