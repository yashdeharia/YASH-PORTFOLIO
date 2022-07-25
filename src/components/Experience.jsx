import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'

import solidity from '../assets/solidity.png'
// import meta from '../assests/meta.png'
import ether from '../assets/Ether.png'

const Experience = () => {

    const skills = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',

        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',

        },
        {
            id:3,
            src: javascript,
            title: 'JS',
            style: 'shadow-yellow-500',

        },
       
        {
            id:4,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-green-500',

        },

        {
            id:5,
            src: react,
            title: 'React',
            style: 'shadow-blue-500',

        },

        {
            id:6,
            src: github,
            title: 'GitHub',
            style: 'shadow-black-500',

        },

        {
            id:7,
            src: solidity,
            title: 'Solidity',
            style: 'shadow-black-500',

        },

        {
            id:8,
            src: ether,
            title: 'Ethereum',
            style: 'shadow-black-500',

        },

        // {
        //     id:9,
        //     src: meta,
        //     title: 'MetaMask',
        //     style: 'shadow-black-500',

        // },
    ]

  return (

    <div name='experience' className='h-screen w-full bg-gradient-to-b from-sky-400 to-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
            <div>

              <p className='text-5xl sm:text-7xl font-bold p-2 inline bg-gradient-to-r from-sky-500 via-pink to-pink-500 text-transparent bg-clip-text'>
                 Experience.
              </p>

            </div>

            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    skills.map(({id, src, title, style}) => (

                        <div key={id} className={'hover:scale-105 hover:text-white duration-500 py-2 rounded-lg'}>

                            <img src={src} className="w-20 mx-auto" alt="" />
                             <p className='font-bold mt-4  '>{title}</p>

                        </div>



                    ))
                }

                  
                </div>
        </div>

        {/* <div className='flex flex-wrap m-4'>

                <div className='w-full gird grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                  <div className='py-2 rounded-lg hover:scale-105 duration-500'>

                    <img src={html} className="rounded-md duration-200 hover:scale-105" alt="" />

                  </div>
                </div>
        </div> */}

    </div>


    )
}

export default Experience