import fs from 'fs';

const writableStream = fs.createWriteStream('filesystem/writable-stream/output.txt');

writableStream.write('Ini teks pertama\n');
writableStream.write('Ini teks kedua\n');
writableStream.end('Finish');