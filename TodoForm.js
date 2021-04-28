import React from 'react';
import {connect} from 'react-redux';
import {changeTitleAction, AddTodo as actionAddTodo} from './actions/TodoActions';

class TodoForm extends React.Component{
    
    constructor(props) {
        super(props);
    }

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(e.target.todo.value);
    }

    render () {
        return (
            <>
                <form onSubmit={this.addTodo}>
                    <input type="text" placeholder="Add todo" name="todo" />
                    <button>Add todo</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {  // also called useSelector()
    return state;
}

const mapDispatchToProps = (dispatch) => {  // also called useDispatch()
    return {
        addTodo: (val) => dispatch(actionAddTodo(val)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoForm);