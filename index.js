var http = require('http');
var fs = require('fs');
 var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february&name=anil';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
console.log(q.query); //returns '?year=2017&month=february'

http.createServer(function (req, res) {
    fs.readFile('demo.html',function (err, data) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end()
    })
}).listen(8080);