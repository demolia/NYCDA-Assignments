const express = require ( 'express' )
const app = express()

app.use( express.static('Jimmy-Selma-Coffee-Adventure') )

app.listen( 3000, () => {
	console.log ( 'Node.js app is running on localhost:3000')
})
