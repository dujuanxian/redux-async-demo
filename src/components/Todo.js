import React, {Component} from 'react';

class Todo extends Component {
  render() {
    return (
      <div>
        {this.props.location.state.todo.title}
      </div>
    );
  }
}

export default Todo;