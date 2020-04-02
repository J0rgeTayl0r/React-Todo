import React from 'react';

const Todo = props => {
    return (
        <div
            onClick={() => { props.toggleCompleted(props.todo.id) }}
            className={props.todo.completed ?
                'completed' : 'list-item'}
        >
            {props.todo.todo}
        </div>
    )
};
export default Todo;