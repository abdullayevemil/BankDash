import { overview } from "@/data/overview";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(overview);
}
