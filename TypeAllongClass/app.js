//imporiting necessary modules
const fs = require ("fs")

// read the customer data file 


//helper to add comma's to final number
let addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//helper function to roundup the final given number
let roundDecimal = (number) => {
	return Math.round(number * 100) / 100
}

//help function do two functions both
let prettyNr = ( number ) => {
	return addCommas( roundDecimal(number))
}

fs.readFile( __dirname + "/customer.json", "utf8", (err, data) => {
	// Parses the file to a readable object
	let parsedData = JSON.parse( data )
	// console.log(parsedData)
	calcCompound( parsedData )

} )

// Function to calculate compound interest from a customer object
var calcCompound = ( customer ) => {
	// Set end amout property and calculat total durating
	customer.pension.endamount = {
		pessimistic: customer.finances.startcapital,
		average: customer.finances.startcapital,
		optimistic: customer.finances.startcapital
	}
	customer.pension.duration = (customer.pension.age - customer.age)
	// Do the interest math
	for (var i = customer.pension.duration - 1; i >= 0; i--) {
		customer.pension.endamount.pessimistic += (customer.finances.monthlyadd * 12)
		customer.pension.endamount.average += (customer.finances.monthlyadd * 12)
		customer.pension.endamount.optimistic += (customer.finances.monthlyadd * 12)

		// Calculate the added interest 
		customer.pension.endamount.pessimistic *= customer.pension.interest.pessimistic
		customer.pension.endamount.average *= customer.pension.interest.average
		customer.pension.endamount.optimistic *= customer.pension.interest.optimistic
	}
	// Output out data
	console.log ("Welcome " + customer.name + " to our advanced pension planner!")
	console.log ("You are starting with " + customer.finances.startcapital + " and add a monthly amount of " + customer.finances.monthlyadd )
	console.log ("When you retire at the age of " + customer.pension.age + " you will have following:" )

	// Show output to consumer
	console.log ("In a pessimistic scenario: " + prettyNr(customer.pension.endamount.pessimistic) )
	console.log ("In a average scenario: " + prettyNr(customer.pension.endamount.average) )
	console.log ("In a optimistic scenario: " + prettyNr(customer.pension.endamount.optimistic) )

	
}
// Do not commit in a JSON file! the file will not like if you do so, so be nice and dont do it.
// NO seriously, dont do it! it will hate you for it and break it for you.