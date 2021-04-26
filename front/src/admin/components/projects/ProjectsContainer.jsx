import Projects from './Projects'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {setCurrentProject} from '../../redux/actions/projects'


export default function ProjectsContainer () {
	const {projects} = useSelector((state)=>state.data.data)
	const history = useHistory()
	const dispatch = useDispatch()

	const onClictRedirectAndSetCurrentProject = () => {
		dispatch(setCurrentProject(""))
		history.push('/admin/projects/createProject')
	}
	
	return (
		<Projects projects={projects} 
		onClictRedirectAndSetCurrentProject={onClictRedirectAndSetCurrentProject}
		/>
	)
}