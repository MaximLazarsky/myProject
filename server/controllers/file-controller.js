const Employees = require("../models/Employees-model");
const File = require("../models/File-model")

const addFile = (req, res) => {
	console.log(req.body)
	if(req.files === null) {
		return res.status(400).json({msg: 'no file uploaded'})
	}
	const file = req.files.file
	 file.mv(`C:/Users/Dimitr/Desktop/oursite/myProject/front/public/uploads/${file.name}`, err => {
		if(err) {
			return res.status(500).send(err)
		}
		res.json({ fileName: file.name, filePath: `uploads/${file.name}` })
	})
}

module.exports = {addFile}