import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./Login";
// import SignUp from "./Register";
import TeacherNavbar from './TeacherNavbar';
// import TeacherHome from './TeacherHome';
// import PayTable from './PayTable';
// import useToken from './useToken';
// import { useState } from 'react'; 
// import ClassCard from './TeacherClassList';

function App() {

  // const [ token, setToken ] = useState(null);
  // setToken(localStorage.getItem('token'));

  // if(!token) {
// window.navigate("/login");
  //   return <Login/>
  // }

  return (
    <Router>
      <TeacherNavbar/>
          <Switch>
            <Route path='/login'>
              <Login/>
            </Route>
            {/*<Route path='/table'>
              <PayTable/>
            </Route> */}
          </Switch>
    </Router>
  );
}

export default App;
