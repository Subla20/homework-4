import './TaskPage.css';
import React from 'react';
import { TaskList } from '../TaskList';

class TaskPage extends React.PureComponent {
    render() {
        return (
            <div>
                <h1 className="task-head">Task List</h1>
                <TaskList />
            </div>
        );
    }
}

export { TaskPage };