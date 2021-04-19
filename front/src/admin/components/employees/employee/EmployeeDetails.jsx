import {useState} from 'react'
import useStyles from './employeeStyles'
import {IconButton, Avatar} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EmployeeProjectsList from './employeeProjectsList/EmployeeProjectsList'
import {deleteEmployee} from '../../../redux/actions/employees'
import {updateEmployee} from '../../../redux/actions/employees'
import {useDispatch} from 'react-redux'
import AddUpdateEmployeeForm from '../addUpdateEmployeeForm/AddUpdateEmployeeForm'
import useInput from '../../../hooks/useInput';

export default function EmployeeDetails({employee}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const employeeId = employee._id
    const [open, setOpen] = useState(false)

    const avatar = useInput('')
    const name = useInput(employee.employeeName)
    const surname = useInput(employee.employeeSurname)
    const position = useInput(employee.employeePosition)
    const skills = useInput(employee.skills)
    const expiriense = useInput(employee.expiriense)
    const dateStartWorking = useInput(employee.dateStartWorking)
    const info = useInput(employee.info)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onClickDeleteEmployee = () => dispatch(deleteEmployee(employeeId))
    
    const onClickUpdateEmployee = () => {
        dispatch(updateEmployee({
            employeeId,
            name: name.value, 
            surname: surname.value, 
            position: position.value,
            skills: skills.value,
            expiriense: expiriense.value, 
            dateStartWorking: dateStartWorking.value,
            info: info.value,
        }))}

    return(
        <div className={classes.employeeItemDetails}>
                <div className={classes.employeeItemDetailsContent}>
                    {!!employee.avatar ? <img src={`/uploads/${employee.avatar}`} alt="avatar" className={classes.employeeAvatar}/> : <Avatar src={`${employee.avatar}`} alt="avatar" className={classes.employeeAvatar}/> } 
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
                 avatar={avatar}
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