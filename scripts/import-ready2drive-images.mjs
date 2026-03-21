import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import AdmZip from "adm-zip";

const sourceDocx =
  process.argv[2] ??
  path.resolve(process.cwd(), "..", "UX Case Study Rewritten.docx");
const outputDir = path.resolve(
  process.cwd(),
  "public",
  "case-studies",
  "ready2drive"
);

async function extractDocxImages() {
  const zip = new AdmZip(sourceDocx);
  const mediaEntries = zip
    .getEntries()
    .filter((entry) => entry.entryName.startsWith("word/media/") && !entry.isDirectory)
    .sort((a, b) =>
      a.entryName.localeCompare(b.entryName, undefined, { numeric: true })
    );

  if (mediaEntries.length === 0) {
    throw new Error("No media assets found in DOCX file.");
  }

  await fs.mkdir(outputDir, { recursive: true });

  for (const entry of mediaEntries) {
    const filename = path.basename(entry.entryName);
    const fileBuffer = entry.getData();
    await fs.writeFile(path.join(outputDir, filename), fileBuffer);
  }

  console.log(
    `Extracted ${mediaEntries.length} image(s) from "${path.basename(sourceDocx)}" to ${outputDir}`
  );
}

extractDocxImages().catch((error) => {
  console.error("Failed to extract images:", error.message);
  process.exitCode = 1;
});
