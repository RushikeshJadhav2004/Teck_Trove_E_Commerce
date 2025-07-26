// middleware.js
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Define the routes where middleware should apply
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // applies to all routes except static files and _next
  ],
};
