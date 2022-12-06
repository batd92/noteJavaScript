const fs = require('fs');
const zlib = require('zlib');
// https://nodejs.org/api/stream.html

function readFileStream() {
  let data = '';
  const src = fs.createReadStream('input.nu');
  src.setEncoding('utf8');
  // handle error
  src.on('error', (error) => {
    console.log('Error reading ' + error);
  });
  // handle end

  src.on('end', function (data) {
    console.log('End of file: ', data);
  });

  src.on('data', function (chunk) {
    console.log('chunk: ' + chunk);
    data += chunk;
  });
  return src;
};

function writeFileStream(isUsePipe = false, streamData) {
  const src = fs.createWriteStream(`output${new Date().getTime().toString()}.nu`);

  src.on('error', function(err){
    console.log('Error write ' + err);
  });

  if (!isUsePipe) return src.write('Everything you need to know - not use pipe');
  return streamData.pipe(src).pipe(process.stdout).on('finish', function(){
    console.log('finish');
  });  
};

writeFileStream();
writeFileStream(true, readFileStream());
writeFileStream(true, readFileStream().pipe(zlib.createGzip()));