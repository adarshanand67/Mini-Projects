const fs = require('fs'); // filesystem

// reading file using fs (Asynchronous)
fs.readFile('./nodejs/assets/ok.txt', function(err, chunk) {
  if (err) {
    console.log(err);
  }
  console.log(chunk);
  console.log(chunk.toString());
})

// console.log("last line");

//  creating assets using fs module
const text = 'THis is some random text'
fs.writeFile('./nodejs/assets/ok1.txt', text, function (err, chunk) {
  if (err) {
    console.log(err);
  }
  console.log("file wrriten");
})

// Directory
// if 'asset' directory exist
if (!fs.existsSync("./assets1")) {
  fs.mkdir("./assets1", function (err) {
    if (err) {
      console.log(err);
    }
    console.log("file created");
  });
} else {
  // rmdir
  fs.rmdirSync("./assets1");
}

// deleting assets
if (fs.existsSync('./assets/ok1.txt')){
  fs.unlink("./assets/ok1.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}

// streams, buffers
const readStream = fs.createReadStream('./nodejs/assets/stream.txt')
// const readStream = fs.createReadStream('./assets/stream.txt','utf-8')
const writeStream = fs.createWriteStream("./nodejs/assets/write-stream.txt");

readStream.on('data', (chunk) => {
  console.log(chunk);
  console.log('----------------------------------------------------------------\n');

  // write to file 
  writeStream.write('----------------------------------------------------------------\n');
  writeStream.write(chunk);

})

// piping
readStream.pipe(writeStream);