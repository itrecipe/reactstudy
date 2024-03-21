import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';

ReactDOM.render(
  //작성한 Context의 Provider로 글로벌 State를 다루기 위해 컴포넌트를 감싼다.
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
  );


