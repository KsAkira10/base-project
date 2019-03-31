const fs = require('fs');
const path = require('path');
const currentPath = process.cwd();
fs.copyFile(`${currentPath}/dist/base-project/index.html`, `${currentPath}/dist/base-project/404.html`, (err) => {
  if (err) throw err;
  console.log('success in copy');
});
