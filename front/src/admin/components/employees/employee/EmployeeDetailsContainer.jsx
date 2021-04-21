import EmployeeDetails from './EmployeeDetails'
import {useState} from 'react'
import useStyles from './employeeStyles'
import {deleteEmployee} from '../../../redux/actions/employees'
import {updateEmployee} from '../../../redux/actions/employees'
import {useDispatch, useSelector} from 'react-redux'
import useInput from '../../utils/hooks/useInput';

export default function EmployeeDetailsContainer ({employee}) {
    const dispatch = useDispatch()
    const employeeId = employee._id
	const  avatarName  = useSelector((state)=>state.currentEmployeeImage.currentEmploeeImage)
    const [open, setOpen] = useState(false)
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
            avatar: avatarName,
            name: name.value, 
            surname: surname.value, 
            position: position.value,
            skills: skills.value,
            expiriense: expiriense.value, 
            dateStartWorking: dateStartWorking.value,
            info: info.value,
        }))}

	return (
		<EmployeeDetails employee={employee}
		open={open}
		handleOpen={handleOpen}
		handleClose={handleClose}
		onClickDeleteEmployee={onClickDeleteEmployee}
		onClickUpdateEmployee={onClickUpdateEmployee}
		name={name}
    	surname={surname}
    	position={position}
    	skills={skills}
    	expiriense={expiriense}
    	dateStartWorking={dateStartWorking}
    	info={info}
		/>
	)
}