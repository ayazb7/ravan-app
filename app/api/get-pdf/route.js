import { join } from "path";
import { statSync, createReadStream } from "fs";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const photo = searchParams.get("photo");
  const file = searchParams.get("file");

  // Construct the file path
  const filePath = join(process.cwd(), "app", "pdfs", photo, `${file}.pdf`);

  try {
    // Check if the file exists
    statSync(filePath);

    // Stream the file as a response
    const fileStream = createReadStream(filePath);

    return new Response(fileStream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${file}.pdf`,
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "File not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
