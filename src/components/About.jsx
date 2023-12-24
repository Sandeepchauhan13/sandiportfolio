import React from 'react'

const About = (props) => {
  return (
    // <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"  style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}>
    <div name="about"   style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}>
             {/* mx-auto is used to center the div  */}
      <div className="max-w-screen-lg flex flex-col p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8">
            {/* if want to line under about border-b-4 and border-gray-500  */}
            <p className="text-4xl font-bold inline border-b-4 border-w-20 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-1">Myself <span className="text-3xl mx-1 text-blue-400">Sandeep Chauhan</span>  a learner and a passionate web developer who want to learn through out my life.
        </p>
    <p className="text-sm mb-20">Degree and 3 Years Engineering Diploma in Computer Science. Several React Projects i have made with deployment see below.
    <br />
    1.<span className="text-1xl text-red-400">Textutils-</span>
     In this project i learned UseState Hooks, function based component, routing , changing theme(darkmode, color palete), all the logics(i.e Uppercase into Lowercase,Copy text, Remove Extra Spaces etc )
    <br/>
     (Javascript,React,Bootstrap,Html)
<br />
    2.<span className="text-1xl text-red-400">NewsWebApp-</span> Several features i have added to it e.g design navbar,themes, color palete, time, calender, hover alerts etc.
    In this project i learned to fetch api using class based and function based components both. Learned component Did Mount, React life Cycle,
    Constructor-super(), Hooks, Adding Spinner in all the phases where used, Scrolling page using next and previous click but also infinite scroll. This Project is Really Amazing.
      (Javascript,React,Bootstrap,Html)
    <br />
    3.<span className="text-1xl text-red-400">NetflixClone-</span> I learned here in this project to include slider in react js and using firebase for back end.
    <br /> ( Vite(React) Tailwind css, Javascript,Html)
    <br />
    4.<span className="text-1xl text-red-400">PortFolio-</span> With the use of React and Tailwind . In this project i learned and used Tailwind and amazing power of tailwind css. 
    Learned Array destructring, Smoothscrolling, using useState Hook  i implemented type animation and added color to it, Darkmode Theme alerts while submitting contact form. Hover on navBar many more. etc.(React, Javascript, Html , Tailwindcss)
    <br />
    5.<span className="text-1xl text-red-400">Nextjs, MongoDb</span> I have Learned Mongodb, Nextjs, and also learned and made a project in Nextjs.
    
    </p>
  
      </div>
    </div>
  )
}

export default About
