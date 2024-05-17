const fs = require("fs");
const path = require("path");

const targetPath = process.cwd(); // User's current working directory

// Copy the template folder recursively
function copyTemplateFiles(source, target) {
  fs.readdirSync(source).forEach((item) => {
    const sourceItem = path.join(source, item);
    const targetItem = path.join(target, item);

    if (fs.lstatSync(sourceItem).isDirectory()) {
      fs.mkdirSync(targetItem);
      copyTemplateFiles(sourceItem, targetItem);
    } else {
      fs.copyFileSync(sourceItem, targetItem);
    }
  });
}

copyTemplateFiles("./template", "../../../");
console.log("Template files copied successfully!");
