(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const bodyParser = require('body-parser')

const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
	function callName(name, key, value) {
		var spawn = require("child_process").spawn;
	 
		var process = spawn('python',["./server.py",
								name,
								key,
								value] );
	  
		console.log('jes');
		
	module.exports = { callName };
	

}
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port);
}); 



callName('Sweet E', 'T_C_S_1', 3);

},{}]},{},[1]);
