import React from 'react'
import blog1 from "../assets/portfolio/blog1.jpg"

const Portoflio = () => {
    return (

        <div
            name='portfolio'
            className='h-screen w-full bg-gradient-to-b from-white via-sky-200  to-sky-400'>

            <div
                className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                <div className="pb-1">
                    <p
                        className="text-5xl sm:text-7xl font-bold inline bg-gradient-to-r from-sky-500 via-pink to-pink-500 text-transparent bg-clip-text">
                        Portfolio.
                    </p>
                </div>

                {/* <section class="text-gray-600 body-font">

                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div className='grid mt-20 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                  <div>

                    <img src={reactWeather} className="rounded-md duration-200 hover:scale-105" alt="" />

                    
                    <div className='flex item-center justify-center bg-slate-50 bg-opacity-40  rounded-bl-lg rounded-br-lg'>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Show</button>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Code</button>
                    </div>

                  </div>

                </div>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a class="block relative h-48 rounded overflow-hidden"></a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>

                                </div>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a class="block relative h-48 rounded overflow-hidden"></a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>

                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}

              <div className='flex flex-wrap m-4'>

                <div className='grid grid-cols-2 mt-20 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                  <div>

                    <img src={blog1} className="rounded-md duration-200 hover:scale-105" alt="" />

                    
                    <div className='flex item-center justify-center bg-slate-50 bg-opacity-40  rounded-bl-lg rounded-br-lg'>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Show</button>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Code</button>
                    </div>

                  </div>

                  <div>

                    <img src={blog1} className="rounded-md duration-200 hover:scale-105" alt="" />

                    
                    <div className='flex item-center justify-center bg-slate-50 bg-opacity-40  rounded-bl-lg rounded-br-lg'>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Show</button>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Code</button>
                    </div>

                  </div>

                  <div>

                    <img src={blog1} className="rounded-md duration-200 hover:scale-105" alt="" />

                    
                    <div className='flex item-center justify-center bg-slate-50 bg-opacity-40  rounded-bl-lg rounded-br-lg'>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Show</button>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Code</button>
                    </div>

                  </div>

                  <div>

                    <img src={blog1} className="rounded-md duration-200 hover:scale-105" alt="" />

                    
                    <div className='flex item-center justify-center bg-slate-50 bg-opacity-40  rounded-bl-lg rounded-br-lg'>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Show</button>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Code</button>
                    </div>

                  </div>

                  <div>

                    <img src={blog1} className="rounded-md duration-200 hover:scale-105" alt="" />

                    
                    <div className='flex item-center justify-center bg-slate-50 bg-opacity-40  rounded-bl-lg rounded-br-lg'>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Show</button>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Code</button>
                    </div>

                  </div>
                  <div>

                    <img src={blog1} className="rounded-md duration-200 hover:scale-105" alt="" />

                    
                    <div className='flex item-center justify-center bg-slate-50 bg-opacity-40  rounded-bl-lg rounded-br-lg'>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Show</button>
                      <button className='w-1/2 px-6 py-3 m-0 hover:scale-125 duration-200 hover:font-bold hover:text-white'>Code</button>
                    </div>

                  </div>

                </div>


                  

                </div>
              



            </div>

        </div>
    )
}

export default Portoflio