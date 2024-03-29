import {useState, useEffect} from 'react';
import AvatarUpload from './AvatarUpload'
import {addImg, setCurrentEmployeeImage} from '../../../../redux/actions/employees'
import {useDispatch} from 'react-redux'
import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function AvatarUploadContainer ({employee}) {
const dispatch = useDispatch()
  const notify = () => toast("Avatar was added!");
  const [file, setFile] = useState('')
  const [fileName, setFileName] = useState('Download avatar')
  const [src, setSrc] = useState('')

  useEffect(() => {
    if(employee) {
      if(employee.avatar) {
        setSrc(`/uploads/${employee.avatar}`)
      } 
    }
  }, [])

  const onChange = (e) => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
    setSrc(URL.createObjectURL(e.target.files[0])); 
  }

  const onclickSetImg = () => {
    dispatch(setCurrentEmployeeImage(fileName)) 
    notify()
  }

  const onSubmit = (e) => {
	  const formData = new FormData()
    formData.append("file", file)
    formData.append("fileName", fileName)
    e.preventDefault()
    dispatch(addImg({formData}))
    setFileName('Download avatar')
  }
  

	return <AvatarUpload src={src}
		onSubmit={onSubmit}
		fileName={fileName}
		onChange={onChange}
		onclickSetImg={onclickSetImg}
		/>
}