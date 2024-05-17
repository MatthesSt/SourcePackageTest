const fs = require("fs");
const path = require("path");

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

const templatePath = path.join(__dirname, "template");
const targetPath = path.join(process.cwd(), "../../"); // User's current working directory

copyTemplateFiles(templatePath, targetPath);
console.log("Template files copied successfully!");
