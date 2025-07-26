import { getAuth } from "@clerk/nextjs/server";
import User from "@/models/User";
import connectDB from "@/components/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const user = await User.findOne({ clerkId: userId });

  if (!user) {
    return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, user });
}
