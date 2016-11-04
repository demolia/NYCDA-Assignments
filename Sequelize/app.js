// opening the installed libaries.
const express 		= require('express')
const pg 			= require('pg');
const app 			= express()

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/guestbook')

var Hat = db.define('hat', {
    //create name and material as strings,
    name: Sequelize.STRING,
    material: Sequelize.STRING,
    //height as an integer,
    height: Sequelize.INTEGER,
    //and brim as a true/false
    brim: Sequelize.BOOLEAN
})

db.sync( {force: true} ).then () => {
	Hat.create({
		name: 'cowboy',
		material: 'straw',
		height: 4,
		brim: true
	})
}

app.get('/hats', (req, res) => {
	console.log ('See my hats')
	Hat.findAll ( ).then ( hats => {
		res.send( hats )
	})

})

app.get ('/ping', (req, res) => {
	res.send( Pong )
})

app.listen(8000, () => {
	console.log ("Server running")
} )