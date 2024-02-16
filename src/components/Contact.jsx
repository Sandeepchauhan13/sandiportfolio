import React from 'react'

const Contact = (props) => {
  
  return (
    <>
     {/* <div name="contact" className="w-full bg-gradient-to-b from-black pt-36 to-gray-800 p-4 text-white">  */}
     <div name="contact" style={{backgroundColor: props.mode==='light'?'#dcfce7':'#18181b', color: props.mode==='light'?'black':'#fef08a'}}> 
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold border-b-4 inline border-gray-500">Contact</p>
            <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
       {/* <form className="" action="POST" method="flex flex-col "> */}
        <form 
            action="https://getform.io/f/5dfa95f2-31ab-430d-bc34-129bfbeedc1c"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-black border-3 rounded-md text-white focus:outline-blue-500"
              // style={{backgroundColor: props.mode==='light'?'#dcfce7':'#18181b', color: props.mode==='light'?'black':'#fef08a'}}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-black border-3 rounded-md text-white focus:outline-blue-500"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-black border-3 rounded-md text-white focus:outline-blue-500"
            ></textarea>

            <button   className="text-white bg-gradient-to-b from-cyan-300 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
       </form>
        </div>
      </div>
    </div> 




    
    </>
  )
}

export default Contact;
