// This alert was to test to see if the JavaScript was loaded :)
// alert("Hello World")

$(document).ready(function() {

	function myFunction() {
		let userinput = $("#searchbarid").val();
		$.post('/searchajax',{data: userinput},(data, status) =>{
			//  This is working, the data is being console.log
			// console.log(data)
			console.log(typeof data)
			console.log ("I work")
			// document.write(data);

			$('.autocomplete').empty()
			$( ".autocomplete" ).append("<p>" + data + "</p>")

		})
	}


	let AjaxCanRun = true

	$('#searchbarid').keyup(function(){
		if (AjaxCanRun) {

		// console.log('Key was pressed') This Works fine :) 
		// if (300 second have passed) {
			myFunction()
			// start counter

		/// If false, the fuction will not run, if true it will runn
			AjaxCanRun = false
		}

		// This set time out will make sure to see if the fuction can run

		setTimeout(function() {
		AjaxCanRun = true
			}, 	3000)

	})
})




