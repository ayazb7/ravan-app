import fs from "fs";
import path from "path";

// Define the GET handler
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder");

  // Check if the folder name is provided
  if (!folder) {
    return new Response(JSON.stringify({ error: "Folder name is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Construct the directory path dynamically
  const directoryPath = path.join(process.cwd(), "public", folder);

  try {
    // Read the files in the directory
    const files = fs.readdirSync(directoryPath);

    // Filter files to ensure you're not exceeding memory limits
    const slides = files.map((file) => `/${folder}/${file}`).slice(0, 4); // Limit to first 10 images

    // Send the slides array as a JSON response
    return new Response(JSON.stringify(slides), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Handle errors, such as folder not existing
    return new Response(JSON.stringify({ error: "Error reading folder" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
