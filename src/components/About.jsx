import React from 'react'

const About = (props) => {
  return (
    // <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
    <div name="about" className="h-screen w-full pt-24" style={{backgroundColor: props.mode==='light'?'#dcfce7':'#18181b', color: props.mode==='light'?'black':'#fef08a'}}>
             {/* mx-auto is used to center the div  */}
      <div className="max-w-screen-lg flex flex-col p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8">
            {/* if want to line under about border-b-4 and border-gray-500  */}
            {/* <p className="text-4xl font-bold inline border-b-4 border-w-20 border-gray-500">About</p> */}
            <p className="text-4xl" style={{
          color: props.mode==='light'?'black':'#fef08a'}}>About</p>
        </div>
        <p className="text-xl mt-1">Myself 
        {/* <span className="text-3xl mx-1 text-blue-400">Sandeep Chauhan</span>  */}
        <span className="text-3xl mx-2  my-2"
        style={{
          color: props.mode==='light'?'#db2777':'white'}}>Sandeep Chauhan</span> 
         a learner and a passionate web developer who want to learn through out my life.
        </p>
    <p className="text-sm mb-20">Degree and 3 Years Engineering Diploma in Computer Science. Several React Projects i have made with deployment see below.
    <br />
    {/* 1.<span className="text-1xl text-red-400">Textutils-</span> */}
    1.<span className="text-xl" style={{
          color: props.mode==='light'?'#db2777':'white'}}>Textutils-<a href="https://typist-software-sandeep-chauhans-projects.vercel.app" target="_blank" rel="noreferrer">Demo Link</a> </span>
     In this project i learned UseState Hooks, function based component, routing , changing theme(darkmode, color palete), all the logics(i.e Uppercase into Lowercase,Copy text, Remove Extra Spaces etc )(Javascript,React,Bootstrap). 
<br />
{/* <br/> */}
    {/* 2.<span className="text-1xl text-red-400">NewsWebApp-</span> */}
    2.<span className="text-xl" style={{
          color: props.mode==='light'?'#db2777':'white'}}>NewsWebApp-<a href="https://classbased-component-react.vercel.app" target="_blank" rel="noreferrer">Demo Link</a> </span>
     Several features i have added to it e.g design navbar,themes, color palete, time, calender, hover alerts etc.
    In this project i learned to fetch api using class based and function based components both. Learned component Did Mount, React life Cycle,
    Constructor-super(), Hooks, Adding Spinner in all the phases where used, Scrolling page using next and previous click but also infinite scroll. This Project is Really Amazing.   (Javascript,React,Bootstrap). CheckOut demo Link-- https://farmers-friend-sandeep.vercel.app
    <br />
    {/* <br /> */}
    {/* 3.<span className="text-1xl text-red-400">NetflixClone-</span> */}
    3.<span className="text-xl" style={{
          color: props.mode==='light'?'#db2777':'white'}}>NetflixClone-</span>
     I learned here in this project to include slider in react js and using firebase for back end. ( Vite(React) Tailwind css, Javascript)
     <br />
    {/* <br /> */}
    {/* 4.<span className="text-1xl text-red-400">PortFolio-</span> */}
    4.<span className="text-xl" style={{
          color: props.mode==='light'?'#db2777':'white'}}>PortFolio-</span>
     With the use of React and Tailwind . In this project i learned and used Tailwind and amazing power of tailwind css. 
    Learned Array destructring, Smoothscrolling, using useState Hook implemented type animation and added color to it, alerts while submitting contact form. Hover on navBar many more. etc.(React, Javascript, Html , Tailwindcss)
    <br />
    {/* <br  /> */}
    5.<span className="text-xl" style={{
          color: props.mode==='light'?'#db2777':'white'}}>Nextjs, Node, MongoDb(Production Grade Backend)</span>
           I have Learned Mongodb, Nextjs, and created Project on Next js and Node too.
           Node js RESTful API - REST (REpresentational State Transfer) . REST is web standards based architecture and uses HTTP Protocol.
           Cors, Axios inside useEffect hooks. Learned production grade backend too.(schema, postman, json web token, registeration forum whole process)
           {/* <br /> */}
    <br  />   
   6.<span className="text-xl" style={{
          color: props.mode==='light'?'#db2777':'white'}}>Farmer`s Friend-<a href="https://farmers-friend-sandeep.vercel.app" target="_blank" rel="noreferrer">Demo Link</a> </span>
    frontend designing checkout the demo link.
<br />
{/* <br/>      */}
    
    </p>
  
      </div>
    </div>
  )
}

export default About;
