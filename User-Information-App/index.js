
// Inclusing the required modules for this assignment
const express 		= require ('express')
const fs 			= require ('fs')
const bodyParser 	= require('body-parser')
const app 			= express ()

app.use(bodyParser.urlencoded({ extended: false }))

app.set( 'view engine', 'pug')
app.set( 'views', __dirname + '/views' )

function readRender(template, response) {
	fs.readFile(__dirname + '/data.json', 'utf8', (error, data) => {
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
	console.log ('About to render the search page')
	readRender('search', response)
})

app.post('/search', (request, response) =>{
	// Parse the JSON file so it can be used within the function, keep track of scope 
	fs.readFile(__dirname + '/data.json', (error, data) => {
		if ( error ) 
			throw error
		let parsedData = JSON.parse(data)
		// console.log(parsedData)
	
		let printedobjects = [] 

		for (var i = 0; i < parsedData.length; i++) {
		// if request.body.searchbar == parseddate.first[i]
			if (request.body.searchbar.toLowerCase() == parsedData[i].firstName.toLowerCase() || parsedData[i].lastName.toLowerCase() == request.body.searchbar.toLowerCase() ) {
				printedobjects.push("User: " + [i+1], "First name: " + parsedData[i].firstName, "Last name: " + parsedData[i].lastName, "Email: " + parsedData[i].email, "----------------")

				// Door een komma toe te voegen maakt je een array met nieuwe objecten. Hierdoor worden ze indivueel geprint
			} 
		}
		 response.render('search-completed', { message: printedobjects, 
		 	tryagain: "The user you tried to search " + "'" + request.body.searchbar + "'" + " was not found in our system please try again"} )

		

//
		// if (printedobjects.length == 0) {
		// 		console.log("I am sorry this name is not found in our database, please try again")
		// } else {
		// 	console.log (printedobjects)
		// }
		// console.log (printedobjects)
	})
})

app.get ( '/adduser', (request, response) =>{
	console.log ('About to render the adduser')
	readRender('adduser', response)
})

app.post('/adduser', (request, response) =>{
	// Parse the JSON file so it can be used within the function, keep track of scope 
	fs.readFile(__dirname + '/data.json', (error, data) => {
		if ( error ) 
			throw error
		let parsedData = JSON.parse(data)
		console.log(1)
	
		let objecttoadd = {
			firstName: " ",
			lastName: " ",
			email: " "
		} 

		console.log (2)

		objecttoadd.firstName = request.body.firstName
		objecttoadd.lastName = request.body.lastName
		objecttoadd.email = request.body.email

		parsedData.push(objecttoadd)

		console.log (parsedData)

		fs.writeFile(__dirname + '/data.json', JSON.stringify(parsedData, null, '\t'), (err) => {
			if (err) throw err
			console.log('It\'s saved!')
		})

		response.redirect('index')
		
	})
})



// app.post('/search', function(req, res) {
//     var name = req.body.name,
//         color = req.body.color;
// })

// app.post( __dirname + '../data.json', jsonParser, function (req, res) {
//   console.log(req.body)
//   // if (!req.body) return res.sendStatus(400)
//   // create user in req.body 
// })


app.listen (8000, () => {
	console.log('Sever running')
})

	// request.render('Search_complete',  {searchresult: request.printedobjects});
