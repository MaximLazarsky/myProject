import EmployeeContainer from './employee/EmployeeContainer'
import useStyles from './employeesStyles'
import {Typography, Button} from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AddUpdateEmployeeForm from './addUpdateEmployeeForm/AddUpdateEmployeeForm'


export default function Employees({employees,
    handleOpen,
    handleClose,
    open,
    name,
    surname,
    position,
    skills,
    expiriense,
    dateStartWorking,
    info,
    onClickAddEmloyee}) {
    const classes = useStyles()

    return(
        <div className={`container ${classes.employeesContainer}`}>
            <div className={classes.linkButtonPosition}>
              
            <Typography variant="h4" color="primary" className={classes.title}> List of Employees: </Typography>
            <Button className={classes.linkButtonStyles} 
            color="primary" 
            variant="outlined" 
            endIcon={<AccessibilityNewIcon />} 
            onClick={handleOpen}>  
                    add employee
            </Button>
            </div>
            <div>
                {employees.map((employee)=> <EmployeeContainer key={employee._id} employee={employee}/>)}
            </div>
            <AddUpdateEmployeeForm buttonName={"Add employee"} 
            open={open} 
            onOpen={handleOpen} 
            onClose={handleClose} 
            name={name}
            surname={surname}
            position={position}
            skills={skills}
            expiriense={expiriense}
            dateStartWorking={dateStartWorking}
            info={info}
            onClickAction={onClickAddEmloyee}
            />
        </div>
    )
}