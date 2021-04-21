import ProjectDetails from './ProjectDetails'
import {useSelector} from 'react-redux'

export default function ProjectDetailsContainer({project}) {
	const {clients} = useSelector((state) => state.data.data)
	const clientId = project.client
	const indexCurrentClient = clients.map(function(client) { return client._id; }).indexOf(clientId)
	const currentClient = clients[indexCurrentClient]
	console.log("CURRENT", currentClient)

	return (
		<ProjectDetails project={project} currentClient={currentClient}/>
	)
}