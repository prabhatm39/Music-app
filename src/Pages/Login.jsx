import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthRedux/action';
import { USER_LOGIN_SUCCESS } from '../Redux/AuthRedux/actionTypes';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword]  = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/"


  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((r) => {
        if(r.type=== USER_LOGIN_SUCCESS){
          navigate(comingFrom, {replace: true})
        }
      })
     
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name</label>
          <input type="email" placeholder='Email'
          value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>User Password</label>
          <input type="password" placeholder='Password'
          value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" />

      </form>
    </div>
  )
}
