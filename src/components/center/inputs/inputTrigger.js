import React from 'react';
import NameInput from './name.input'
import TaskInput from './task.input';
import TaskDisplay from './task.display';
function InputTrigger({userid, username, loggedin, userTask}){
    if(loggedin === true && username === 'User'){
        return <NameInput userid={userid}/>;
    } else if(loggedin === true && username !== 'User' && userTask === undefined){
        return <TaskInput task={userTask}userid={userid}/>;
    } else if(loggedin === true && username !== 'User' && userTask != null){
        return <TaskDisplay task={userTask} userid={userid}/>;
    } else {
        return null;
    }
}
export default InputTrigger;