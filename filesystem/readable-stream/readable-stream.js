import fs from 'fs';

const readableStream = fs.createReadStream('filesystem/readable-stream/article.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    }catch(error) {
        console.log('fail');
    }
});

readableStream.on('end', () => {
    console.log('Done');
});