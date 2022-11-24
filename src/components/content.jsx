import { React, useState, useId } from 'react';

function Content() {
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    if(!count){
      setCount(count + 1)
    }else{
      setCount(count - 1)
    }
  }
  return (
  <section class="overflow-hidden text-gray-700 ">
      <div class="px-5 py-2 mx-auto lg:pt-6 lg:px-32">
      <h1 class="text-3xl mb-10">My Works</h1>
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-4/12">
            <div class="w-80 p-1 md:p-3 group relative">
              <img alt="gallery" class="block object-cover object-center w-80 h-80 rounded-lg"
                src="src/assets/dusk.png"/>
                <div class="absolute top-0 left-0 w-full h-0 border rounded-lg flex flex-col justify-center items-center bg-gray-100 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
                  <div class="absolute top-8 left-5">
                    <h2 class="text-2xl text-black">Dusk (Arknights)</h2>
                    <button onClick={handleClick} class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 hover:fill-red-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <span class="text-2xl">{count}</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
          <div class="flex flex-wrap w-4/12">
            <div class="w-80 p-1 md:p-2 group relative">
            <img alt="gallery" class="block object-cover object-center w-80 h-80 rounded-lg"
                src="src/assets/shun.png"/>
                <div class="absolute top-0 left-0 w-full h-0 border rounded-lg flex flex-col justify-center items-center bg-gray-100 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
                <div class="absolute top-8 left-5">
                    <h2 class="text-2xl text-black">Shun (Blue Archive)</h2>
                    <button onClick={handleClick} class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 hover:fill-red-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <span class="text-2xl">{count}</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
          <div class="flex flex-wrap w-4/12">
            <div class="w-80 p-1 md:p-2 group relative">
            <img alt="gallery" class="block object-cover object-center w-80 h-80 rounded-lg"
                src="src/assets/yoru.png"/>
                <div class="absolute top-0 left-0 w-full h-0 border rounded-lg flex flex-col justify-center items-center bg-gray-100 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
                <div class="absolute top-8 left-5">
                    <h2 class="text-2xl text-black">Yoru (Valorant)</h2>
                    <button onClick={handleClick} class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 hover:fill-red-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <span class="text-2xl">{count}</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
          <div class="flex flex-wrap w-4/12">
            <div class="w-80 p-1 md:p-2 group relative">
            <img alt="gallery" class="block object-cover object-center w-80 h-80 rounded-lg"
                src="src/assets/matsuri.png"/>
                <div class="absolute top-0 left-0 w-full h-0 border rounded-lg flex flex-col justify-center items-center bg-gray-100 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
                <div class="absolute top-8 left-5">
                    <h2 class="text-2xl text-black">Matsuri (Hololive)</h2>
                    <button onClick={handleClick} class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 hover:fill-red-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <span class="text-2xl">{count}</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
          <div class="flex flex-wrap w-4/12">
            <div class="w-80 p-1 md:p-2 group relative">
            <img alt="gallery" class="block object-cover object-center w-80 h-80 rounded-lg"
                src="src/assets/me.png"/>
                <div class="absolute top-0 left-0 w-full h-0 border rounded-lg flex flex-col justify-center items-center bg-gray-100 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
                <div class="absolute top-8 left-5">
                    <h2 class="text-2xl text-black">Me in Pink</h2>
                    <button onClick={handleClick} class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 hover:fill-red-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <span class="text-2xl">{count}</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
          <div class="flex flex-wrap w-4/12">
            <div class="w-80 p-1 md:p-2 group relative">
            <img alt="gallery" class="block object-cover object-center w-80 h-80 rounded-lg"
                src="src/assets/shanoa.png"/>
                <div class="absolute top-0 left-0 w-full h-0 border rounded-lg flex flex-col justify-center items-center bg-gray-100 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
                <div class="absolute top-8 left-5">
                    <h2 class="text-2xl text-black">Shanoa (Castlevania)</h2>
                    <button onClick={handleClick} class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 hover:fill-red-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <span class="text-2xl">{count}</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}
export default Content;