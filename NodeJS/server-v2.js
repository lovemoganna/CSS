const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

function OnRequest(req,res){
	 res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'}); // 解决中文乱码
	 res.write("Hello world 2")
	 res.end();
}

http.createServer(OnRequest).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});