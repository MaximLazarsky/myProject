import useStyles from './employeeStyles'
import {IconButton, Avatar} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EmployeeProjectsList from './employeeProjectsList/EmployeeProjectsList'

export default function EmployeeDetails({employee}) {
    const classes = useStyles()
    return(
        <div className={classes.employeeItemDetails}>
                <div className={classes.employeeItemDetailsContent}>
                    <Avatar src={`${employee.avatar}`} alt="avatar" className={classes.employeeAvatar}/>
                    <div className={classes.employeeItemDetailsContentTetx}>
                        <div className={classes.employeeItemDetailsContentInfo}>
                            <span> information: </span>
                            {` ${employee.info}`}
                        </div>
                        <div className={classes.employeeItemDetailsContentSkills}>
                            <span> skills: </span>
                            {` ${employee.skills}`}
                        </div>
                        <div className={classes.employeeItemDetailsContentExpiriense}>
                            <span> expiriense: </span>
                            {`more than ${employee.expiriense}`}
                        </div>
                    </div>
                    <EmployeeProjectsList projects={employee.projects}/>
                </div>
                <div className={classes.emplaoyeeButtons}>
                    <IconButton color="primary">
                        <EditIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
    )
}