// opening the installed libaries.
const express 		= require('express')
const app 			= express()

app.set('view engine', 'pug');
app.set( 'views', __dirname + '/views' )

app.use( '/resources', express.static( __dirname + '/static' ) )

//rendering the index page
app.get('/', function (req, res) {
	console.log ('About to render the home page')

	res.render('index')
})	

//This will make sure when we run nodemon that the app can be opened on localhost:8000
app.listen (8000, () => {
	console.log('Sever running')
})