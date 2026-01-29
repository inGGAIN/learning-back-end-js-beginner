import { error } from 'console';
import fs from 'fs';

const bacaBerkas = (error, data) => {
    if (error) {
        console.log(error);
    };
    console.log(data);
};

fs.readFile('filesystem/latihan/notes.txt', 'utf-8', bacaBerkas);