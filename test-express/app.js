const express = require ( 'express' )
const app = express()

app.use( express.static('static') )

app.get('/', (request, response) => {
	response.status(418)
	.send ( 'Hello Jimmy' ) 
})

app.get('/home', (req, res) => {
	res.sendFile( __dirname + '/static/index.html')
})

app.listen( 3000, () => {
	console.log ( 'Node.js app is running on localhost:3000')
})

