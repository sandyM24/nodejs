const fs = require('fs');

const readDir = fs.readdirSync('./');
console.log(readDir);

fs.readdir('./', (err, files) => {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});
