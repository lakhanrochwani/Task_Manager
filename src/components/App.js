import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import '../App.css';
import TaskListContextProvider  from '../context/TaskListContext';

const App = () => {
 return (
    <TaskListContextProvider>
    <div className='container'>
        <div className='app-wrapper'>
          <Header/>  
            <div className='main'>
                <TaskForm/>
                <TaskList/>
            </div>
        </div>
      
    </div>
   </TaskListContextProvider>      
           
 )
}

export default App
