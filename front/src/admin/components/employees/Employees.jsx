import {useState} from 'react'
import EmployeeContainer from './employee/EmployeeContainer'
import useStyles from './employeesStyles'
import {Typography, Button} from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AddUpdateEmployeeForm from './addUpdateEmployeeForm/AddUpdateEmployeeForm'
import {addNewEmployee} from '../../redux/actions/employees'
import {useDispatch} from 'react-redux'

export default function Employees({employees}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [position, setPosition] = useState('')
    const [skills, setSkills] = useState('')
    const [expiriense, setExpiriense] = useState('')
    const [dateStartWorking, setDateStartWorking] = useState('')
    const [info, setInfo] = useState('')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onClickAddEmloyee = () => {
        dispatch(addNewEmployee({name, 
            surname, 
            position, 
            skills, 
            expiriense, 
            dateStartWorking,
            info,
        }))
        }

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
            setAvatar={setAvatar}
            setName={setName}
            setSurname={setSurname}
            setPosition={setPosition}
            setSkills={setSkills}
            setExpiriense={setExpiriense}
            setDateStartWorking={setDateStartWorking}
            setInfo={setInfo}
            onClickAction={onClickAddEmloyee}
            />
        </div>
    )
}