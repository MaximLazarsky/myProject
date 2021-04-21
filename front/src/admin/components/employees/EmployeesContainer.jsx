import Employees from './Employees'
import {addNewEmployee, setCurrentEmployeeImage} from '../../redux/actions/employees'
import {useDispatch, useSelector} from 'react-redux'
import useInput from '../utils/hooks/useInput';
import {useState} from 'react'

export default function EmployeesConteiner() {
    const { employees } = useSelector((state)=>state.data.data)
    const dispatch = useDispatch()
    const avatarName  = useSelector((state)=>state.currentEmployeeImage.currentEmploeeImage)
    const [open, setOpen] = useState(false);
    const name = useInput('')
    const surname = useInput('')
    const position = useInput('')
    const skills = useInput('')
    const expiriense = useInput('')
    const dateStartWorking = useInput('')
    const info = useInput('')
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        dispatch(setCurrentEmployeeImage(''))
    }

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
        dispatch(setCurrentEmployeeImage('')) 
    }

    return <Employees employees={employees}
    handleOpen={handleOpen}
    handleClose={handleClose}
    open={open}
    name={name}
    surname={surname}
    position={position}
    skills={skills}
    expiriense={expiriense}
    dateStartWorking={dateStartWorking}
    info={info}
    onClickAddEmloyee={onClickAddEmloyee}
    />
}