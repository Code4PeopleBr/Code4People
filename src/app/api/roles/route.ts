import { NextResponse } from "next/server";
import { ROLES } from "@/lib/data";

export async function GET() {
  return NextResponse.json(ROLES);
}
