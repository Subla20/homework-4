import './TaskList.css';
import React, { useState } from 'react';
import { TaskInput } from '../TaskInput';
import { Task } from '../Task';
import relax from '../relax.svg';

function TaskList() {
    const [taskB, settask] = useState([]);
    const isEmpty = taskB.length === 0;

    function handleComplete(taskId) {
        let map = taskB.map((task) => {
            if (task.id !== taskId) {
                return task;
            }
            else {
                return {
                    ...task,
                    isComplete: true
                };
            }
        })
        setTimeout(() => handleRemove(taskId), 4000);
        settask(map);
    }

    function handleRemove(taskId) {
        let filter = taskB.filter((task) => task.id !== taskId);
        settask(filter);
    }

    function handleNewTask(taskName) {
        let newT = [...taskB];
        newT = [{id: taskB.length + 1, nameT: taskName, isComplete: false}, ...newT];
        settask(newT);
    }

    return (
        <>
            <TaskInput addTask={handleNewTask} />
            <div className="task-list">
                {taskB.map((task) => 
                    <Task key={task.id} task={task} onRemove={handleRemove} onComplete={handleComplete} />
                )}
            </div>
            
            {isEmpty && (
                <div className='empty-tasks'>
                    <img className='empty-picture' src={relax} alt="No tasks currently" />
                    <h4 className='empty-text'>No tasks yet!</h4>
                </div>
            )}
        </>
    )
}

export { TaskList };


