import React, {Component} from 'react';
class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  handleItemClick () {
    const {deleteItem, index} = this.props
    deleteItem(index)
    // this.props.deleteItem(this.props.index)
  }
  render () {
    const {content} = this.props // ES6语法
    return (
      <div onClick={this.handleItemClick}>{content}</div>
      // <div onClick={this.handleItemClick}>{this.props.content}</div>
    )
  }
}

export default TodoItem;
