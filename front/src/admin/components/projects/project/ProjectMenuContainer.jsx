import ProjectMenu from './ProjectMenu'
import {deleteProject} from '../../../redux/actions/projects'
import {useDispatch} from 'react-redux'

export default function ProjectMenuContainer ({onClickCreateProjectredirection, projectId}) {
	const dispatch = useDispatch()
	const onClickDeleteProject = () => {
		dispatch(deleteProject(projectId))
	}

	return (
		<ProjectMenu onClickCreateProjectredirection={onClickCreateProjectredirection}
		onClickDeleteProject={onClickDeleteProject}
		/>
	)
}