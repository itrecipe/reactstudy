import './App.css';
import Hello from './component/Hello'; //만든 컴포넌트 경로를 적어준다.
import Welcome from './component/Welcome'

//모든 컴포넌트(함수)는 대문자로 시작한다.
function App() {
 return <div className='App'>
  <Hello /> {/*이렇게 self close 해주는게 좋다.*/}
  <Hello />
  <Hello />
  <Welcome />
 </div>;
 
}

export default App;
