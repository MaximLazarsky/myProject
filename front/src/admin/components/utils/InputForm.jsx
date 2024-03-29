import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './inputFormStyles';

export default function InputForm({onChange, defaultValue, lable, id}) {
  const classes = useStyles();

  return (
      <TextField id="outlined-basic" 
      className={classes.inputAddUpdateForm}
      defaultValue={defaultValue} 
      label={lable} 
      variant="outlined"
      size="small"
      onChange={onChange} 
      noValidate 
      autoComplete="off"
      id={id}/>
  );
}