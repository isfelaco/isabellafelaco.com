const fs = require("fs-extra");
const path = require("path");

const staticDir = path.join(__dirname, "..", "isabellafelaco.com", "static");

// Delete the 'C:\Portfolio\static' directory
try {
  fs.removeSync(staticDir);
  console.log(
    "Directory 'C:\\isabellafelaco.com\\static' deleted successfully."
  );
} catch (err) {
  console.error("Error deleting directory:", err);
}

const sourceDir = path.join(__dirname, "build");
const destDir = path.join(__dirname, "..", "isabellafelaco.com");

fs.readdirSync(sourceDir).forEach((file) => {
  const sourceFile = path.join(sourceDir, file);
  const destFile = path.join(destDir, file);
  fs.renameSync(sourceFile, destFile);
});

console.log("Files moved successfully.");
