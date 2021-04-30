import React from 'react';
import {Fragment} from 'react';
import {TextField, Button} from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import useStyles from '../addUpdateFormStyles';
import { ToastContainer, toast } from 'react-toastify';

export default function ImagesUpload({file,
  onSubmit,
  onChange,
  onclickSetImg,
}) {
  const classes = useStyles();
  return ( 
  <Fragment>    
  	<form onSubmit={onSubmit}>
      <div className={classes.uploadImgWrap}>
        <label className={classes.lableAvatar} 
        htmlFor="images">
          {file.length ? `Number of uploaded photos ${file.length}` : "Upload project photos"} 
        </label>  
        <input className={classes.inputAddUpdateFormImg}
          id="images"
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
          {file.length === 1 ? 'Add project photo' : 'Add project photos'}
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