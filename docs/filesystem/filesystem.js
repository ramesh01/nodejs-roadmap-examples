const fsPromises = require("fs").promises;
const path = require("path");

const fileOp = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'newsample.txt'), 'utf8');
        await fsPromises.writeFile(path.join(__dirname, 'newsample.txt'), 'code my life');
        // delete file
        // await fsPromises.unlink(path.join(__dirname, 'sample.txt'));
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fileOp();

// Read data
// fs.readFile(path.join(__dirname, 'sample.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// process.on('uncaughtException', err=> {
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(1);
// });

// // Write data
// fs.writeFile(path.join(__dirname, 'sample.txt'), 'code my life', (err) => {
//     if (err) throw err;

//     // Append data
//     fs.appendFile(path.join(__dirname, 'sample.txt'), 'Testing life', (err) => {
//         if (err) throw err;
//         console.log("append complete");
//     });

//     // rename file name
//     fs.rename(path.join(__dirname, 'sample.txt'), path.join(__dirname, 'newsample.txt'), (err) => {
//         if (err) throw err;
//         console.log("rename complete");
//     });
// });

