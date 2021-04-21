import Project from './Project'
import { useState } from 'react'

export default function ProjectContainer({project}) {
	const [isOpenEmployeeItem, setIsOpenEmployeeItem] = useState(false)
    const onEployeesItemClick = () => setIsOpenEmployeeItem(!isOpenEmployeeItem)
	

	return (
		<Project project={project} isOpenEmployeeItem={isOpenEmployeeItem} onEployeesItemClick={onEployeesItemClick}/>
	)
}