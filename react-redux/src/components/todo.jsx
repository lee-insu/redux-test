import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreaters } from '../store';

const Todo = ({text,deleteClick,id}) => {
    return (
        <li>
            <Link to={`/${id}`}>
            {text}
          <button onClick={deleteClick }>del</button>
          </Link>
       </li>
    );
};

const mapDispatchToProps = (dispatch,props) => {
    return {
        deleteClick:() => dispatch(actionCreaters.deleteToDo(props.id))
    }
}


export default connect(null,mapDispatchToProps)(Todo);