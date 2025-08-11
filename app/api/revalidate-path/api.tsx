// app/api/revalidate-path/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path");
  const secret = req.nextUrl.searchParams.get("secret");

  if (!path || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidatePath(path);
  return NextResponse.json({ revalidated: path });
}
