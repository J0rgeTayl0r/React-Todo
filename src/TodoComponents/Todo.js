import React from 'react';

const Todo = props => {
    return (
        <div
            style={props.todo.completed ? {textDecoration:'line-through'} : null}
            onClick={() => { props.toggleCompleted(props.todo.id) }}
            className={props.todo.completed ?
                'completed' : 'list-item'}
        >
            {props.todo.todo}
        </div>
    )
};
export default Todo;