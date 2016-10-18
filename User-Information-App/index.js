
// Inclusing the required modules for this assignment
const express 		= require ('express')
const fs 			= require ('fs')
const bodyParser 	= require('body-parser')
const app 			= express ()


app.set( 'view engine', 'pug')
app.set( 'views', __dirname + '/views' )



function readRender(template, response) {
	fs.readFile(__dirname + '/data.json', (error, data) => {
		if ( error ) 
			throw error
		let parsedData = JSON.parse(data)
		response.render(template, {data: parsedData} )
	})
}



app.get ( '/index', (request, response) =>{
	console.log ('About to render a pug page')
	readRender('index', response)
})

app.get ( '/search', (request, response) =>{
	console.log ('About to render a pug search')
	readRender('search', response)
})

app.get ( '/adduser', (request, response) =>{
	console.log ('About to render a pug search')
	readRender('adduser', response)
})

app.listen (8000, () => {
	console.log('Sever running')
})
