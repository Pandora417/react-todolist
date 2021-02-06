import React from 'react';

class TodoList extends React.Component {
  // ES6 构造器
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  // 点击add按钮
  handleAdd () {
    this.setState({
      list: [...this.state.list, this.state.inputValue], // 展开运算符
      inputValue: ''
    })
  }

  // 点击行删除
  handleDelete (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  // 获取输入框的值
  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // render函数
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
