import React, { useState } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/todo';
import { actionCreaters } from '../store';

const Home = ({todos,addToDo}) => {

    const [text,setText] = useState('');

    const onChange = e => {
        const target = e.target.value;
        setText(target);
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        addToDo(text);
        setText('');
    
    }
    return (
        <div>
            <div>todo</div>
            <form onSubmit={onSubmit}>
                <input 
                type="text"
                value={text}
                onChange={onChange}
                />

                <input type="submit"/>
            </form>
            <ul>
                {todos.map(todo => <Todo {...todo} key={todo.id}/>)}
            </ul> 
        </div>
    );
};

const mapStateToProps = (state) => {
    return {todos:state}
} 

const mapDispatchToProps = (dis) => {
    return {
        addToDo:(text) => dis(actionCreaters.addToDo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);