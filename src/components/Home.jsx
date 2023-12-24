import React, {useState}from 'react';
import sanddev from '../assets/sanddev.jpg';
import {Link} from "react-scroll";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';

const Home = (props) => {
    const [textColor, setTextColor] = useState('blue');
  return (
    // <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800" >
    <div name="home"  style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}>
     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-24">
            <h2 className="text-white pt-10 text-4xl sm:text-5xl font-bold md:w-full">
            
                {/* I'm a FullStack Developer */}

                {/* to give fix size to color and type animation so that layout will not shift */}
           <div style={{height: '70px', width:'300px'}}>   
                <div
      style={{
        fontSize: '35px',
        color: textColor,
        /* when working without ref and classNames, the manipulated style needs to be
         applied to the parent element, because the TypeAnimation component is perma-memoized */
      }}
    >
      <TypeAnimation
        sequence={[
          'Front End Developer',
          1500,
          () => setTextColor('aqua'),
          'React, Nextjs, Javascript',
          1500,
          () => setTextColor('deeppink'),
          'Tailwindcss, Bootstrap,Css,Html',
          1500,
          () => setTextColor('darkkhaki'),
          '',
        ]}
        repeat={Infinity}
      />
    </div>
    </div> 
    
    <button className="text-xs"
      onClick={() => {
        const items = [
          'blue',
          'green',
          'purple',
          'pink',
          'brown',
          'darkmagenta',
          'darksalmon',
          'dodgerblue',
          'firebrick',
          'darkviolet',
        ];
        setTextColor(items[Math.floor(Math.random() * items.length)]); // set random color
      }}
    >
      Change Color
    </button>
            </h2>
            <p className=" text-gray-500  py-4 max-w-md" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}>
            <span className="text-2xl text-blue-300 mr-2">Front End Developer<span className="text-xl text-pink-900 mx-1">(Reactjs)</span></span> 
                I have Degree and Three Years Engineering Diploma in IT. Passionate about learning web development or working as a web developer, Coding is my hobby. And want to learn all my life.

            </p>
            <div className="flex">
            <div>
              <div className="text-[20px] font-tertiary text-gradient mb-2 text-blue-300">
<CountUp start={0.1} end={0.6} duration={5}/>
              </div>
              <div className="font-primary text-sm tracking-[1px] mx-2 text-white" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}>
                .6 month <br/>
                Experience
              </div>
            </div>
            <div>
              <div className="text-[20px] font-tertiary text-gradient mb-2  mx-2 text-blue-500">
 <CountUp start={0} end={5} duration={10}/>
              </div>
              <div className="font-primary text-sm mr-3 tracking-[1px] text-white" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}>
                Years, <br/>
                Education (IT)
              </div>
            </div>
            <div>
              <div className="text-[20px] font-tertiary text-gradient mb-2 mx-3 text-pink-500">
<CountUp start={0} end={11} duration={15}/>
              </div>
              <div className="font-primary text-sm  tracking-[1px] text-white" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}>
                 <br/>
                Projects Completed
              </div>
            </div>
            </div>
            <div>
                <Link to="portfolio" className="  group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span> 
                   
                </Link>
            </div>
        </div>
        <div>
            <img src={sanddev} alt="my profile" className="rounded-2xl hover:scale-105 duration-500 w-60 h-60 mx-auto  md:w-full pl-36"/>
        </div>
     </div>
    </div>
  )
}

export default Home;
