import React from 'react';
import {Fragment} from 'react';
import {TextField, Button} from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import useStyles from '../addUpdateFormStyles';
import { ToastContainer, toast } from 'react-toastify';


export default function ImagesUpload({src,
  onSubmit,
  fileName,
  onChange,
  onclickSetImg
}) {
  const classes = useStyles();

  return ( 
  <Fragment>
    {/* {src ? <div className={classes.uploaded}> 
      <img className={classes.uploadedImg} src={src}  alt="img"/>
    </div> 
    : <PersonOutlineIcon className={classes.uploadedImg} src={"https://via.placeholder.com/150"} alt="img"/>
    } */}
  	<form onSubmit={onSubmit}>
      <div className={classes.uploadImgWrap}>
        <label className={classes.lableAvatar} htmlFor="avatar">{fileName} </label>  
        <input className={classes.inputAddUpdateFormAvatar}
          id="avatar"
          variant="outlined"
          type="file"
          required multiple
          accept=".jpg, .jpeg, .png"
          onChange={onChange}
        />
        <Button variant="outlined" 
          color="primary"
          onClick={onclickSetImg}
          type="submit"
          value="upload"
          className={classes.uploadButton}
        >
          Add avatar
        </Button>
        <ToastContainer className={classes.toastContainer}
        position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
      </div>      
	  </form>
	</Fragment>
  )
}