import { useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {
  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const [uname, setUname] = useState('')
  
  const fetchLogin = () =>{
   Axios.post('http://localhost:3001/api/user/login',{email:email,password:passw})
   .then((response) => alert(response.data)
    , (error) => {
    console.log(error);
  })}

  const fetchRegister = () =>{
    Axios.post('http://localhost:3001/api/user/register',{name:uname,email:email,password:passw})
    .then((response)=> alert(response.data.user)
    , (error) => {
      console.log(error);
  })}
  // Axios.get()

  return (
    <div className="App">
      <h2>Login</h2>
      <form method='POST'>
        <label>Email</label>
        <input type='email' id='uname' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'></input>
        <label>Password</label>
        <input type='password' id='passw' onChange={(e)=>setPassw(e.target.value)} placeholder='Enter password'></input>
        <button onClick={fetchLogin}>Log in</button>
      </form>
      <h2>Register</h2>
      <form method='POST'>
        <label>Username</label>
        <input type='text' onChange={(e)=>setUname(e.target.value)} placeholder='Enter username'></input>
        <label>Email</label>
        <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'></input>
        <label>Password</label>
        <input type='password' onChange={(e)=>setPassw(e.target.value)} placeholder='Enter password'></input>
        <button onClick={fetchRegister}>Register</button>
      </form>
    </div>
  );
}

export default App;
