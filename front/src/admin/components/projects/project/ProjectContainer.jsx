import Project from './Project'
import { useState } from 'react'
import {setCurrentProject} from '../../../redux/actions/projects'
import {useDispatch} from 'react-redux'

export default function ProjectContainer({project}) {
	const dispatch = useDispatch()
	const [isOpenEmployeeItem, setIsOpenEmployeeItem] = useState(false)
    const onEployeesItemClick = () => setIsOpenEmployeeItem(!isOpenEmployeeItem)
	const onClickOpenDetailsAndSetProject = () => {
		onEployeesItemClick()
		dispatch(setCurrentProject(project))
	}

	return (
		<Project project={project} isOpenEmployeeItem={isOpenEmployeeItem} onEployeesItemClick={onClickOpenDetailsAndSetProject}/>
	)
}