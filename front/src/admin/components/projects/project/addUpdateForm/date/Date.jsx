import React from 'react';
import Icon from "@material-ui/core/Icon";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import 'date-fns';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      // backgroundColor: '#fff',
      // // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      // borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: "space-between",
    padding: "0",
    minWidth: "500px",
    marginBottom: "15px",
    border: "none",
    outline: "none",
    '& .MuiInputBase-input': {
      color: 'rgb(118, 118, 118)',
    },
    '& .MuiInputBase-input': {
      padding: "10.4px 14px",
    },
    '& .MuiInput-underline': {
      
      border: "1px solid rgb(118, 118, 118)",
      borderRadius: "4px",
      outline: "none",
    },
    '& .MuiInput-underline:before': {
      border: "none",
      outline: "none",
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      border: "none",
      outline: "none",
    },
    '& .MuiInput-underline:hover': {
      border: "1px solid #000",
      outline: "none",
    },
    '& .MuiInput-underline:after': {
      border: "1px solid #3f51b5",
      outline: "none",
    },
    '& .MuiInput-underline.Mui-focused:after': {
      border: "1px solid #3f51b5",
      outline: "none",
      skale: "0"
    }
  },
  margin: {
    minWidth: "500px",
    
  }
}));

// 

const theme = createMuiTheme({
  
  palette: {
    // primary: green,
  },
});

export default function CustomizedInputs() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form className={classes.root} noValidate>
     
     
      <ThemeProvider theme={theme}>
        
       {/* <TextField
        id="date"
          className={classes.margin}
          label="ThemeProvider"
          variant="outlined"
          type="date"
          size="small"
          icon={<Icon>add_circle</Icon>}

          InputLabelProps={{
            shrink: true,
          }}
        /> */}
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify="space-around" >
        
        <KeyboardDatePicker
        className={classes.margin}
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>


      </ThemeProvider>
    
   
    </form>
  );
}


// import 'date-fns';
// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

// export default function MaterialUIPickers() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justify="space-around">
        
//         <KeyboardDatePicker
//           margin="normal"
//           id="date-picker-dialog"
//           label="Date picker dialog"
//           format="MM/dd/yyyy"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }