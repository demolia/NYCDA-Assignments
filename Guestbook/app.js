// opening the installed libaries.
const express 		= require('express')
const bodyParser 	= require('body-parser')
const pg 			= require('pg');
const app 			= express()

app.use( '/resources', express.static( __dirname + '/static' ) )

// source pg: https://www.npmjs.com/package/pg // https://github.com/j7caiman/nodejs-sample-apps/blob/master/postgres_client_examples/read/src/app.js
const connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/guestbook';

// this wil make sure that the app (express) will read the view egine pug in the folder views.
// The view engine pug is set and the location of the pug files
app.set('view engine', 'pug');
app.set( 'views', __dirname + '/views' )

// Source: http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(bodyParser.json())
app.use( '/resources', express.static( __dirname + '/static' ) )


app.get('/', function (req, res) {
	console.log ('About to render the home page')

	res.render('index')
})



app.get('/guestbook', function (req, res) {
	
	pg.connect(connectionString, function (err, client, done) {
		client.query('select * from guestbook', function (err, result) {
			// console.log(result.rows);

			let guestbookrestults = result.rows
			done();
			pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
		
			res.render('guestbook', {guestbook: guestbookrestults } )
		});
	});
})



app.post('/', function(req, res){
	
	console.log (req.body.title)
	console.log (req.body.message)

	pg.connect(connectionString, function(err, client, done) {
	  if (err) throw err 
	  //add a new hat
	  client.query("insert into guestbook (title, message) values ('" + req.body.title + "', '" + req.body.message + "')", function(err, result) {
	    if (err) throw err 
	    //should print 'INSERT: 1'
	    // console.log(`${result.command}: ${result.rowCount}`);
	    // //call done and end, same as the read example
	    done();
	    pg.end();

	res.redirect('guestbook')

	  });
	});
})


//This will make sure when we run nodemon that the app can be opened on localhost:8000
app.listen (8000, () => {
	console.log('Sever running')
})