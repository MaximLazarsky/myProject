import {useState} from 'react'
import EmployeeContainer from './employee/EmployeeContainer'
import useStyles from './employeesStyles'
import {Typography, Button} from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AddUpdateEmployeeForm from './addUpdateEmployeeForm/AddUpdateEmployeeForm'
import {addNewEmployee} from '../../redux/actions/employees'
import {useDispatch, useSelector} from 'react-redux'
import useInput from '../../hooks/useInput';
import FileUpload from '../fileUpload/FileUpload'

export default function Employees({employees}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    const  avatarName  = useSelector((state)=>state.currentEmployeeImage.currentEmploeeImage)
    
    console.log("avatarName in Employee", avatarName)
    const [open, setOpen] = useState(false);
    const avatar = useInput('')
    const name = useInput('')
    const surname = useInput('')
    const position = useInput('')
    const skills = useInput('')
    const expiriense = useInput('')
    const dateStartWorking = useInput('')
    const info = useInput('')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onClickAddEmloyee = () => {

        
        dispatch(addNewEmployee({
            avatar: avatarName,
            name: name.value, 
            surname: surname.value, 
            position: position.value,
            skills: skills.value,
            expiriense: expiriense.value, 
            dateStartWorking: dateStartWorking.value,
            info: info.value,
        }))
        }

    return(
        <div className={`container ${classes.employeesContainer}`}>
            {/* <FileUpload /> */}
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
            avatar={avatarName}
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