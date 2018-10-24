const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, next) => acc + '      ' + next, '');
    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
  fs.writeFile(fileName, 'New File', 'utf8', err => {
    if(err) {
      throw err;
    }
    console.log('File Created!');
  });
};

module.exports.mkdir = (path) => {
  fs.mkdir(path, err => {
    if(err) {
      throw err;
    }
    console.log('Directory created!');
  });
};