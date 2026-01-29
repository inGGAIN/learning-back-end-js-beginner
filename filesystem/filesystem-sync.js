import fs from 'fs';

const data = fs.readFileSync('filesystem/todo.txt','UTF-8');
console.log(data);