"use client"
import Image from "next/image";
import person from "../app/src/assests/person.png";
import { FaCompass, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import myimage from "../app/src/assests/my-image 1.png";
import polygon1 from "../app/src/assests/Polygon 1.png";
import polygon2 from "../app/src/assests/Polygon 2.png";
import polygon3 from "../app/src/assests/Polygon 3.png";
import polygon4 from "../app/src/assests/Polygon 4.png";

export default function Home() {
  return (
  <div
  className="flex flex-col p-5 w-[100%] bg-white gap-3"
  >
    <div className="flex flex-row w-[100%] bg-white">

      <div 
  className="flex flex-col w-[50%] justify-center items-center gap-3"
      
      >
    <div
      className="flex flex-col p-5 w-[50%]justify-center items-center gap-3"

    >
    <div
        className=" w-[70%]"
        >
<p
  className="text font-bold"
  style={{
    background: 'linear-gradient(0deg, #ff00cc, #3333ff, #00ffcc)',
    // background: 'linear-gradient(0deg, #f38934, #ca6b8f, #9b4af6)',

    backgroundSize: '100% 300%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: 'moveGradient 5s linear infinite',
  }}
>
At Chisel Factor Foundation, we believe humanity is the foundation of life. Our mission is to bring dignity, security, and opportunity to the most vulnerable – women, children, and senior citizens. Every life matters, and every smile is a milestone.</p>

<style jsx global>{`
  @keyframes moveGradient {
    0% {
      background-position: top;
    }
    100% {
      background-position: bottom;
    }
  }
`}</style>        </div>
        <div className="flex flex-row w-[70%] items-center gap-30">
<div
className="bg-[#FFA747] p-2 rounded-md flex flex-row gap-3 justify-center items-center" 
>
  <button>
    Explore
  </button>
  <FaCompass />


</div>
<div
className="bg-[#FFA747] p-2 rounded-md flex flex-row gap-3 justify-center items-center" 
>
  <div>
  <button>
    Lets Talk
  </button>
  </div>
 <div>
 <FaPhoneAlt />
 </div>


</div>
</div>
    </div>
<div
        className="text-[#000] w-[70%] p-1"
        >
Cyber Safety Helpline       
 </div>

 <div
        className="text-[#D76B50] w-[70%] p-1 flex flex-row items-center gap-3"
        >
<div>
Launching Soon...!  
  </div>   
  <div>
 <FaPhoneAlt />

    </div> 
 </div>

 <div
        className="text-[#388AE8] w-[70%]"
        >
 a safe, anonymous space for children and young adults to report cyber abuse, sextortion, grooming, or bullying.        </div> 

      </div>



<div
  className="flex flex-col p-5 w-[50%] bg-white justify-center items-center"

>
<div>
<Image
          // className="dark:invert"
          src={person}
          alt="Next.js logo"
          width={"100%"}
          height={"100%"}
          priority
        />
</div>
</div>
    </div>

    <div className="flex flex-col p-5 w-[100%] bg-white justify-center items-center gap-3">
    <div
  className="text-transparent bg-clip-text bg-gradient-to-r from-[#D46966] to-[#A789CF] font-semibold text-lg"
>
  Schemes
</div>
    </div>

 <div className="flex w-full flex-col justify-center items-center">
 <div
 className="flex flex-row w-[100%] justify-between p-5"
 >
<div className="p-10 relative w-[200px] justify-end items-center bg-[#E5F3DF] flex">
 
  

  
  <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3C894] to-[#526A48] font-semibold text-lg justify-center items-center">
    MANGAI
  </div>
  <div className="absolute bottom-0 -top-5 -left-18">
    <Image
      src={person}
      alt="Next.js logo"
      width={220}
      height={100}
      priority
    />
  </div>
</div>


<div className="p-10 relative w-[200px] justify-end items-center bg-[#F3DFF3] flex">
 
  

  
 <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5A4D5] to-[#803D80] font-semibold text-lg justify-center items-center">
 MUGAI
 </div>
 <div className="absolute bottom-0 -top-5 -left-18">
   <Image
     src={person}
     alt="Next.js logo"
     width={220}
     height={100}
     priority
   />
 </div>
</div>


<div className="p-10 relative w-[200px] justify-end items-center bg-[#DFEFF3] flex">
 
  

  
 <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EBCC7] to-[#4E757F] font-semibold text-lg justify-center items-center">
 MOOPU
 </div>
 <div className="absolute bottom-0 -top-5 -left-18">
   <Image
     src={person}
     alt="Next.js logo"
     width={220}
     height={100}
     priority
   />
 </div>
</div>

 </div>
 </div>

 <div className="flex flex-col p-5 w-[100%] bg-white text-[#A99075] justify-center items-center gap-3">
 <div style={{ fontFamily: 'Leky Calgria, serif' }} className="font-black
">
  MANGAI
</div>
<div style={{ fontFamily: 'Crustaceans Signature DEMO' }} className="font-black text-[#5A9FED]">
  Women Empowerment
</div>


    </div>

    <div className="flex flex-col relative p-5 w-[100%] bg-white text-[#A99075] justify-center items-center gap-3">
 
<div>
<Image
          // className="dark:invert"
          src={myimage}
          alt="logo"
          width={600}
          height={"50%"}
          priority
        />
</div>


<div className="absolute bottom-0 top-45 left-245">
<div className="p-3 flex flex-col justify-center items-center border-2 rounded-3xl border-[#FECC16] text-[#855AB4] ">
Women Business Training
</div>
</div>

<div className="absolute bottom-0 top-4 left-210">
<div className="p-3 flex flex-col justify-center items-center border-2 rounded-3xl border-[#FECC16] text-[#855AB4] ">
I am a beneficiary of Chisel Factor Foundation
</div>
</div>

<div className="absolute bottom-0 top-35 left-75 w-36">
<div className="p-3 flex flex-col justify-center items-center border-2 rounded-3xl border-[#FECC16] text-[#855AB4] ">
Chisel4U
</div>
</div>

<div className="absolute bottom-0 top-0 left-105 w-36">
<div className=" flex flex-col justify-center items-center ">
<Image
          // className="dark:invert"
          src={polygon1}
          alt="logo"
          width={20}
          height={"50%"}
          priority
        />
</div>
</div>

<div className="absolute bottom-0 top-28 left-230 w-36">
<div className=" flex flex-col justify-center items-center ">
<Image
          // className="dark:invert"
          src={polygon3}
          alt="logo"
          width={20}
          height={"50%"}
          priority
        />
</div>
</div>

<div className="absolute bottom-0 top-100 left-233 w-36">
<div className=" flex flex-col justify-center items-center ">
<Image
          // className="dark:invert"
          src={polygon4}
          alt="logo"
          width={20}
          height={"50%"}
          priority
        />
</div>
</div>
<div className="absolute bottom-0 top-85 left-65 w-36">
<div className=" flex flex-col justify-center items-center ">
<Image
          // className="dark:invert"
          src={polygon2}
          alt="logo"
          width={20}
          height={"50%"}
          priority
        />
</div>
</div>
    </div>
  </div>
  );
}
