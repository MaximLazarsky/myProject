import EmployeeContainer from './employee/EmployeeContainer'
import useStyles from './employeesStyles'
import {Typography, Button} from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

export default function Employees({employees, onClickPushAddclient}) {
    const classes = useStyles()
    return(
        <div className={`container ${classes.employeesContainer}`}>
            <div className={classes.linkButtonPosition}>
            <Typography variant="h4" color="primary" className={classes.title}> List of Employees: </Typography>
            <Button className={classes.linkButtonStyles} color="primary" variant="outlined" endIcon={<AccessibilityNewIcon />} onClick={onClickPushAddclient}>  
                    add employee
            </Button>
            </div>
            <div>
                {employees.map((employee)=> <EmployeeContainer key={employee._id} employee={employee}/>)}
            </div>
                
        </div>
    )
}