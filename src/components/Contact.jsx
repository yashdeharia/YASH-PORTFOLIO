import React from 'react'

const Contact = () => {
  return (

    
    <section name="Hire Me" class="text-black body-font relative">
  <div class="container px-5 py-24 mx-auto bg-sky-200">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-5xl text-4xl font-medium title-font mb-4 bg-gradient-to-r from-sky-500 via-pink to-pink-500 text-transparent bg-clip-text">Hire Me.</h1>
      <p class="lg:w-2/3 mx-auto font-bold text-black leading-relaxed text-base">Connect and contact me.</p>
    </div>
    
    <div class="lg:w-1/2 md:w-2/3 mx-auto">

    <form action="https://getform.io/f/89dbb626-0ce6-4c0a-99e0-247cf70817c9" target='_blank' method='POST'>

      

      <div class="flex flex-wrap -m-2 justify-center items-center">


        <div class="p-2 w-1/2">
          
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-black">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-black">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-black">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg duration-500">Button</button>
        </div>



        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500" href='yashdeharia2003@gmail.com'>yashdeharia2003@gmail.com</a>
          <p class="leading-normal font-bold text-black my-5">Bhopal.
            <br/>INDIA
          </p>
          <span class="inline-flex">
            <a class="text-gray-500" href='yashdeharia2003@gmail.com'>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500" href='yashdeharia2003@gmail.com'>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500" href='yashdeharia2003@gmail.com'>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500" href='yashdeharia2003@gmail.com'>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
      </form>

    </div>

    <p className='font-signature text-3xl flex justify-center place-items-center p-3'>Made with ❤️ by Yash Deharia. </p>

  </div>
</section>



  )
}

export default Contact