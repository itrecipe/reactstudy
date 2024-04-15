import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import './Login.scss';
import { auth } from "./firebase-config"

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email,setEmail]=useState("");
  const [password,setPw]=useState("");
  const [name,setName]=useState("")

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 또는 회원가입 처리
    if (isSignUp) {
      register()
      // 회원가입 처리
    } else {
      loginex();
      console.log(auth.currentUser.displayName)
      // 로그인 처리
    }
  };

  const register = async ()=>{
    try {
      const userCreate=await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, { displayName: name });
      
      console.log("회원가입")
    } catch(error){
      console.log("회원가입 오류")
    }
  }
 
  const loginex = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("로그인완료")
      console.log(userCredential)
    } catch (error) {
      console.log(error.message)
    }
  }

  const auth = getAuth();  // 상태유지 현재창에서만 



  return (
    <div className="logroot">
      <div className="logbody">
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
          <div className="container__form container--signup">
            <form onSubmit={handleSubmit} className="form">
              <h2 className="form__title">Sign Up</h2>
              <input type="text" placeholder="User" className="input" onChange={e=>setName(e.target.value)} />
              <input type="email" placeholder="Email" className="input"  onChange={e=>setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" className="input"  onChange={e=>setPw(e.target.value)}/>
              <button type="submit" className="btn">Sign Up</button>
            </form>
          </div>

          <div className="container__form container--signin">
            <form onSubmit={handleSubmit} className="form">
              <h2 className="form__title">Sign In</h2>
              <input type="email" placeholder="Email" className="input" onChange={e=>setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" className="input"  onChange={e=>setPw(e.target.value)}/>
              <button type="submit" className="btn">Sign In</button>
            </form>
          </div>

          <div className="container__overlay">
            <div className="overlay">
              <div className="overlay__panel overlay--left">
                <button onClick={toggleForm} className="btn">Sign In</button>
              </div>
              <div className="overlay__panel overlay--right">
                <button onClick={toggleForm} className="btn">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
