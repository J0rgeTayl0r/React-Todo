import React from 'react'


const TodoForm = (props) => {
    return (
        <form>
            <input
                className='form'
                type='text'
                value={props.inputText}
                placeholder='Whats todays plan?'
                onChange={props.handleChanges}
                name='inputText'
            />
            <button className='btn-add'
                    onClick={props.addNewItem}           
            >Add Something</button>

            <button
                className='btn-rmv'
                onClick={props.removeSelected}
            >Remove it</button>
        </form>
    )
}

export default TodoForm;