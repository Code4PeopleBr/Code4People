import { NextResponse } from "next/server";
import { PARTNERS } from "@/lib/data";

export async function GET() {
  return NextResponse.json(PARTNERS);
}
