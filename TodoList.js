import React from 'react';
import {connect} from 'react-redux';
import { deleteTodo as ActionDeleteTodo, deleteAllTodo as ActionDeleteAllTodo} from './actions/TodoActions';

class TodoList extends React.Component{
    
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props);
    }

    render () {
        return (
            <>
                <table border="2">
                    <tr>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                    {this.props.todo.map( (val,index) => {
                        return (
                            <>
                                <tr>
                                    <td>{val}</td>
                                    <td><button onClick={() => {this.props.deleteTodo(index)}}>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}
                </table>
                <button onClick={this.props.deleteAll}>Delete All</button>
            </>
        )
    }
}

const UseSelector = (state) => {  // also called useSelector()
    return state;
}

const UseDispatch = (dispatch) => {
    return {
        deleteTodo: (indexToDelete) => dispatch(ActionDeleteTodo(indexToDelete)),
        deleteAll: () => dispatch(ActionDeleteAllTodo())
    }
}

export default connect(UseSelector, UseDispatch)(TodoList);