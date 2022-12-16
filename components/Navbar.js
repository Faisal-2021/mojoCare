import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className=' shadow-md shadow-black/50 border-b-2 border-slate-700 flex justify-evenly py-2'>
      <Link href="/" className='rounded-full text-center capitalize p-3 font-bold shadow-inner text-xl border-2 border-blue-300'>Alpha Health</Link>
      <Link href="/" className='navLink'>Login</Link>
      <Link href="/Signup" className='navLink'>SignUp</Link>
      <Link href="/Patients" className='navLink'> Patients</Link>

    </nav>
  )
}

export default Navbar