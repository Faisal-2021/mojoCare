import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);

  console.log(email,password)

  return (
    <div className="  flex flex-col bg-sky-300/20 h-screen">
      <form className="border-2 border-slate-500 bg-white my-10 rounded-xl shadow-lg shadow-black p-5 grid grid-cols-1 gap-5 max-w-md w-96 mx-auto">
        <p className="  text-3xl text-center">Login</p>
        <label for="email" className=" font-semibold">
          Email
        </label>
        <input
          type="email"
          minLength="8"
          maxLength="50"
          id="email"
          name="email"
          required
          placeholder="Enter your email"
          className=" input "
          value={email}
          title="Enter your Email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label for="password" className=" font-semibold">
          Password
        </label>

        <div className=" h-10 bg-white rounded-md ">
          <input
            type={`${showPassword === false ? "password" : " text"}`}
            name="password"
            minLength="8"
            maxLength="20"
            required
            id="password"
            placeholder="password"
            className=" w-11/12 input"
            title="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className=" inline-flex right-0 w-1 cursor-pointer"
            title="show password"
            onClick={
              showPassword === false
                ? () => setShowpassword(true)
                : () => setShowpassword(false)
            }
          >
            &#128065;
          </span>
        </div>

        <div className="text-sm">
          <label for="cars" className=" inline-flex cursor-pointer">
            Login as :
          </label>
          <select
            className=" font-medium appearance-none inline-flex bg-transparent outline-none"
            name="loginAs"
            id="cars"
            required
          >
            <option selected value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
            <option value="Patients">Patients</option>
          </select>
        </div>
        <button className=" button">Login</button>
      </form>
    </div>
  );
}
