import React from 'react'
import asyncawait from '../assets/portfolio/asyncawait.png'
import fetchimg from '../assets/portfolio/fetchimg.png'
import infinitescroll from '../assets/portfolio/infinitescroll.png'
import newsapi from '../assets/portfolio/newsapi.png'
import hooks from '../assets/portfolio/hooks.png'
import smoothscrolling from '../assets/portfolio/smoothscrolling.png'
import sliderreact from '../assets/portfolio/sliderreact.jpg'
import routing from '../assets/portfolio/routing.png'
import functionandclass from '../assets/portfolio/functionandclass.jpg'
const Portfolio = (props) => {
    const portfolio = [
      {
        id: 1,
        src: asyncawait
      },
      {
        id: 2,
        src: fetchimg
      },
      {
        id: 3,
        src: infinitescroll
      },
      {
        id: 4,
        src: newsapi
      },
      {
        id: 5,
        src: hooks
      },
      {
        id: 6,
        src: smoothscrolling
      },
      {
        id: 7,
        src: sliderreact
      },
      {
        id: 8,
        src: routing
      },
      {
        id: 9,
        src: functionandclass
      },
    ]
  return (
    // name portfolio given to it for smooth scrolling  
    // <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-36">
    <div name="portfolio"  style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}>
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8  ">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Check  out some of my work right here</p>
        </div>
     
       
     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"> 
     
            {portfolio.map(({id, src})=>(
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            
                <img src={src} alt=""
                className="rounded-md duration-200 hover:scale-105" />
                <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Code</button>
                </div>
            </div>


            ))}
        
 {/* this will be pasted inside portfolio.map below the grid part function   */}
            {/* <div className="shadow-md shadow-gray-600 rounded-lg">
            
                <img src={asyncawait} alt=""
                className="rounded-md duration-200 hover:scale-105" />
                <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Code</button>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
