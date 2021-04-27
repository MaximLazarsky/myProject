import {useState, useEffect} from 'react';
import ImagesUpload from './ImagesUpload'
import {addMultipleImages} from '../../../../../redux/actions/projects'
import {useDispatch} from 'react-redux'
import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function ImagesUploadContainer ({employee}) {
const dispatch = useDispatch()
  const notify = () => toast("Avatar was added!");
  const [file, setFile] = useState([])
  const [fileName, setFileName] = useState('')
  const [src, setSrc] = useState('')

  // useEffect(() => {
  //   if(employee) {
  //     if(employee.avatar) {
  //       setSrc(`/uploads/${employee.avatar}`)
  //     } 
  //   }
  // }, [])

  const onChange = (e) => {
    console.log("TARGET FILE ", e.target.files[0])
    setFile(e.target.files)
    setFileName(e.target.files)
    setSrc(URL.createObjectURL(e.target.files[0])); 
  }
console.log("file", file)
console.log("fileName", fileName)
console.log("src", src)

  const onclickSetImg = () => {
    // dispatch(setCurrentEmployeeImage(fileName)) 
    notify()
  }

  const onSubmit = (e) => {
	  const formData = new FormData()

    for (let i = 0 ; i < file.length ; i++) {
      formData.append("file", file[i]);
  }
    // formData.append("file", file)
    // formData.append("fileName", fileName)
    e.preventDefault()
    dispatch(addMultipleImages({formData}))
    setFileName('Download avatar')
  }
  

	return <ImagesUpload src={src}
		onSubmit={onSubmit}
		// fileName={fileName}
		onChange={onChange}
		onclickSetImg={onclickSetImg}
		/>
}