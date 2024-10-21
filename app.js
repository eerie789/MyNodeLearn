const http = require('http')

const data = require('./data')
console.log(data)

const server = http.createServer((req, res) => {
	if (req.url === '/'){
		res.end(` ${data}`)
	}
	else if (req.url === '/about') {
		res.end('About Page')
	}
	else {
		res.end(`
		<h1>Ops!!!</h1>
		<p>Page not found (404!)</p>
		<a href='/'>Back to home<a/>
		`)
	}
})

server.listen(5000)
