import { useState } from "react";
import { useRouter } from 'next/router'
function Signup(e) {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [userType,setUserType]=useState('');
  const [showPassword,setShowpassword]=useState(false)
  const router = useRouter()

  const data = {
    name,
    email,
    password,
    userType
  };
  console.log(data)

  const handleSignUP  = async (e) =>{
    e.preventDefault();
    await fetch("http://localhost:8000/User", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setName('');
    setEmail('');
    setPassword('')
    alert("Sign up successfully")
    router.push('http://localhost:3000/')
  }

  return (
    <div className=" flex flex-col bg-sky-300/20 h-screen ">
      <form onSubmit={handleSignUP} className=" bg-white border-2 my-6 border-slate-500 rounded-xl shadow-lg shadow-black p-5 grid grid-cols-1 gap-3 max-w-md w-96 mx-auto">
        <p className="  text-3xl text-center">Sign up</p>
        <label for="name" className=" font-semibold">
          Name :
        </label>
        <input
          type="text"
          className="input"
          name="name"
          id="name"
          minLength="3"
          maxLength="50"
          required
          placeholder=" Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <label for="email" className=" font-semibold">
          Email :
        </label>
        <input
          type="email"
          minLength="8"
          maxLength="50"
          id="email"
          name="email"
          required
          placeholder="Enter your email"
          className=" input"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label for="password" className=" font-semibold">
          Password :
        </label>
        <div className=" h-10 bg-white rounded-md ">
        <input
          type={`${showPassword === false ? 'password' :' text'}`}
          name="password"
          minLength="8"
          maxLength="20"
          required
          id="password"
          placeholder="password"
          className=" w-11/12 input"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <span className=" inline-flex right-0 w-1 cursor-pointer" title="show password" onClick={showPassword === false ? ()=>setShowpassword(true):()=>setShowpassword(false)}>&#128065;</span>
        </div>

        <div className="text-sm">
          <label for="cars" className=" inline-flex cursor-pointer">
            Signup as :
          </label>
          <select
            className=" cursor-pointer appearance-none inline-flex bg-transparent outline-none"
            name="SignUp"
            id="cars"
            required
            value={userType}
            onChange={(e)=>setUserType(e.target.value)}
          >
            <option selected value="select">select</option>
            <option value="Admin" selected>Admin</option>
            <option value="Doctor">Doctor</option>
            <option value="Patients">Patients</option>
          </select>
        </div>
        {/* <input type='submit' className="button" value='Sign up' onClick=/> */}
        <button className="button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
