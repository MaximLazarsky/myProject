import {Paper} from '@material-ui/core';
import useStyles from './employeeStyles'
import EmployeeTitle from "./EmployeeTitle"
import EmployeeDetailsContainer from "./EmployeeDetailsContainer";

export default function Employee({employee, isOpenEmployeeItem, onEployeesItemClick}) {
    const classes = useStyles()
    return (
        <Paper className={classes.employeeItem}>
            <EmployeeTitle employee={employee} onEployeesItemClick={onEployeesItemClick} isOpenEmployeeItem={isOpenEmployeeItem} />
            { isOpenEmployeeItem && <EmployeeDetailsContainer employee={employee}/>}
        </Paper>
    )
}