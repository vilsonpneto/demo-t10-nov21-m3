import{Switch, Route} from "react-router-dom"
import Home from "../components/Pages/Home";
import Siginup from "../components/Pages/Signinup";
import UserList from "../components/Pages/UserList";
import LandingPage from "../components/Pages/LandingPage";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route path="/home/:nome?" component={Home} />
			<Route path="/siginup" component={Siginup} />
			<Route path="/users">
				<UserList />
			</Route>
		</Switch>
	);
};

export default Routes;
