
const sequelize 	= require('sequelize')
const express 		= require('express')
const app 			= express( )

let db = new sequelize ('relation', 'postgres', 'postgres', {
	server: 'localhost',
	dialect: 'postgres'
} )

// define database structure


// define models
let User = db.define( 'user', {
	name: sequelize.STRING,
	email: { type: sequelize.STRING, unique: true}
} )

let Hat = db.define ( 'hat', {
	name: sequelize.STRING,
	brim: sequelize.BOOLEAN,
	height: sequelize.INTEGER,
	material: sequelize.STRING
} )

// define relations
User.hasMany( Hat )
Hat.belongsTo ( User )

// set express routes


// test is front end and backend are working together
app.get ('/ping', (req, res) => {
	res.send('pong')
})

app.get ('/hats', (req, res) => {
	Hat.findAll ( {
		include: [{
			model: User,
			attributes: [ 'name']
		}]
	} ).then (hats => {
		res.send (hats)
	})
})

app.get('/users', (req, res) => {
	User.findAll ( {
		attributes: [ 'name' ],
		include: [ Hat ]
	}).then (users => {
		res.send (users)
	})
} )


// Creating users
db.sync ( {force: true} ).then( () => {
	console.log ( 'Synced')
		User.create ({
			name: 'Jimmy',
			email: 'jimmyvoskuil@msn.com'
		}).then (user => {
				user.createHat( {
					name: 'Jimmyhat',
					brim: true,
					height: 4,
					material: 'Dragon skin'
				})
				user.createHat( {
					name: 'Jimmy second hat',
					brim: true,
					height: 1,
					material: 'Dragons fire'
				})
			})
		User.create ({
			name: 'Mentor',
			email: 'mentor@gmail.com'
		}).then (user => {
				user.createHat( {
					name: 'Mentor hat',
					brim: true,
					height: 2,
					material: 'Banana skin'
				})
			})

		Hat.create ({
			name: 'Tophat',
			brim: true,
			height: 5,
			material: 'felt'
		})
		Hat.create ({
			name: 'Downhat',
			brim: false,
			height: 1,
			material: 'feel'
		})
} ) 

app.listen (8000, () => {
	console.log ( 'server running' )
} )