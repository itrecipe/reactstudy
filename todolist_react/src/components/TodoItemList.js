import React, { Component } from "react";
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onUpdate, onRemove } = this.props; //비어있는 컴포넌트 생성, 3가지의 props를 받아올것

        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    color={color}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
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