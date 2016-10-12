var fs = require('fs')


function countryparse (countryname) {

	fs.readFile( __dirname + '/countries.json', 'utf8', function(err, read){
		if (err) throw err;
		read = JSON.parse(read)
		// console.log(read)
		
		// First we tried to capital the input instead of the search.
		// This worked but only not with countries with multi names like:
		// "Saint Kitts and Navis" this was solved by:

		// searching with lowercase and chaching the input to lowercase
		// while not chancing the file or the actual input :)

		// countryname = countryname.toLowerCase();

		// String.prototype.capitalizeFirstLetter = function() {
		// 	return this.charAt(0).toUpperCase() + this.slice(1);
		// }

		// countryname = countryname.capitalizeFirstLetter()

		for (i = 0; i < read.length; i++) {
			if (read[i].name.toLowerCase() == countryname.toLowerCase()) {
				console.log ("Country: " + read[i].name)
				console.log ("Top Level Domain: " + read[i].topLevelDomain)
			}
		}

	})

}

module.exports = countryparse 