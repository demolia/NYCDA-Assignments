alert("Hello World")

function myFunction() {
			let userinput = $("#searchbarid").val();
			$.post('/searchajax',userinput,(data, status) =>{
				console.log(data)
				console.log(some)
			})
		}
		$('#searchbarid').keyup(function(){
			// console.log('Key was pressed') This Works fine :) 
				myFunction()
		})

