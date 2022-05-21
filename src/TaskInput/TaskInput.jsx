import './TaskInput.css';
import React, { useState } from 'react';
import propTypes from 'prop-types';

function TaskInput(props) {
    const [userInput, setUserInput ] = useState('');
    const inputRef = React.createRef();
    const canSubmit = userInput.trim().length === 0;

    function handleChange(e) {
        setUserInput(e.currentTarget.value)
    }

    function handleCreate(e) {
        e.preventDefault();
        props.addTask(userInput);
        setUserInput('');
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={handleCreate}>
            <div>
                <input type='text' className="task-input" ref={inputRef} value={userInput} onChange={handleChange}  placeholder="Enter a new task" />
                <button type='submit' className="task-input-btn" onClick={handleCreate} disabled={canSubmit}>Create</button>
            </div>
        </form>
    )
}

TaskInput.propTypes = {
    addTask: propTypes.func.isRequired
}

export { TaskInput };