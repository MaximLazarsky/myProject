
const addFile = (req, res) => {
	// console.log(req.body)
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
	console.log("req.body", req.body)
	if(req.files === null) {
		return res.status(400).json({msg: 'no file uploaded'})
	}
	const file = req.files.file
	console.log("ARREY file in file-controller", file)
	file.map((file) => {file.mv(`C:/Users/Dimitr/Desktop/oursite/myProject/front/public/uploads/projectsImages/${file.name}`, err => {
		if(err) {
			return res.status(500).send(err)
		}
		// return res.json({ message: "images was added" });
	})})
	
	 
}

module.exports = {
	addFile,
	addMultipleFiles,
}