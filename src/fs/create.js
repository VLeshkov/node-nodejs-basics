import * as fs from 'fs/promises';
import * as path from 'path';

const fileData = 'I am fresh and young';
const filePath = path.resolve('./files/fresh.txt'); 

const create = async () => {
    // Write your code here 

    fs.readFile(filePath).then(
        () => {
            throw new Error('FS operation failed');
        },
        () => {
            fs.writeFile(filePath, fileData);
        }
    );
};

await create();
