import './App.css';

//모든 컴포넌트(함수)는 대문자로 시작한다.
function App() {
  const name="Tom"; //이름을 받아올 변수 name 생성
//네이버라는 객체를 생성 해준다.
  const naver = {
    name : "네이버",
    url : "https://naver.com",
  }

  //return 시작부분부터 끝부분까지 JSX
  return (
    //class는 JavaScript의 예약어이기 때문에 className으로 작성해야한다.
    <div className="App">
      <h1
      style={{ //style은 객체로 전달해줘야 한다.
        //속성값도 문자열로 적어줘야 한다.
        color: "red",
        //backgroundColor도 카멜케이스로 작성해야 한다.
        backgroundColor : "green",
      }}
      >
        {/* <p>{2 + 3}</p> p태그안에 감싸서 이렇게 작성해주면,
        숫자나 문자열은 잘 나오지만, boolean 타입이나 객체는 
        표현하지 못한다. */}
        Hello, {name}. <p>{2 + 3}</p> 
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
