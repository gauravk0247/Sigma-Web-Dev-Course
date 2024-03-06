import React from 'react'
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container my-5 size-80 bg-red-300 relative'>
     <Image fill={true} className='mx-auto object-cover' src="https://th.bing.com/th/id/OIP.ir10U3ch9bBN99lwtedtUQHaDw?w=315&h=177&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    </div>
  );
}
