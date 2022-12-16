import React, { useState } from "react";

function AddPatient({ setToggle }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const data = {
    name,
    email,
    address,
    dob,
    mobile,
  };

  const AddPatientData = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/Patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setName("");
    setEmail("");
    setAddress("");
    setMobile("");
    setDob("");
    alert("Details has been added");
    setToggle(false);
  };

  return (
    <div className="  bg-gray-100 inset-x-0 md:inset-x-28 m-0  md:m-5 absolute z-30  shadow-lg shadow-black/75 rounded border-4 border-emerald-400">
      <span className=" block h-10 p-1 bg-emerald-600 border-b-4 border-b-emerald-800 text-lg font-semibold shadow-md shadow-black/80 text-white text-center">
        Add New Patient
      </span>
      <span
        onClick={() => setToggle(false)}
        className=" inline font-bold top-0 absolute right-2 px-2 py-0.5 m-1 cursor-pointer text-sm text-white bg-slate-700 hover:shadow-md hover:shadow-black  rounded-full "
      >
        x
      </span>

      <form
        onSubmit={AddPatientData}
        className="grid w-full px-5 py-2 grid-cols-2 border-2border-slate-500 bg-white shadow-lg shadow-black  gap-x-2 gap-y-5"
      >
        <p className=" col-span-2 text-xl text-center my-1">
          Enter Details of Patient
        </p>

        <div>
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
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
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
            className=" input "
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="  ">
          <label for="Dob" className=" font-semibold">
            D.O.B :
          </label>
          <input
            type="text"
            name="DOB"
            required
            id="Dob"
            minLength={8}
            maxLength={10}
            placeholder="DOB"
            className=" input "
            pattern="\d{1,2}/\d{1,2}/\d{4}"
            title="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="  ">
          <label for="mob" className=" font-semibold">
            Mobile :
          </label>
          <input
            type="text"
            name="mobile"
            minLength="10"
            maxLength="10"
            pattern="[6-9]{1}[0-9]{9}"
            required
            id="mob"
            placeholder="Mobile Number"
            className=" input "
            title="Mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className=" col-span-2 ">
          <label for="password" className=" font-semibold">
            Address :
          </label>
          <input
            type="text"
            name="Address"
            minLength="20"
            maxLength="200"
            required
            id="Address"
            placeholder="Address"
            className=" input "
            title="Enter your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="button">Insert Record</button>
        <button
          onClick={() => setToggle(false)}
          className="button hover:text-slate-500 bg-black hover:shadow-black hover:border-black  "
        >
          cancel
        </button>
      </form>
    </div>
  );
}

export default AddPatient;

export async function getStaticProps() {}
