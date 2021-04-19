const {model, Schema, ObjectId} = require('mongoose')

const File = new Schema ({
	name: {type: String, required: true},
	type: {type: String, required: true},
	accessLink: {type: String},
	size: {type: Number, default: 0},
	employee: {type: ObjectId, ref: 'Employees'},
})

module.exports = model('File', File)