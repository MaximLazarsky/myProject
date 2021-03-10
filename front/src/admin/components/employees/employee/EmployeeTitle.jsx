import useStyles from './employeeStyles'
import {IconButton, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function EmployeeTitle({onEployeesItemClick, employee, isOpenEmployeeItem}) {
    const classes = useStyles()
    return(
        <div className={classes.employeeItemTitle} onClick={onEployeesItemClick}>
            <Typography variant="h6" className={classes.name}>
                {`${employee.employeeName} ${employee.employeeSurname}`}
            </Typography>
            <Typography variant="h6" className={classes.position}>
                {employee.employeePosition}
            </Typography>
            <IconButton color="primary" style={{transform: isOpenEmployeeItem ? "rotate(180deg)" : "", transition: "all 0.3s"}}>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    )
}
