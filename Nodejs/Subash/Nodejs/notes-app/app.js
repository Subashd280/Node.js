const fs=require('fs');
// writeFileSync is used for write the data what we want in the file
// 1 parameter file were we want to write the data we given
// 2 parameter data that we write into file
fs.writeFileSync('notes.txt','This is for learning purpose!');
// readFile method we used to read content inside the file 
// 1 parameter path of the file
// 2 parameter err msg,data what we should read from file
fs.readFile('/home/subash/Documents/Nodejs/Subash/Nodejs/notes-app/notes.txt',(err,data) => {
    if(err) throw err;
    //inside console we use data.toString() method that convert data buffer to string
     console.log(data.toString());
});

let fd;
try {
    // openSync is used to open the file 
    fd = fs.openSync('notes.txt', 'a');
    // appendFileSync is used to open the file
    // 1 parameter fd is used to get the data from fs.openSync();
    // 2 parameter data to be append in file
    // 3 parameter utf8
    fs.appendFileSync(fd, 'Hi subash we append the data', 'utf8');
    // readFile method we used to read content inside the file 
    // 1 parameter path of the file
    // 2 parameter err msg,data what we should read from file
    fs.readFile('/home/subash/Documents/Nodejs/Subash/Nodejs/notes-app/notes.txt',(err,data) => {
    if(err) throw err;
    //inside console we use data.toString() method that convert data buffer to string
     console.log(data.toString());
});
} catch(err){
    /* Handle the error */
} finally{
    if ( fd!== undefined)
    fs.closeSync(fd);
    console.log(fd.toString());
}

