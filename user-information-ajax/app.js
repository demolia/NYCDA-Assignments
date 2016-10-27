// opening the installed libaries.
const fs 			= require('fs')
const express 		= require('express')
const bodyParser 	= require('body-parser')
const app 			= express()

// this wil make sure that the app (express) will read the view egine pug in the folder views.
// The view engine pug is set and the location of the pug files
app.set('view engine', 'pug');
app.set( 'views', __dirname + '/views' )

// Source: http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use( '/', express.static(__dirname +'/static'))

// This function will make sure that the pug .index will be opened when opening localhost:8000. 
// Bij using the / the page will open on opening localhost:8000 and no /....(text) is needed
app.get('/', function (req, res) {
  console.log ('About to render the home page')
   let parsdeData1

	// this function will read the data (data.json) and then parse it. at the end it will put it in the var parsdeData
	fs.readFile('data.json', function (err, data) {
		if (err) throw err
			parsdeData1 = JSON.parse(data)
		// parsdeData = JSON.stringify(parsdeData)
		res.render('index', { users: parsdeData1, title: 'Hey', message: 'Hello there!'})
		// res.render('index', {users: lol})
   		// console.log(parsdeData)
	})  
 
})


app.get('/search', function (req, res) { 
	console.log ('About to render the user search page')
  res.render('search', { title: 'Hey', message: 'Hello there!'})
})


// Extracting data from html to node js
// http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js

// The function fs.readFile should be in the get or post because of Asyncharus,
// The speed the file will run and the data.json is a huge file the ParsdeData could be empty if the rest of the file is done
// before the parsing is done. 


// find a array full of objects source:
// http://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript

app.post('/search', function(req, res){
	// console.log(req.body) <- this will print an object { searchbar: inputsearchbar}
	// console.log(req.body.searchbar)	<- This will print the value of the searchbar (better said the input)

    // in this parsdeData the result of reading the data (data.json) and parsing it will be put
    let parsdeData

	// this function will read the data (data.json) and then parse it. at the end it will put it in the var parsdeData
	fs.readFile('./data.json', function (err, data) {
		if (err) throw err
		parsdeData = JSON.parse(data)
	
	    // this variable will be used to push all the possible anwsers into an array, this array can then be posted to as a output.
	    let searchresult = []

	    
	    for (var i=0; i < parsdeData.length; i++) {
	    	if (req.body.searchbar === parsdeData[i].firstName || req.body.searchbar === parsdeData[i].lastName) {
	    		// this push will push the search results into array above
	    		// searchresult.push("User: " + [i+1], "First name: " + parsdeData[i].firstName, "Last name: " + parsdeData[i].lastName, "Email: " + parsdeData[i].email, "----------------")
	    		searchresult.push(parsdeData[i])
	    		// console.log("loop is correct") <- Was jsut to test if the loop did run or not
	    	} 
	    	
	    }
	    console.log(searchresult)
	    // console.log(parsdeData)
	    // console.log(searchresult)
	    res.render('SearchComple', {search: searchresult } )  
	})
    
})

// app.get('/adduser', function (req, res) {
//   // in this parsdeData the result of reading the data (data.json) and parsing it will be put
//   let parsdeData

// 	// this function will read the data (data.json) and then parse it. at the end it will put it in the var parsdeData
// 	fs.readFile('data.json', function (err, data) {
// 		if (err) throw err
// 			parsdeData = JSON.parse(data)
// 	// parsdeData = JSON.stringify(parsdeData)

// 	// res.render('index', {users: lol})
//    // console.log(parsdeData)
// 	})

//   res.render('adduser', { users: parsdeData, title: 'Hey', message: 'Hello there!'})
// })

app.get ( '/adduser', (request, response) =>{
	console.log ('About to render the adduser')
	response.render('adduser')
})

app.post('/adduser', (request, response) =>{
	// Parse the JSON file so it can be used within the function, keep track of scope 
	fs.readFile(__dirname + '/data.json', (error, data) => {
		if ( error ) 
			throw error
		let parsedData3 = JSON.parse(data)

		// console.log(request)
		// Here I push all the data from the input form into the current data file. 
		parsedData3.push(request.body)

		// console.log (parsedData)
		// This will write the new json file to the json.data. WHat this does it basically overwrites the current file
		// and replaces it with a new file. 
		fs.writeFile(__dirname + '/data.json', JSON.stringify(parsedData3, null, '\t'), (err) => {
			if (err) throw err
			console.log('It\'s saved!')
		
		response.redirect('/', {useradded: "The user is succesfully added to our data"})
		})
		// This will redirect the user to the index page
		
	})
})



app.post('/searchajax', function(req, res) {
	console.log(req.body.searchbar)
	searchbar = req.body.searchbar

	fs.readFile('./data.json', function (err, data) {
		if (err) throw err
			let parsedData = JSON.parse(data)

		let searchresult = []

		console.log(searchbar)

		for( i = 0; i < parsedData.length; i++ ){
			if (parsedData[i].firstName.toLowerCase().indexOf(searchbar.toLowerCase()) !== -1 || 
				parsedData[i].lastName.toLowerCase().indexOf(searchbar.toLowerCase()) !== -1){
	    			searchresult.push(parsedData[i].firstName, parsedData[i].lastName)
				}
		}

		res.send({ some: JSON.stringify({searchresult}) })
	})
})


//This will make sure when we run nodemon that the app can be opened on localhost:8000
app.listen (8000, () => {
	console.log('Sever running')
})