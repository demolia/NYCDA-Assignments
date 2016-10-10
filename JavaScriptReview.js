function returnSom (one, two, three) {
	return (one + two + three)
}

returnSom (2, 2, 7)

/////////////////////////////////////////////////////////////////////////

function whatismylastletter (astring) {
	this.astring = astring
	console.log ( this.astring.slice  ((this.astring.length - 1) ) )
}

whatismylastletter ("gottocatchthemall")

function mycube (here){
	console.log ( Math.pow(here, here));
}
 mycube(3)


// ////////////////////////////////////////////////////////////////////////////////

var reverse = function(str) {
    var arr = [];

    for (var i = 0, len = str.length; i <= len; i++) {
        arr.push(str.charAt(len - i))
    }

    console.log (arr.join(''));
}

reverse('laten we een lepel omdraaien');

/////////////////////////////////////////////////////////////////////////////////

var arryone = ["one", "two", "three"]
var arraytwo = ["four", "five", "six"] 

function arraykey (paraone, paratwo) {
	var counter = {};
	for (var i=0; i< arryone.length; i++ ){
		counter[paraone[i]] = paratwo[i]
	}
	return counter
}

arraykey(arryone,arraytwo)


/////////////////////////////////////////////////////////////////////////////////////

var jimmy = {
	No : "new",
	Hi : "auw",
	Fi : "yo",
}

function coolarry (enterObject) {
	var newobject = {
		keys : [],
		values : []
	}
	var x;

	newobject.keys = (Object.keys(enterObject))

	for (x in enterObject) {
	 	newobject.values.push (enterObject[x])
	}
	console.log(newobject)
}

coolarry(jimmy)


// to loop over an object use a for in loop. this will help loop over the values of an object







