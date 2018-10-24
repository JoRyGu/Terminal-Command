const fs = require('fs');

exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, next) => acc + '      ' + next, '');
    console.log(filesToString);
  });
};