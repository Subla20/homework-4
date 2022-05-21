import './Task.css';
import classNames from 'classnames';
import trash from '../trash.svg';

function Task({task, onRemove, onComplete}) {
    var taskClass = classNames('task-name', {'task-complete': task.isComplete});

    function handleChange(e) {
        if (e.target.checked) {
            onComplete(task.id);
        }
    }

    function handleRemove() {
        onRemove(task.id);
    }

    return (
        <div className="task">
            <input className="task-check" type="checkbox" checked={task.isComplete} onChange={handleChange} />
            <div className={taskClass}>{task.nameT}</div>
            <img className='trash' src={trash} alt="Remove Task" onClick={handleRemove} />
        </div>
    )
}

export { Task };