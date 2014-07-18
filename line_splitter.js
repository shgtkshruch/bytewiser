var fs = require('fs'),
    file = fs.readFileSync(process.argv[2]),
    offset = 0;

for (var i = 0; i < file.length; i++) {
  if (file[i] === 10) {
    console.log(file.slice(offset, i));
    i++
    offset = i
  }
}
console.log(file.slice(offset, i));

