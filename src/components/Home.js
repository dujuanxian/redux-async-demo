import React, {Component} from 'react';
import {Link} from "react-router-dom";
import getTodos from "../actions/getTodos";
import {connect} from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Link to={{
            pathname: `/todos/${todo.id}`,
            state: {
              todo
            }
          }}>TODO {todo.id}</Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({todoReducer}) => ({
  todos: todoReducer.todos
});

const mapDispatcherToProps = (dispatch) => ({
  getTodos: () => dispatch(getTodos())
});


export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(Home);