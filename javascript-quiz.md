Instructions:

- Add your answers inline to the markdown file.
- Use your own words.
- Come up with an answer from memory. Write it down, even if the answer is "I don't know."
- Then, submit all of your answers in a file to canvas. This is so Lloyd and I can get a sense of your understanding.
- Finally, we will go over the answers in class. Write down your revised answer below your original answer.


---
### Part 1: Control Flow - 15 minutes

1. Write an if statement. Name each of the components and how they work together.

	if string/number = comparison string/number
		do something.

	The if statement compares two things and if they are the same, something should happens. This could be anything.

2. Write a for loop. Describe each of its components. Indicate the order in which they are executed / evaluated.

for (i = 0;  i < 100; i++) {
	do something (example console.log("I jumped " + i + " times"))
}
This loop counts from 0 to 999
i = a variable within the for loop
i < 1000 = As long as i is smaller then 1000 make sure to do the do something.
i++ also is i = i + i, this will make sure that i counts and that it isnt an endless loop.

The do something could be anything (any element).

3. Functions
 - 3a. Write a function. Describe each of its components and what each component does. Specify which of them are optional.

function hello (parameter) {
	do something
}

function = telling JavaScript that I created a function.
Hello = the function name, the function is also called forward by this name.
parameter = a parameter, this is the input of the function, could be any amount of parameters divided with a " , "
 function doesnt need its parameters and could also runn without. The parameter can be used throughout the function.
The do something could be anything, a loop, another function, a console.log.


 - 3b. Write a function being called, showing the instruction execution order.

I dont get this question fully but I think you mean:

hello(world)

this will call out the function hello, between the brackets the parameter is added if needed and this could be used throughout the whole function.

Hello = the function
World = the parameter, could be more then one, could be none.
---
### Part 2: Data Types - 10 minutes

4. Primitive Data Types
 - 4a. Give an example of an empty string and a non-empty string.
 var hello;
 var hello = "hello WORLD!"

 - 4b. Give an example of a boolean.
Boolean are true or false.
Either a outcome it correct = true or incorrect = false.

 - 4c. Give an example of a Number.
 1029021983091283217392817312983712896317823612783645765476125 is a number :)

 Just like any number in the human language.

5. Arrays
 - 5a. Give an example of an empty array.

var emptyarry = []

 - 5b. Give an example of an array with three elements in it.

 var arrythree = ["hello", "to", "the"]

 - 5c. How do you add another element to this array?

 .push , arrythree.push ("world")

 - 5d. How do you get the length of this array?

 array.length

 - 5e. Show how to iterate through the array using a loop.

this is done with a for in loop
 for ( x in arrythree )

 
6. Objects
 - 6e. Give an example of an empty object.

var empty = {}

 - 6b. Give an example of an object with three keys and three values.

var full = {
	hello : ("hello")
	world : ("world")
	TheDude : ("thedude") 

 - 6c. Give an example of an object with two keys and two functions as values.

var object = {
	keyone : function {
	console.log ("here") }
	keytwo: function {
	console.log ("nothing")}
}

 - 6d. Describe one way of adding a key to an object.

I don't know without google.

 - 6e. Describe the other way of adding a key to an object.

 I don't know without google.

 - 6f. Explain the difference between these two ways, and when it is appropriate to use each way.
 


 - 6g. Describe how to iterate though an object using a loop.

the .Objectkeys will let you walk through the keys of an object.

for  ( x in object)
	object.values 

	and what ever you would like to do with the values of the object.

---
### Part 3: Algorithms - 20 minutes

7. What is an algorithm?

8. For the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.

```js
// Given an array of values, write a function that finds the index of where the value is located, and if nothing is found, returns -1.
// Do not use the indexOf function.
// example: for ['apple', 'orange', 'pineapple']
	// 'orange' returns '1'
	// 'durian' returns '-1'
```

We need to create a function which takes in one parameter, this parater is the array we  would like to know the index of. In this function we will create a for loop with a if and else statement. The if statement will print the in the console if the name given is also in the array. Then we will print i+1. Else it will console.log -1

function index (arryname) {
	for (i = 0; i < arryname.length; i++){
		if for[i] = arryname
			console.log(i)
		else console.log("-1")
	}
}

9. Again, for the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.

```js
// Write a function that finds all the indexes of where the value is located and returns them in an array, and if nothing is found, returns -1
// example: ['apple', 'orange', 'orange', 'pineapple']
	// 'orange' returns [1,2]
```

For this question I will use a loop checks if the name is in the array and on which places and meanwhile print all the places it is one. So the loop should check is their is an name equal to the 
