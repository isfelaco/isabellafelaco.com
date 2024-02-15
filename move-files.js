const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "build");
const destDir = path.join(__dirname, "..");

fs.readdirSync(sourceDir).forEach((file) => {
  const sourceFile = path.join(sourceDir, file);
  const destFile = path.join(destDir, file);
  fs.renameSync(sourceFile, destFile);
});

console.log("Files moved successfully.");
