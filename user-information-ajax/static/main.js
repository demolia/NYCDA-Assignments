alert("Hello World")

function myFunction() {
			let userinput = $("#searchbar").val();
			$.post('/searchajax',userinput,(data, status) =>{
				console.log(data)
			})
		}
		$('#searchbarid').keyup(function(){
			console.log('Key was pressed')
				myFunction()
		})

