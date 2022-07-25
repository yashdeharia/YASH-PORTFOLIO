import React from 'react';
import {MdKeyboardArrowRight} from  "react-icons/md";
// import{yash} from "../assets/yash.png"
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name="home" 
    className='h-screen w-full bg-gradient-to-b from-white to-sky-200' >


        

        <div className='max-w-screen-lg mx-auto flex flex-col intem-center justify-center  h-full px-4 md:flex-row'>

          <div className='flex flex-col justify-center h-full'>

            
              <h2 className='text-4xl sm:text-7xl font-bold bg-gradient-to-r from-sky-500 via-pink to-pink-500 text-transparent bg-clip-text'>
                I'm a Web3 Developer.
              </h2>

              <p className='text-black py-4 max-w-md'>
                I'm Yash Deharia, A Computer Science student.
                <br />
                Also a Web3 Content Creator, Technical blog writer.
                <br />
                <p className='font-bold text-2xl py-2 '>Love to teach and learn in <span className='font-signature text-4xl bg-gradient-to-r from-sky-500 via-pink to-pink-500 text-transparent bg-clip-text cursor-pointer'>Community</span>.</p>
              </p>

              <div>
                
            
                <Link to="portfolio" smooth duration={800} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black cursor-pointer hover:scale-105 duration-200 hover:bg-pink-500'>
                  Portfolio
                  <span className='group-hover:rotate-90 duration-300'>
                    <MdKeyboardArrowRight  size={25} className="ml-1"/>

                  </span>
                </Link>
                
              </div>

              <div>
                <img src="" alt="" />
              </div>

              
                
              
            
          </div>
        </div>

    </div>
  )
}

export default Home