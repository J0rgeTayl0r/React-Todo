import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
    
    return (
        
        <div>
            {props.todoItemList.map(todo => {
                return (
                    
                    <Todo
                        todoItemList={props.todoItemList}
                        toggleCompleted={props.toggleCompleted}
                        todo={todo}
                    />
                )})}
            
        </div>
        
    )
    
}
