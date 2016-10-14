//imporiting necessary modules
const fs = require ("fs")

// read the customer data file 

fs.readFile( __dirname + "/customer.json", "utf8", (err, data) => {
	// Parses the file to a readable object
	let parsedData = JSON.parse( data )
	// console.log(parsedData)
	calcCompound( parsedData )

} )

// Function to calculate compound interest from a customer object
var calcCompound = ( customer ) => {
	// Set end amout property and calculat total durating
	customer.pension.endamount = 0
	customer.pension.duration = (customer.pension.age - customer.age)

	// Do the interest math
	for (var i = customer.pension.duration.length - 1; i >= 0; i--) {
		console.log( "I looped " + [i] + "time")
	}
	
}
// Do not commit in a JSON file! the file will not like if you do so, so be nice and dont do it.
// NO seriously, dont do it! it will hate you for it and break it for you.