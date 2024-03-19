import React, { Component } from "react";


class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props //비어있는 컴포넌트 생성, 3가지의 props를 받아올것

        return (
            <div>
                <TodoItemList text="Java" />
                <TodoItemList text="Spring" />
                <TodoItemList text="React" />
            </div>
        )
    }
}
export default TodoItemList