import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube,} from 'react-icons/fa';
// import { HiOutLineMail} from 'react-icons/hi';
// import {BsFillPersonLinesFill} from "react-icons/bs"; 

const SocialLinks = () => {

  return (
    <div className='hidden lg:flex flex-col top-[36%] left-0 fixed'>
        <ul>

            <li className=' flex justify-between items-center rounded-tr-lg w-40 h-14 px-4 m-1 bg-sky-300 ml-[-100px] hover:rounded-tr-2xl duration-300 hover:ml-[-10px] hover:bg-transparent duration-700'>
                <a href="https://twitter.com/YDeharia" target = '_blank' rel="noreferrer"  className='flex justify-between items-center w-full text-2xl hover:text-sky-300 duration-700'>
                     <>
                      Twitter<FaTwitter size={30}/>
                     </>
                </a>
            </li>

            <li className=' flex justify-between items-center w-40 h-14 px-4 m-1 bg-black ml-[-100px] hover:rounded-2xl duration-300 hover:ml-[-10px] hover:bg-transparent duration-700'>
                <a href="https://github.com/yashdeharia" target = '_blank' rel="noreferrer" className='flex justify-between items-center w-full text-2xl text-white hover:text-black duration-700'>
                     <>
                      Github<FaGithub size={30}/>
                     </>
                </a>
            </li>

            <li className=' flex justify-between items-center w-40 h-14 px-4 m-1 bg-red-600 ml-[-100px] hover:rounded-2xl duration-300 hover:ml-[-10px] hover:bg-transparent duration-700 '>
                <a href="https://www.youtube.com/channel/UC6D_7hpQFOd7XXoM1LRCN9w" target = '_blank' rel="noreferrer" className='flex justify-between items-center w-full text-2xl hover:text-red-600 duration-700'>
                     <>
                      Youtube <FaYoutube size={30}/>
                     </>
                </a>
            </li>

            <li className=' flex justify-between items-center rounded-br-lg w-40 h-14 px-4 m-1 bg-sky-900 ml-[-100px] hover:rounded-2xl duration-300 hover:ml-[-10px] hover:bg-transparent duration-700 '>
                <a href="https://twitter.com" target = '_blank' rel="noreferrer" className='flex justify-between items-center w-full text-2xl hover:text-sky-900 duration-700'>
                     <>
                      Linkedin<FaLinkedin size={30}/>
                     </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks