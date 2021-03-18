import "./main-admin-styles.css"
import LoginAdmin from "./pages/LoginAdmin"
import NavbarContainer from "./components/navbar/NavbarContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { adminRoutes } from "./routes"
import PropagateLoader from "react-spinners/PropagateLoader";
import EmpoloyeeAddUpdatePage from "./pages/EmployeeAddUpdatePage"

export default function AdminPartView({isLogin, isLoading}) {
    return (
            <main>
                { !isLogin ?
                <div className="container dispaly-flex-center">
                    <LoginAdmin/>
                </div> :
                <>
                    { !isLoading ?
                    <Router>
                        <NavbarContainer />
                        <Switch>
                            <Route path="/admin/employees/add_employee" component={EmpoloyeeAddUpdatePage} />
                            {adminRoutes.map((el)=>{
                                return(
                                    <Route key={el.path} path={el.path} component={el.component} />
                                )
                            })}
                        </Switch>
                    </Router> : 
                    <PropagateLoader color={"#3f51b5"} size={30} />
                    }
                </>
                }
            </main> 
    )
}