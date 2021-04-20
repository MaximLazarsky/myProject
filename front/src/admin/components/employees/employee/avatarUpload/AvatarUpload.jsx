import React from 'react';
import {Fragment} from 'react';
import {TextField, Button} from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import useStyles from '../../addUpdateEmployeeForm/addUpdateEmployeeFormStyles';
import AccessMessage from './AccessMessage'

export default function AvatarUpload({src,
  onSubmit,
  fileName,
  onChange,
  onclickSetImg
}) {
  const classes = useStyles();
 

  return ( 
  <Fragment>
    {src ? <div className={classes.uploaded}> 
      <img className={classes.uploadedImg} src={src}  alt="img"/>
    </div> 
    : <PersonOutlineIcon className={classes.uploadedImg} src={"https://via.placeholder.com/150"} alt="img"/>
    }
  	<form onSubmit={onSubmit}>
      <div className={classes.uploadImgWrap}>
        <label className={classes.lableAvatar} htmlFor="avatar">{fileName} </label>  
        <TextField className={classes.inputAddUpdateFormAvatar}
          id="avatar"
          variant="outlined"
          type="file"
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
        {/* <AccessMessage /> */}
      </div>      
	  </form>
	</Fragment>
  )
}