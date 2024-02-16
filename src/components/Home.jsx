import React, {useState} from 'react';
import sanddev from '../assets/sanddev.jpg';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';
import{Link} from "react-scroll";
// import {useInView} from 'react-intersection-observer';

import CountUp from 'react-countup';
const Home = (props) => {
//  const [ inView] = useInView({
//   thresold: 0.5,
//  });
  
  const [textColor, setTextColor] = useState('deeppink');
  
  
  return (
    // <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
    <div name="home" style={{backgroundColor: props.mode==='light'?'#dcfce7':'#18181b', color: props.mode==='light'?'black':'#fef08a'}}>
     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-24">
            <h3 className="text-white text-3xl sm:text-7xl my-3 font-bold md:w-full">
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
          'Full Stack Developer',
          800,
          () => setTextColor('aqua'),
          'React, Nextjs, Javascript, Nodejs',
          800,
          () => setTextColor('deeppink'),
          'Tailwindcss, Bootstrap,MongoDb, Html, Css',
          1000,
          () => setTextColor('darkkhaki'),
          '',
        ]}
        repeat={Infinity}
      />
    </div>
    </div>
    <button  style={{
          color: props.mode==='light'?'black':'#fef08a'}}  className="text-sm"
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
  
            </h3>
            
            {/* <p className=" text-gray-500  py-4 max-w-md"> */}
            <p className=" py-4 max-w-md" style={{color: props.mode==='light'?'black':'#fef08a'}}>
              {/* <span className="text-2xl text-blue-300 mr-2">Full Stack Developer</span>  */}
              <span className="text-2xl mr-2"style={{
          color: props.mode==='light'?'#db2777':'white'}}>Full Stack Developer</span> 
                I have Degree and  3 years Engineering Diploma in Computer Science.
                Passion for Web development. I want to learn all my life.
            
            </p>

            {/* counting for education experience and projects  */}
            <div className="flex">
            <div>
              <div className="text-[20px] font-tertiary text-gradient mb-2 text-blue-300">
<CountUp start={0} end={.6} duration={2}/>
              </div>
              {/* <div className="font-primary text-sm tracking-[1px] mx-2 text-white"> */}
              <div className="font-primary text-sm tracking-[1px] mx-2" style={{color: props.mode==='light'?'black':'#fef08a'}}>
                Months of <br/>
                Experience
              </div>
            </div>
            <div>
              <div className="text-[20px] font-tertiary text-gradient mb-2  mx-2 text-blue-500">
 <CountUp start={0} end={5} duration={8}/>
              </div>
              {/* <div className="font-primary text-sm mr-3 tracking-[1px] text-white"> */}
              <div className="font-primary text-sm mr-3 tracking-[1px]" style={{color: props.mode==='light'?'black':'#fef08a'}}>
                Years, <br/>
                Education (IT)
              </div>
            </div>
            <div>
              <div className="text-[20px] font-tertiary text-gradient mb-2 mx-3 text-pink-500">
<CountUp start={0} end={13} duration={13}/>k+
              </div>
              {/* <div className="font-primary text-sm  tracking-[1px] text-white"> */}
              <div className="font-primary text-sm  tracking-[1px]" style={{color: props.mode==='light'?'black':'#fef08a'}}>
                 <br/>
                Projects Completed
              </div>
            </div>
            </div>
            <div>
                <Link to="portfolio"  smooth duration={500} className="  group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                
                        </span> 
                   
                </Link>
            </div>
        </div>
        {/* <div>
            <img src={sanddev} alt="my profile" className="rounded-2xl mx-auto ml-36 w-40 h-40 md:w-full duration-200 hover:scale-105 mix-blend-lighten"/>
        </div> */}
        <div>
            <img src={sanddev} alt="my profile" className="rounded-t-lg hover:scale-105 duration-500  h-48 mx-auto  md:w-full pl-36"/>
        </div>

     </div>
    </div>
  )
}

export default Home;




