import React, { Component } from "react";
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props //비어있는 컴포넌트 생성, 3가지의 props를 받아올것

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        )

        return (
            <div>
                {todoList}
            </div>
        )
    }
}
export default TodoItemList