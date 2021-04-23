import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: "100%",
	marginBottom: "15px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
	
  },
}));

export default function SelectEmployee({inputLabel, employees, handleChangeEmployeeId}) {
  const classes = useStyles();

  return (
    <div>
      
      <FormControl variant="outlined" size="small" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple" >{inputLabel}</InputLabel>
        <Select
          native
          onChange={handleChangeEmployeeId}
          label={inputLabel}
        >
			<option value="" ></option>
      
      {employees.map((employee) => <option value={employee._id} key={employee._id}>{employee.employeeName} {employee.employeeSurname}</option>)}
     
        </Select>
      </FormControl>
    </div>
  );
}