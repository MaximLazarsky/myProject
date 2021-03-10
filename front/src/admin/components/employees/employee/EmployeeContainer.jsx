import Employee from './Employee'
import { useState } from 'react'

export default function EmployeesConteiner({employee}) {

    const [isOpenEmployeeItem, setIsOpenEmployeeItem] = useState(false)
    const onEployeesItemClick = () => setIsOpenEmployeeItem(!isOpenEmployeeItem)

    return <Employee employee={employee} isOpenEmployeeItem={isOpenEmployeeItem} onEployeesItemClick={onEployeesItemClick} />
}