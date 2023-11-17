"use client";
import { useState } from 'react';
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';

export default function Home() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    setJoke(`${data.setup} - ${data.punchline}`);
    setLoading(false);
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-8 bg-gradient-to-r from-indigo-900 via-green-500 to-cyan-400 text-white"
      style={{
        background: 'linear-gradient(90deg, rgba(57,52,143,0.1825980392156863) 0%, rgba(9,60,121,0.5327380952380952) 25%, rgba(0,212,255,1) 100%)',
      }}
    >
     
      {/* New div for the top right button */}
      <div className="absolute top-4 right-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
          <Link href={'https://github.com/ceasermikes002'}>My Github</Link>
        </button>
      </div>


      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-black bg-clip-text">
        Joke Generator
      </h1>
      <h2 className='font-bold text-gray-600 text-xl'>Get all the jokes you can think of free of charge!😉</h2>
      <div className="my-[-50px] max-w-full flex justify-center items-center">
        {loading ? (
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
              <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
              </svg>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-3'>
            <div className='rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4'>
              <p className='font-inter font-medium text-sm text-gray-700'>
                {joke}
              </p>
            </div>
          </div>
        )}
      </div>
      <button onClick={getJoke} disabled={loading} className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
        Hover 😏
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Get Joke</span>
      </button>

    </main>
  );
}
