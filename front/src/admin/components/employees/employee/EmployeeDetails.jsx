import useStyles from './employeeStyles'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {IconButton, Avatar} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EmployeeProjectsList from './employeeProjectsList/EmployeeProjectsList'
import AddUpdateEmployeeForm from '../addUpdateEmployeeForm/AddUpdateEmployeeForm'

export default function EmployeeDetails({employee,
    open,
    handleOpen,
    handleClose,
    onClickDeleteEmployee,
    onClickUpdateEmployee,
    name,
    surname,
    position,
    skills,
    expiriense,
    dateStartWorking,
    info,
}) {
    const classes = useStyles()
    
    return(
        <div className={classes.employeeItemDetails}>
            <div className={classes.employeeItemDetailsContent}>
                {!!employee.avatar ? <img src={`/uploads/${employee.avatar}`} 
                                        alt="avatar" 
                                        className={classes.employeeAvatar}/> 
                :   <Avatar className={classes.employeeAvatar}>
                        <PersonOutlineIcon src={`${"https://via.placeholder.com/150"}`} 
                            alt="avatar" 
                            className={classes.personIcon}/>
                    </Avatar>  
                }
                <div className={classes.employeeItemDetailsContentTetx}>
                    <div className={classes.employeeItemDetailsContentInfo}>
                        <span> information: </span>
                        {` ${employee.info}`}
                    </div>
                    <div className={classes.employeeItemDetailsContentSkills}>
                        <span> skills: </span>
                        {` ${employee.skills}`}
                    </div>
                    <div className={classes.employeeItemDetailsContentSkills}>
                        <span> Date Start Working: </span>
                        {` ${employee.dateStartWorking}`}
                    </div>
                    <div className={classes.employeeItemDetailsContentSkills}>
                        <span> expiriense: </span>
                        {`more than ${employee.expiriense}`}
                    </div>
                </div>
                <EmployeeProjectsList projects={employee.projects}/>
            </div>
            <div className={classes.emplaoyeeButtons}>
                <IconButton color="primary" onClick={handleOpen}>
                    <EditIcon />
                </IconButton>
                <IconButton color="primary"
                onClick={onClickDeleteEmployee}
                >
                    <DeleteIcon />
                </IconButton>
            </div>
            <AddUpdateEmployeeForm buttonName={"Update employee info"}
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
                employee={employee}
                name={name}
                surname={surname}
                position={position}
                skills={skills}
                expiriense={expiriense}
                dateStartWorking={dateStartWorking}
                info={info}
                onClickAction={onClickUpdateEmployee}
                 />
        </div>
    )
}