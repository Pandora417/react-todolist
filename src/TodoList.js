import React from 'react';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }
  handleAdd () {
    this.setState({
      list: [...this.state.list, this.state.inputValue], // 展开运算符
      inputValue: ''
    })
  }

  handleDelete (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render () {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
        <button onClick={this.handleAdd.bind(this)}>add</button>
        <ul>
          {
            this.state.list.map((item, index) => <li onClick={this.handleDelete.bind(this, index)} key={index}>{item}</li>)
          }
        </ul>
      </div>
    );
  }
}
export default TodoList;
