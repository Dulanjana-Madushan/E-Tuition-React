
import { makeStyles } from '@mui/styles';
import TeacherNavbar from './TeacherNavbar';
//import TeacherDrawer from './TeacherDrawer';
import TeacherHome from './TeacherHome';
//import { useState } from 'react';

const useStyles = makeStyles((theme) => ({}));

const Main = () => {
    const Classes = useStyles();
    return(
    <div>
        <TeacherNavbar/>
        <TeacherHome path='/home'/>
    </div>
    

    )  
};  
    
export default Main;