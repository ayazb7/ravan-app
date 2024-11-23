import fs from "fs";
import path from "path";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const dieRelativeToPublicFolder = searchParams.get(
    "dieRelativeToPublicFolder"
  );

  if (!dieRelativeToPublicFolder) {
    return new Response(
      JSON.stringify({
        error: "Parameter dieRelativeToPublicFolder is required",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const dir = path.resolve("./public", dieRelativeToPublicFolder);

    if (!fs.existsSync(dir)) {
      return new Response(
        JSON.stringify({
          error: `Directory ${dieRelativeToPublicFolder} not found`,
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const filenames = fs.readdirSync(dir);

    // Filter out PDF files
    const filteredFilenames = filenames.filter(
      (name) => !name.toLowerCase().endsWith(".pdf")
    );

    const images = filteredFilenames.map((name) =>
      path.join("/", dieRelativeToPublicFolder, name)
    );

    return new Response(JSON.stringify(images), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to read directory" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
