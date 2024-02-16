import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

const Experience = (props) => {
    const experience =[
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: nextjs,
            title:'NextJs',
            style: "shadow-sky-400"

        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: "shadow-white",
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style: "shadow-gray-400",
        },
    ]
  return (
    // <div name="experience" className="bg-gradient-to-b pt-96 from-gray-800 to-black w-full h-screen">
    <div name="experience" style={{backgroundColor: props.mode==='light'?'#dcfce7':'#18181b', color: props.mode==='light'?'black':'#fef08a'}}>
      {/* <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"> */}
      <div className="justify-center flex flex-col mx-auto w-full h-full" style={{backgroundColor: props.mode==='light'?'#dcfce7':'#18181b', color: props.mode==='light'?'black':'#fef08a'}}>
        <div className="p-2  mx-4">
            <p className="text-4xl font-bold pt-60 mt-60 border-b-4 inline border-gray-500 p-2">Experience</p>
            <p className="py-6 ">These are the technologies i have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {experience.map(({id, src,title,style})=>(
             <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
             <img src={src} alt="" className="w-20 mx-auto" />
             <p className="mt-4">{title}</p>
         </div>
            ))}
            {/* <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                <img src={html} alt="" className="w-20 mx-auto" />
                <p className="mt-4">HTML</p>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Experience
