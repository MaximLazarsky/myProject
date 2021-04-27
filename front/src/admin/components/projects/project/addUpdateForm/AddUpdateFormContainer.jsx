import {useState} from 'react'
import AddUpdateForm from './AddUpdateForm'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {addNewProject, updateProject, setCurrentProject} from '../../../../redux/actions/projects'
import useInput from '../../../utils/hooks/useInput'

export default function AddUpdateFormComtainer() {
	const history = useHistory()
	const dispatch = useDispatch()
	const {clients} = useSelector((state)=>state.data.data)
	const {employees} = useSelector((state)=>state.data.data)
	const {currentProject} = useSelector((state)=>state)
	const clientId = useInput(!!currentProject ? currentProject.client._id : '')
	const projectName = useInput(!!currentProject ? currentProject.projectName : '')
	const task = useInput(!!currentProject ? currentProject.task : '')
	const skills = useInput(!!currentProject ? currentProject.skills : '')
	const discription = useInput(!!currentProject ? currentProject.discription : '')
	const startDate = useInput(!!currentProject ? currentProject.dateStartWorking : '')
	const completionDate = useInput(!!currentProject ? currentProject.dateStopWorking : '')
	const projectLink = useInput(!!currentProject ? currentProject.linkProdaction : '')
	const platform = useInput(!!currentProject ? currentProject.platform : '')
	const earned = useInput(!!currentProject ? currentProject.earned : '')
	const employeeId = useInput(!!currentProject ? currentProject.employee : '')
	const [isActive, setIsActive] = useState(!!currentProject ? currentProject.isActive : false)
	const [isSuccess, setIsSuccess] = useState(!!currentProject ? currentProject.isSuccess : false)

	const toggleCheckedIsActive = () => setIsActive((isActive) => !isActive);
   	const toggleCheckedIsSuccess = () => setIsSuccess((isSuccess) => !isSuccess)
	const onClickButtonRedirect = () => history.push('/admin/projects')

	console.log("clientId.value", clientId.value)

	const onClickAddProject = () => {
		if (!!currentProject) {
			dispatch(updateProject({
				projectId: currentProject._id,
				projectName: projectName.value,
				task: task.value,
				skills: skills.value,
				discription: discription.value,
				startDate: startDate.value,
				completionDate: completionDate.value,
				imgs: [],
				projectLink: projectLink.value,
				isActive,
				isSuccess,
				earned: earned.value,
				platform: platform.value,
			}))
			dispatch(setCurrentProject(""))
		} else {
			dispatch(addNewProject({
				clientId: clientId.value,
				projectName: projectName.value,
				task: task.value,
				skills: skills.value,
				discription: discription.value,
				startDate: startDate.value,
				completionDate: completionDate.value,
				imgs: [],
				projectLink: projectLink.value,
				isActive,
				isSuccess,
				earned: earned.value,
				platform: platform.value,
				employeeId: employeeId.value,
			}))
		}
        onClickButtonRedirect() 
    }

	const onClickBackButton = () => dispatch(setCurrentProject(""))
	
	return (
		<AddUpdateForm clients={clients}
		employees={employees}
		clientId={clientId}
		projectName={projectName}
		task={task}
		skills={skills}
		discription={discription}
		startDate={startDate}
		completionDate={completionDate}
		projectLink={projectLink}
		platform={platform}
		earned={earned}
		employeeId={employeeId}
		isActive={isActive}
		isSuccess={isSuccess}
		toggleCheckedIsActive={toggleCheckedIsActive}
		toggleCheckedIsSuccess={toggleCheckedIsSuccess}
		onClickAddProject={onClickAddProject}
		currentProject={currentProject}
		onClickBackButton={onClickBackButton}
		/>
	)
}