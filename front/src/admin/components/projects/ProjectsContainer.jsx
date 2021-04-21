import Projects from './Projects'
import {useSelector} from 'react-redux'

export default function ProjectsContainer () {
	const {projects} = useSelector((state)=>state.data.data)

	console.log({projects})

	return (
		<Projects projects={projects}/>
	)
}