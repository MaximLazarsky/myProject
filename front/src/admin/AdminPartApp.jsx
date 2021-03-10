import AdminPartContainer from './AdminPartContainer'
import { Provider } from 'react-redux'
import {store} from './redux/reducer'

export default function AdminPartApp() {

    return (
        <Provider store={store}>
            <AdminPartContainer/>
        </Provider>
    )
}