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

export default function EmployeeDetails({employee}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const employeeId = employee._id
    const [open, setOpen] = useState(false);


    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState(employee.employeeName)
    const [surname, setSurname] = useState(employee.employeeSurname)
    const [position, setPosition] = useState(employee.employeePosition)
    const [skills, setSkills] = useState(employee.skills)
    const [expiriense, setExpiriense] = useState(employee.expiriense)
    const [dateStartWorking, setDateStartWorking] = useState(employee.dateStartWorking)
    const [info, setInfo] = useState(employee.info)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log("employeeId", employeeId)
    const onClickDeleteEmployee = () => dispatch(deleteEmployee(employeeId))
    
    
    const onClickUpdateEmployee = () => {
        dispatch(updateEmployee({employeeId, name, surname, position, skills, expiriense, dateStartWorking, info}))}

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
                 setAvatar={setAvatar}
                 setName={setName}
                 setSurname={setSurname}
                 setPosition={setPosition}
                 setSkills={setSkills}
                 setExpiriense={setExpiriense}
                 setDateStartWorking={setDateStartWorking}
                 setInfo={setInfo}
                 onClickAction={onClickUpdateEmployee}
                 />
            </div>
    )
}