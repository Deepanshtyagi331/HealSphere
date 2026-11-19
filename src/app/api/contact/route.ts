import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  try {
    // 1. Basic IP Rate Limiting (5 submissions per 15 minutes per IP)
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    const rateCheck = checkRateLimit(ip, 5, 15 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submissions. Please wait 15 minutes before sending another message.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await request.json();

    // 3. Honeypot check for spam bots
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json(
        {
          success: true,
          message: "Contact form submitted successfully",
          submissionId: "bot-filtered",
        },
        { status: 200 }
      );
    }

    // 4. Server-side validation using Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the highlighted fields.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, message } = validationResult.data;
    const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    // 5. Console Logging (Visible in Vercel Runtime Logs & Terminal)
    console.log("========================================");
    console.log("📩 NEW CONTACT FORM SUBMISSION");
    console.log("========================================");
    console.log(`Timestamp     : ${new Date().toISOString()}`);
    console.log(`Submission ID : ${submissionId}`);
    console.log(`Full Name     : ${fullName}`);
    console.log(`Email Address : ${email}`);
    console.log(`Phone Number  : ${phone}`);
    console.log(`Message       : ${message}`);
    console.log("Status        : Logged to Console (Vercel Ready)");
    console.log("========================================");

    // 6. Optional: If MongoDB is configured & available, save it as well
    try {
      if (process.env.MONGODB_URI && process.env.MONGODB_URI.startsWith("mongodb")) {
        const { connectToDatabase } = await import("@/lib/mongodb");
        const Contact = (await import("@/models/Contact")).default;
        await connectToDatabase();
        await Contact.create({ fullName, email, phone, message });
        console.log("MongoDB Status: Saved to database successfully");
      }
    } catch (dbErr: unknown) {
      // Gracefully continue even if MongoDB is not reachable (e.g. on Vercel without database)
      console.warn("[MongoDB Notice] Running in standalone console mode (MongoDB not connected):", dbErr instanceof Error ? dbErr.message : "Unavailable");
    }

    // 7. Return structured success response to client
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received successfully.",
        submissionId: submissionId,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[Contact API Error]", error instanceof Error ? error.message : "Internal error");
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
