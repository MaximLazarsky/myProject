import Clients from "./Clients"
import {useSelector} from "react-redux"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {addNewClient} from "../../redux/actions/clients"


export default function ClientsContainer() {
const {clients} = useSelector((state) => state.data.data)
const dispatch = useDispatch()
const [open, setOpen] = useState(false);
const [name, setName] = useState('')
const [surname, setSurname] = useState('')
const [email, setEmail] = useState('')

const toggleOpen = () => {
    setOpen(!open);
  };
  
const onClickAddClient = () => {
	dispatch(addNewClient({name, surname, email}))
	toggleOpen()
	}

return <Clients clients={clients}
open={open}
toggleOpen={toggleOpen}
onClickAction={onClickAddClient}
setName={setName}
setSurname={setSurname}
setEmail={setEmail}
/>}