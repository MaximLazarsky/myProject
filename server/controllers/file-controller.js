
const addFile = (req, res) => {
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

const addMultipleFiles = (req, res) => {
	if(req.files === null) {
		return res.status(400).json({msg: 'no file uploaded'})
	}
	const file = req.files.file
	file.map((file) => {file.mv(`C:/Users/Dimitr/Desktop/oursite/myProject/front/public/uploads/projectsImages/${file.name}`, err => {
		if(err) {
			return res.status(500).send(err)
		}
	})}) 
	
}

module.exports = {
	addFile,
	addMultipleFiles,
}