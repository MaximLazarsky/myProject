import Employees from './Employees'
import { useSelector } from 'react-redux'

export default function EmployeesConteiner() {
    const { employees } = useSelector((state)=>state.data.data)

    console.log(employees)
    return <Employees employees={employees}/>
}