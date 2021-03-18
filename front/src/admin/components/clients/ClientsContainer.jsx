import Clients from "./Clients"
import {useSelector} from "react-redux"

export default function ClientsContainer() {
const {clients} = useSelector((state) => state.data.data)

return <Clients clients={clients}/>
}