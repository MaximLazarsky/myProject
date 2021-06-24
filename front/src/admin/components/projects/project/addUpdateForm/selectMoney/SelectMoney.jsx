import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
 
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: "0",
      width: '210.4px',
    },
  },
}));

export default function SelectMoney({currencies,
	handleChangeCurrency,
	currency,
}) {
  const classes = useStyles();
  

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
        <TextField
          id="outlined-select-currency"
          select
		      size="small"
          label={currency}
          value={currency}
          onChange={handleChangeCurrency}
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}