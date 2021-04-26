import ProjectDetails from './ProjectDetails'
import { useHistory } from 'react-router-dom'

export default function ProjectDetailsContainer({project}) {
	const history = useHistory()
	const clientInfo = project.client
	const onClickClientRedirection = () => history.push('/admin/clients')
	const onClickCreateProjectRedirection = () => history.push('/admin/projects/createProject')
	const projectId = project._id

	return (
		<ProjectDetails project={project} 
		clientInfo={clientInfo} 
		onClickClientRedirection={onClickClientRedirection}
		onClickCreateProjectredirection={onClickCreateProjectRedirection}
		projectId={projectId}
		/>
	)
}