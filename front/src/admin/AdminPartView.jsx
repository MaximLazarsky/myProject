import "./main-admin-styles.css"
import LoginAdmin from "./pages/LoginAdmin"
import NavbarContainer from "./components/navbar/NavbarContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { adminRoutes } from "./routes"

export default function AdminPartView({isLogin}) {
    return (
            <main>
                { !isLogin ?
                <div className="container dispaly-flex-center">
                    <LoginAdmin/>
                </div> :
                <>
                    <Router>
                        <NavbarContainer />
                        <Switch>
                            {adminRoutes.map((el)=>{
                                return(
                                    <Route key={el.path} path={el.path} component={el.component} />
                                )
                            })}
                        </Switch>
                    </Router>
                </>
                }
            </main> 
    )
}