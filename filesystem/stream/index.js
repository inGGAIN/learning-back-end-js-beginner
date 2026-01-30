import fs from 'fs';

const readableStream = fs.createReadStream('filesystem/stream/input.txt', {
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        console.log('gagal');
    }
});

readableStream.on('end', () => {
    console.log('Selesai');
});

// Write
const writableStream = fs.createWriteStream('filesystem/stream/output.txt');

writableStream.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
writableStream.end();