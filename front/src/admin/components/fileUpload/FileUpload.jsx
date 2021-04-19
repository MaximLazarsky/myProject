import React, {useState, Fragment} from 'react';
import {TextField, Avatar} from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import useStyles from '../employees/addUpdateEmployeeForm/addUpdateEmployeeFormStyles';
import {addImg} from '../../redux/actions/employees'
import {useDispatch} from 'react-redux'
import {setCurrentEmployeeImage} from "../../redux/actions/employees"

export default function FileUpload() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [file, setFile] = useState('')
  const [fileName, setFileName] = useState('Download avatar')

  const onChange = (e) => {
	setFile(e.target.files[0])
	setFileName(e.target.files[0].name)
  }

  const onclickSetImg = () => {
    dispatch(setCurrentEmployeeImage(fileName)) 
  }

  const onSubmit = (e) => {
	const formData = new FormData()
    formData.append("file", file)
    formData.append("fileName", fileName)
	e.preventDefault()
	dispatch(addImg({formData}))
	setFileName('Download avatar')
  }

  return ( 
  <Fragment>
  		<form onSubmit={onSubmit}>
                <label className={classes.lableAvatar} htmlFor="avatar">{fileName} </label>  
                <TextField
				    className={classes.inputAddUpdateFormAvatar}
                    id="avatar"
                    variant="outlined"
                    type="file"
					onChange={onChange}
                />
				<input 
        onClick={onclickSetImg}
        type="submit"
			  value="upload"
        className={classes.addUpdateButton}
        />
	  </form>
	  </Fragment>
  );

  	
      
}