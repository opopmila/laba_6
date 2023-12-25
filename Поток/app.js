const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('Привет Милана!');
writeableStream.write('Продолжение записи \n');
writeableStream.end('Завершение записи');
let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});
