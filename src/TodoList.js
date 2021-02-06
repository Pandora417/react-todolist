import React from 'react';
import TodoItem from './TodoItem';
class TodoList extends React.Component {
  // ES6 构造器
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    // 使用bind(this) 会影响性能，这么写能提高性能
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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
        {/* <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} /> */}
        <input value={this.state.inputValue} onChange={this.handleInputChange} />
        <button onClick={this.handleAdd}>add</button>
        <ul>
          {
            // 不使用组件
            // this.state.list.map((item, index) =>
            //   <li onClick={this.handleDelete.bind(this, index)} key={index}>{item}</li>
            // )
            this.state.list.map((item, index) =>
              <TodoItem deleteItem={this.handleDelete} key={index} content={item} index={index} />
            )
          }
        </ul>
      </div>
    );
  }
}
export default TodoList;
