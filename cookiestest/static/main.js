// It works now :) 
// alert ("Hello World");

$ (document).ready(function( ){
	console.log ('The Dome had come down')

	setTimeout(function( ) {
		$('#container').html('<h1> I am Jquiry</h1>')
	}, 3000)

	if (Cookies.get ('Welcome') === 'Back' ) {
		alert ('Welcome back') 
		}

		else { Cookies.set('Welcome', 'Back' )
			alert ('Welcome')
		}


})
