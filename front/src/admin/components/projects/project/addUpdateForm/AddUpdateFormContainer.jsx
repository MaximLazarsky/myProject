import {useState} from 'react'
import AddUpdateForm from './AddUpdateForm'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function AddUpdateFormComtainer() {
	const history = useHistory()
	const {clients} = useSelector((state)=>state.data.data)
	const {employees} = useSelector((state)=>state.data.data)
	const [clientId, setClientId] = useState('')
	const [employeeId, setEmployeeId] = useState('')
	const [isActive, setIsActive] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false)

  	const toggleCheckedIsActive = () => setIsActive((isActive) => !isActive);
   	const toggleCheckedIsSuccess = () => setIsSuccess((isSuccess) => !isSuccess)
   	const onClickButton = () => history.push('/admin/projects')
	const handleChangeClientId = (event) => setClientId(event.target.value)
    const handleChangeEmployeeId = (event) => setEmployeeId(event.target.value)


	return (
		<AddUpdateForm clients={clients}
		employees={employees}
		handleChangeClientId={handleChangeClientId}
		handleChangeEmployeeId={handleChangeEmployeeId}
		isActive={isActive}
		isSuccess={isSuccess}
		toggleCheckedIsActive={toggleCheckedIsActive}
		toggleCheckedIsSuccess={toggleCheckedIsSuccess}
		onClickButton={onClickButton}
		/>
	)
}