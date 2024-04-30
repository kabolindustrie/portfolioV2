"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const text = "Say Hello"
return (
  <motion.div
  className='h-full'
  initial={{ y:"-200vh" }}
  animate={{ y:"0%" }}
  transition={{ duration: 1 }}
  >
   <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
    {/* TEXT CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center text-6xl'>
      <div className=''>
        {text.split("").map((letter, index) => (
          <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.1,
          }}
          key={index}>{letter}</motion.span>
        ))}
        😊
      </div>
    </div>
    {/* FORM CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'>
      <span>Dear Lama Dev</span>
      <textarea rows="6" className="bg-transparent border-b-2 border-b-black outline-none resize-none" name="user_message"/>
      <span className="bg-transparent border-b-2 border-b-black outline-none">My mail address is: </span>
      <input type="text"
      name="user_email" />
      <span>Regards</span>
      <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
      {success && <span className="text-green-500 font-semibold">Message sent successfully</span>}
      {error && <span className="text-red-500 font">Message not sent</span>}
    </div>
   </div>
  </motion.div>
  )
}

export default ContactPage;
