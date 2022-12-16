import React, { useState } from "react";
import AddPatient from "../components/AddPatient";

function Patients({data}) {
  const [close,setClose] = useState(false)
  const [update,setUpdate] = useState(false)

  return (
    <main className=" relative ">
      
    { !close && <p
        onClick={()=>setClose(true)}
        title="add new record of patient"
        className="float-right mx-2 my-1  md:text-xl font-serif bg-white/70 md:bg-emerald-300/60 shadow-md border-b-2 cursor-pointer border-b-emerald-600 shadow-emerald-500 md:my-2 rounded-full px-4 text-emerald-600 py-1 font-extrabold"
      >
        Add
        <span className=" ml-1 font-extrabold text-2xl hover:translate-x-4">
          &oplus;
        </span>
      </p>}
      {close && <AddPatient setToggle={setClose} />}
       {/* <AddPatient /> */}
      <table className="min-w-full border-collapse block md:table">
        <caption className=" block md:table-caption bg-slate-700 py-2 font-bold text-white text-3xl">
          Patients Details
        </caption>
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
            <th className="th">Name</th>
            <th className="th">Email</th>
            <th className="th">Address</th>
            <th className="th">D.O.B</th>
            <th className="th">Mobile</th>
            <th className="th">Action</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((patient) => {
            return (
              <tr key={patient.id} className="even:bg-gray-200 odd:bg-slate-50 border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Name
                  </span>
                  <span contentEditable={update}>{patient.name}</span>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Email Address
                  </span>
                  <span contentEditable={update}>{patient.email}</span>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Address
                  </span>
                  <span contentEditable={update}>{patient.address}</span>
                </td>
                <td  className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    D.O.B
                  </span>
                  <span contentEditable={update}>{patient.dob}</span>
                </td>

                <td  className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Mobile
                  </span>
                  <span contentEditable={update}>{patient.mobile}</span>
                </td>
                <td className="p-2 space-x-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  {update && <button onClick={()=>setUpdate(!update)} className="bg-green-500 hover:shadow-md hover:shadow-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    Ok
                  </button>}
                  {!update && <button onClick={()=>setUpdate(!update)} className="bg-blue-500 hover:shadow-md hover:shadow-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    Update
                  </button>}
                  <button className="bg-red-500 hover:bg-red-700 hover:shadow-md hover:shadow-red-500 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default Patients;

export async function getStaticProps() {
  const fetcha = await fetch('http://localhost:8000/Patients')
  const data= await fetcha.json()
  
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
