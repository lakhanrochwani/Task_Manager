import React,{useContext} from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from "./Task";

const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    return (
        <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map(task => {
            return <Task title={task.title} id={task.id} key={task.id}/>;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
    )
}

export default TaskList;
