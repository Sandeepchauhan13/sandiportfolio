import React from 'react'

const Contact = (props) => {
  return (
    // <div name="contact" className="w-full bg-gradient-to-b from-black to-gray-800 pt-36 p-4 text-white">
    <div name="contact"  style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl border-b-4 font-bold inline border-gray-500">Contact</p>
            <p className="py-6">Submit the form below to get in touch with me </p>
        </div>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/b4a92732-73f5-46c6-b20c-e80d1aab7008" method="POST" className="flex flex-col w-full md:w-1/2">
<input type="text" name="name" placeholder='enter you name'
// className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"/>
className="bg-transparent p-2 border-2 border-blue-300 rounded-md text-white focus:outline-none" style={{color: props.mode==='light'?'black':'white'}}/>
<input type="email" name="email" placeholder="enter your email" 
className="bg-transparent my-4 p-2 border-2 border-blue-300 rounded-md text-white focus:outline-none" style={{color: props.mode==='light'?'black':'white'}}/>
           <textarea
              name="message"
              placeholder="Enter your message"
              rows="10" style={{color: props.mode==='light'?'black':'white'}}
              className="p-2 bg-transparent border-2 border-blue-300 rounded-md text-white focus:outline-none"
            ></textarea>
           <button className="text-white bg-gradient-to-b from-cyan-500
           to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
           rounded-md hover:scale-110 duration-300" style={{color: props.mode==='light'?'black':'white'}}>Let's Talk</button>
            </form>

        </div>
      </div>
      <footer>
        <div className="text-center text-blue-400">copyright &copy; - <span className="text-red-400">SandeepChauhan</span>  - All rights reserved</div>
    </footer>
    </div>
  )
}

export default Contact;
