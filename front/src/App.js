import AdminPartApp from "./admin/AdminPartApp";
import ClientPart from "./client/ClientPart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ClientPart} />
        <Route path="/admin" component={AdminPartApp} />
      </Switch>
    </Router>
  );
}

export default App;
