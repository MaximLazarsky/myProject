import {TextField, Button, Avatar} from '@material-ui/core';
import useStyles from "./addUpdateEmployeeFormStyles"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

export default function AddUpdateEmployeeForm({employee}) {
    const classes = useStyles()
    return(
    <form className={classes.addUpdateForm}>
        <Avatar alt="avatar" className={classes.employeeAvatar}>
            <PersonOutlineIcon/>
        </Avatar>
        <TextField
            className={classes.inputAddUpdateForm}
            label="Avatar"
            variant="outlined"
            type="file"
        />
        <TextField
            className={classes.inputAddUpdateForm}
            label="Name"
            variant="outlined"
        />
        <TextField
            className={classes.inputAddUpdateForm}
            label="Surname"
            variant="outlined"
        />
        <TextField
            className={classes.inputAddUpdateForm}
            label="Position"
            variant="outlined"
        />
        <TextField
            className={classes.inputAddUpdateForm}
            label="Expiriense"
            variant="outlined"
        />
        <Button variant="outlined" color="primary" className={classes.addUpdateButton}> 
           {employee ? "update employee" : "add employee"}
        </Button>
    </form>
    )
}