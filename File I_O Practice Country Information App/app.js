var fs = require('fs')


function countryparse (fileName, callBack) {

	fs.readFile( fileName, 'utf8', function(err, data){
		if (err) throw err;
		array = JSON.parse(data)

		callBack(array)

	})

}


module.exports = countryparse 

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