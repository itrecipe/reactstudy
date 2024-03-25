import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', "#12b886", '#228ae6'];

class App extends Component {

  id = 4; //이미 0, 1, 2가 이미 존재하기 때문에 그래서 3으로 설정한다.

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: 'JSX 사용 하기', checked: true },
      { id: 2, text: '라이프 사이클 이해', checked: false },
      { id: 3, text: '컴포넌트 사용하기', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 변경될 값
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '', //인풋을 비우고, concat을 사용하여 배열에 추가한다.
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  }

  handleKeyPress = (e) => {

    if (e.key === 'Enter') {
      this.handleCreate();
    }

  }

  // 체크 (활성화 & 비활성화)
  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓴다.
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }
    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    // 현 상태에서 todos 배열을 가져온다.
    const { todos } = this.state;
    // this.setState를 사용해 상태를 업데이트 한다.
    this.setState({
      /*  todos 배열을 새로운 배열로 대체한다. 
      대체할때 특정 id값과 일치하지 않는 todo만 필터링해서 새 배열을 생성한다. */
      todos: todos.filter(todo => todo.id !== id)
      /*  filter 메소드는 필요없는 문자나 문자열을 걸러내거나,
          걸러낸것을 새로운 배열을 반환해줄때 사용한다 */
    })
  }

  handleUpdate = (id, text) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const updatedTodos = [
      ...todos.slice(0, index), //업데이트 대상 아이템 이전의 아이템들
    {
      ...todos[index],
      text : text //새로운 텍스트로 업데이트
    },
      ...todos.slice(index + 1) //업데이트 대상 아이템 이후의 아이템들
    ];
    this.setState({
      todos: updatedTodos
    })
  }
  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }
  
  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}
        />
      )}
        palette={(
          <Palette colors={colors} selected={color} onSelect={handleSelectColor} />
        )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    );
  }
}

export default App;