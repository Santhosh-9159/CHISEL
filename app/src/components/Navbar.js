// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-col w-[100%] bg-amber-50 justify-center items-center p-2">
    <div className='flex flex-row w-[100%] p-3 border-2 justify-center items-center'>
    <div className='flex w-[50%] text-black'>
        CHISEL
     </div>
     <div 
     className='flex w-[50%] text-black flex-row justify-between' 
     >
     <Link href="/">Home</Link>
     <Link href="/">Schemes</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
     </div>
    </div>
    </nav>
  );
}
