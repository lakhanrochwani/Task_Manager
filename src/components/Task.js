import React,{useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext';

const Task = (props) => {
    const {removeTask, findItem} = useContext(TaskListContext);
    return (
        <li className="list-item">
            <span>{props.title}</span>
            <div>
                <button className="btn-delete task-btn" onClick={() => {removeTask(props.id)}}>
                    <i className='fas fa-trash-alt'></i>
                </button>
                <button className='btn-edit task-btn' onClick={() => {findItem(props.id)}} >
                    <i className='fas fa-pen'></i>
                </button>
            </div>
        </li>
    )
}

export default Task
