const { Schema, model } = require('mongoose');

const roleSchema = new Schema({
	name:{
		type: String,
		required: [ true, 'Provide the role name'],
		unique: [ true, 'This name is already in use']
	},
	level: {
		type: Number,
		required: [ true, 'Provide the role level'],
		unique: [ true, 'This level number is already in use']
	},
	description: String
});

module.exports = model('Role', roleSchema);