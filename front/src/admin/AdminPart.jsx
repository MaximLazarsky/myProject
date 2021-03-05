import LoginAdmin from './pages/LoginAdmin'
import { Provider } from 'react-redux'
import {store} from './redux/reducer'

export default function AdminPart() {
    return (
        <Provider store={store}>
            <LoginAdmin />
        </Provider>
    )
}