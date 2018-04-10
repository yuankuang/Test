// var http = require("http");
// http.createServer(function(req,res){
// 	 res.writeHead(200, {'Content-Type': 'text/plain'});
//      res.end('Hello World\n');
// }).listen(8088);

// var adds = require("./hello");
// adds.world();

// var fs = require("fs");
// fs.readFile("input.txt.txt", function(error, data) {
//     if (error) return console.error(error);
//     console.log(data.toString());
// });

//buffer
// var buf = Buffer.from("yuankang", "ascii");
// console.log(buf.toString('hex'));

// var buf = Buffer.alloc(20);
// len = buf.write("www.runoob.com");
// console.log(len);

// var buf = Buffer.from("yuankuang");
// console.log(buf.toJSON(buf));

// var fs = require("fs");
// var data = "";
// var readerStream = fs.createReadStream("input.txt.txt");
// readerStream.setEncoding('UTF8');
// readerStream.on('data', function(param) {
//     data += param;
// });
// readerStream.on('end', function() {
//     console.log(data);
// });
// readerStream.on('error', function(err) {
//     console.log(err);
// })

// var data = "my name is yuan kuang";
// var fs = require("fs");
// var writeStream = fs.createWriteStream("input.txt.txt");
// writeStream.write(data, "UTF8");
// writeStream.end();
// writeStream.on('finish', function() {
//     console.log("写入完成。");
// });
// writeStream.on('error', function(err) {
//     console.log(err);
// })
//createGunzip解压，createGzip压缩
var fs = require("fs");
var zlib = require("zlib");
fs.createReadStream("input.txt.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("input.txt.gz"));