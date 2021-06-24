import {useState} from 'react';
import ImagesUpload from './ImagesUpload'
import {addMultipleImages} from '../../../../../redux/actions/projects'
import {setCurrentProjectImages} from '../../../../../redux/actions/projects'
import {useDispatch} from 'react-redux'
import React from 'react';

  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function ImagesUploadContainer ({employee}) {
const dispatch = useDispatch()
  const notify = () => toast("Avatar was added!");
  const [file, setFile] = useState([])
  // const src = []

  const onChange = (e) => {
    setFile(e.target.files)
  }

  const onclickSetImg = () => {
    const tempImgName = []
    for (let i = 0 ; i < file.length ; i++) {
      tempImgName.push(file[i].name);
    }
    dispatch(setCurrentProjectImages(tempImgName)) 
    notify()
  }

  const onSubmit = (e) => {
	  const formData = new FormData()
    for (let i = 0 ; i < file.length ; i++) {
      formData.append("file", file[i]);
  }
    e.preventDefault()
    dispatch(addMultipleImages({formData}))
  }
  
	return <ImagesUpload file={file}
		onSubmit={onSubmit}
		onChange={onChange}
		onclickSetImg={onclickSetImg}
		/>
}