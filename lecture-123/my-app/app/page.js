// "use client"
// import { useState } from "react";
import NavBar from "@/Components/NavBar"
import fs from "fs/promises"

export default function Home() {
  // const [count, setCount] = useState(0);
  console.log("Hii I am gaurav")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
   <div>
    {/* I am a component {count} */}
    {/* <button onClick={()=>setCount(count+1)}>Click ME</button> */}
    <NavBar/>
   </div>
  );
}
