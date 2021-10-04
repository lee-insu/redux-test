import React from 'react';
import { connect } from 'react-redux';

const Detail = ({todos}) => {
    return (
        <div>
            {todos.text}
            {todos.id}
        </div>
    );
};

const mapStateToProps = (state,props) => {
    const {match:{params:{id}}} = props;
    return {todos:state.find(todo => todo.id === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);