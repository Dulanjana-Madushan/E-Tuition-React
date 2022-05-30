import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./Login";
// import SignUp from "./Register";
import TeacherNavbar from './TeacherNavbar';
import Main from './Main';
import TeacherHome from './TeacherHome';
import Chat from './Chat';
import Notification from './Notification';
import { makeStyles } from '@mui/styles';
import MaterialGrid from './ClassMaterials';
import MaterialUpload from './MaterialUpload';
import PayTable from './PayTable';

// import TeacherHome from './TeacherHome';
// import PayTable from './PayTable';
// import useToken from './useToken';
// import { useState } from 'react'; 
// import ClassCard from './TeacherClassList';


const useStyles = makeStyles({
  container:{
    display: "flex"
  }
});

function App() {

  // const [ token, setToken ] = useState(null);
  // setToken(localStorage.getItem('token'));

  // if(!token) {
// window.navigate("/login");
  //   return <Login/>
  // }

  const classes =useStyles();

  return (
    <div className={classes.container}>
    <Router>
      <TeacherNavbar />
          <Switch>
            <Route path='/' exact component={TeacherHome} />
            <Route path='/chat' component={Chat} />
            <Route path='/notification' component={Notification} />
            <Route path='/home/sinhala/classMaterials' component={MaterialUpload} />
            <Route path='/home/sinhala/announcements' component={MaterialUpload} />
            <Route path='/home/sinhala/payments' component={PayTable} />
            <Route path='/home/sinhala/studentList' component={MaterialUpload} />
            <Route path='/home/sinhala/addStudent' component={MaterialUpload} />
            <Route path='/home/sinhala/quiz' component={MaterialUpload} />
            <Route path='/home/sinhala' component={MaterialGrid} />
            
            {/*<Route path='/login'>
              <Login/>*\}
            </Route>
            {/*<Route path='/table'>
              <PayTable/>
            </Route> */}
          </Switch>
    </Router>
    </div>
  );
}

export default App;
