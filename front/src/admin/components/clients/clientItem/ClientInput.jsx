import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './clientItemStyles';

export default function BasicTextFields({clientParams, onChange, defaultValue}) {
  const classes = useStyles();

  return (
    <form className={classes.input} noValidate autoComplete="off">
      <TextField id="outlined-basic" 
      defaultValue={defaultValue} 
      label={clientParams} 
      variant="outlined" 
      onChange={onChange} />
    </form>
  );
}