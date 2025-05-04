'use client';

import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <div className='font-poppins bg-gray-50 w-screen h-screen'>
            <div className="flex flex-col  gap-4 items-center justify-center h-full">
                <h1 className="text-4xl font-bold text-gray-800">Dabang</h1>
                <p className="mt-4 text-lg text-gray-600">Welcome to the Dabang Dashboard Project!</p>
                <button onClick={()=>{
                    router.push('/dashboard')
                }} className='cursor-pointer font-semibold p-5 shadow-lg shadow-purple-300 bg-purple-600 rounded-xl'>Go to Dashboard</button>
            </div>
        </div>
    );
}