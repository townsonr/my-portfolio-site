import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "resume.pdf");
    const buffer = await readFile(filePath);
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": String(buffer.length),
        "Content-Disposition":
          'attachment; filename="Rachel-Townson-Resume.pdf"',
        // Avoid caching: stale PDF after you replace public/resume.pdf (was
        // causing browsers to keep an older ~143KB file when disk had ~88KB).
        "Cache-Control": "private, no-store, max-age=0, must-revalidate",
      },
    });
  } catch {
    return new NextResponse("Resume not found", { status: 404 });
  }
}
