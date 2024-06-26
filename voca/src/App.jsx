import './App.css';
import Hello from './component/Hello'; //만든 컴포넌트 경로를 적어준다.

/* React JS #3 컴포넌트 & JSX
  - React 특징
  react로 만든 페이지는 컴포넌트로 구성되어 있음
*/

/* 모든 컴포넌트(함수)는 대문자로 시작한다.
function App() {
  return <div className='App'>
   <Hello /> <= 이렇게 self close 해주는게 좋다.
   <Welcome />
   <Hello />
   <Hello />
   <Hello /> <= 이렇게 한번 컴포넌트를 만들어두면 몇번이든 어디에서든 재사용이 가능하다!
   
  </div>;

 }
export default App;
*/

/* props 사용방법
function App() {
 return (
 <div className='App'>
  <h3>props : properties</h3>
  <Hello age={10}/> 
  <Hello age={20}/>
  <Hello age={30}/>
 </div>
 );
}
*/

export default App;
