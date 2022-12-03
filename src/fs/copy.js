import * as fs from 'fs/promises';

const copy = async () => {
    fs.opendir('./files_copy').then(
        () => {
            throw new Error('FS operation failed');
        },
        () => {
            fs.cp('./files', './files_copy', {recursive: true}).then(
                () => {},
                () => {
                    throw new Error('FS operation failed');
                }
            ); 
        }
    );
};

copy();
