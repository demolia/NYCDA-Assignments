//homework thursday
// Create a new class called EmailList. The constructor function should 
//return an instance which contains the following:

// name, the name of the email list
// list, an array of all the emails in that list. Note that initially, the array will be empty. 
// Add a function to the EmailList's prototype. 
// This function should be called "addEmail", and it should take one parameter, the email address, and add it to the "list" array of the instance.

//Add another function to the prototype, called "sendEmailToAll". 
// This function should take in one parameter: the text of the email, and then "send an email to each address". 
//Since that lecture will be sometime in week 6, for now, simply print out the following:

//"Email content:"
//<list the text of the email to be sent>

//"Sending email to:"
//<list all email addresses>

// this function will ensure that the system can create a email list and add email to them by using the .push function.
// the .push function will add stuff into the array. This way by using the function a email list is created and using .addmail mails will
// be added.

function EmailList (name) {
	this.name = name
	this.list = []
	this.addEmail = function(email){
		this.list.push (email)
	}
// this function will send a email to all email address in the list.
// the loop will make sure that every gets a personal email instead of one long email list.
	this.sendEmailToAll = function(textForEmail){
		console.log("Email content:")
		console.log(textForEmail)
		for (var i=0; i<this.list.length; i++) {
			console.log("Sending email to: " + (this.list[i])) 
		}
	}
}

var duckymarketing = new EmailList ("duckylist")
duckymarketing.addEmail("duck@gmail.com")

var swaninc = new EmailList ("swanlist")
swaninc.addEmail("goose@gmail.com")

swaninc.sendEmailToAll ('text')


// Addicionally

//Write a function that returns the area of a circle, given the radius. Hints: The area of a circle is "pi r 2". For pi, use Math.PI.

//Given a string, create a function that returns the last character in that string. example: "cattywampus" --> "s"

//Write a function that takes in one parameter "length" and prints out that many stars. example: 3 --> *** 5 --> *****

//Now, write a function that takes in one parameter "length" and prints out a square of stars. examples:

//3 --> *** *** ***

//5 --> ***** ***** ***** *****

//*****

//Given an array of integers, write a function that finds the average and returns it.

//examples: [1,2,3] --> 2 [1,2,4] --> 2.3333

//awesome

// since the radius is given and Math.PI was given aswell it was only making a console.log sum.

function returnTheArea (insertRadius) {
	console.log ( Math.PI * insertRadius * insertRadius )
} 

returnTheArea (3)

// sorry for the extra time ;)
// think I was to frustraded with my next assignment
// this whole loop is to demonstrate that you can only print the last letter of a string

function whatismylastletter (astring) {
	console.log ( astring.slice  ((astring.length - 1) ) )
}

whatismylastletter ('kameehaameehaaa')
whatismylastletter ("DoesHeOnlyHaveOneEyebrow")
whatismylastletter ("ThereIsOneThingASaiyanWillAlwaysKeepHisPrie")
whatismylastletter ("SuperSaiyans")
whatismylastletter ("Piccolo")
whatismylastletter ("LimitationOnlyExcistsIfYouLetThem")
whatismylastletter ("WelcomeToTheEndOfYourLife")


// I created this with a while loop, seemed easier and shorter then a for loop (less new variable I thought)
// new piece of code, .join this will take eveything from a array and show it with a new command 
// outcome.join ("and") will give * and * and *. It will add a new string, object or number in between de array and display them all.

function starmaker(stars){
    var outcome = []
    while(outcome.length < stars){
        outcome.push('*')
    }
    console.log( outcome.join('') )
}

starmaker(3)
starmaker(8)

outcome.size

// next assignment create a loop that not only displays the numbers in stars but also does this that amount of time
// starmaker 3 -> *** *** ***

// this first version I couldnt get to work, .repeat will repeat anything by the times you would like to repeat it.
function starshooter(stars){
    var outcome = []
    	while(outcome.length < stars){
       		outcome.push('*')
    		}
 
	console.log(outcome[0].repeat(stars*stars))
}


starshooter(3)

// Problem the not working code, see fox below
// I also understand why it isnt working, the second while loop counts with outcome.leght and at that moment outcome.lenght is already equal to the parameter stars.
function starshooter(stars){
    var outcome = []
    	while(outcome.length < stars){
       		outcome.push('*')
    		}
 		while(outcome.lenght < stars) {
		console.log( outcome.join('') )
		}
}


// works, its official it will now always be trying to code.
// on my way back I had a breakthough, pulled my laptop and fixed it
// The second while loop didnt runn because oucome.leght was always 3 stars (the loop before pushed three stars in the array)
// By making a second loop with a new variable we could compare stars to the problem was fixed!
function starshooter(stars){
    var outcome = []
    	while(outcome.length < stars){
       		outcome.push('*')
    		}
 		for (var i = 0; i < stars; i++) {
		console.log( outcome.join('\n'+'') )
		}
}

///////////////////////////////////

function squarestarzzz (num) {
	var square = '';
	for (var i = 0; i < num; i++) {
		// create '*****' 5 and store those in square
		for (var j = 0; j < num; j++) {
			square += "*"
		}
		// create line break and store it in square
		square += "\n"

	}
	console.log(square)
}



squarestarzzz(3)
squarestarzzz(8)

///////////////////////////////

function Avengers (insertArray) {
	var total = 0
	for(var i = 0; i<insertArray.length; i++){
		total += insertArray[i] 
	}
	return (total/insertArray.length)
}


var randomNumbers = [6, 2, 5, 7, 156, 332, 66, 89, 11, 12, 29]

console.log (Avengers(randomNumbers))











