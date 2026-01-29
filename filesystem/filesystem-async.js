import fs from 'fs';

const fileReadCallback = (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(data);
};

fs.readFile('filesystem/todo.txt', 'UTF-8', fileReadCallback);
