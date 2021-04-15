import Employees from './Employees'
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'

export default function EmployeesConteiner() {
    const { employees } = useSelector((state)=>state.data.data)
    const history = useHistory()
    // const onClickPushAddclient = () => {
    //     history.push("/admin/employees/add_employee")
    // }

    return <Employees employees={employees} />
}