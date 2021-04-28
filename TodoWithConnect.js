import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


class TodoWithConnect extends React.Component{
    render () {
        return (
            <>
                <TodoForm /><br />
                <TodoList />
            </>
        )
    }
}

export default TodoWithConnect;