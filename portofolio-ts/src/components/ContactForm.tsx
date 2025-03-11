import React from "react";
import { RiContactsLine } from "react-icons/ri";


type ContactFormProps = {};

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <div className="">
        {/*Div for title and descp*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 ">
        {/*Title*/}
        <h2 className="text-[1rem] flex justify-center font-extralight gap-2 dark:text-secondary-light"><RiContactsLine className="m-0.5 hover:text-white"/>
        Let's Innovate Together!</h2>
        {/*Description*/}
        <p className="pt-6 pb-6 text-white max-w-2xl text-center m-auto text-[1.5rem] font-medium">
        Passionate about turning <strong className="text-[#9B4AFF]">ethical code</strong> into 
    <strong className="text-[#9B4AFF]"> real-world impact</strong>. 
    Share your vision below - let's build tomorrow's solutions today.
        </p>
      </div>
        {/*Div for left information*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 gap-8">
        {/*Div for Information*/}
        <div>
          <h2 className="text-[1rem] font-extralight gap-2 text-secondary-dark dark:text-secondary-light">
          <RiContactsLine className="hover:text-white"/>
            Contact Me!
          </h2>
          <p className="max-w-sm mt-4 mb-4 dark:text-white">
          Whether it's a <strong className="text-[#9B4AFF]">complex challenge</strong> or 
            <strong className="text-[#9B4AFF]"> innovative spark</strong>, I'm here to help 
            turn ideas into reality. 24/7 idea hotline:     
          </p>
          <div className="flex items-center mt-8 space-x-2 dark:text-secondary-light">
            <span className="text-1xl">🌍</span>
            <span>Digital Nomad (Currently orbiting Earth)</span>
          </div>
          <div className="flex items-center mt-2 space-x-2 dark:text-secondary-light hover:text-white">
          <span className="text-1xl">📩</span>
            <a href="mailto:gojer@orlandoascanio.com">gojer@orlandoascanio.com</a>
          </div>
          <div className="flex items-center mt-2 space-x-2 dark:text-secondary-light">
          <span className="text-1xl">⌚</span>
          <span>Availability: When inspiration strikes</span>
          </div>
        </div>
        {/*Div for Forms*/}
        <div>
          <form>
            <input type="checkbox" className="hidden" name="botcheck" />
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name......"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-2xl outline-none text-secondary-dark dark:text-white bg-background-light dark:bg-background-dark border-[#e0b0ff] focus:border-white text-sm sm:text-base"
                name="name"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Email Address......"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-2xl outline-none text-secondary-dark dark:text-white bg-background-light dark:bg-background-dark border-[#e0b0ff] focus:border-white text-sm sm:text-base"
                name="email"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Your Message......"
                className="w-full px-4 py-3 border-2 rounded-2xl outline-none text-white bg-background-light dark:bg-background-dark border-[#e0b0ff] focus:border-white h-36 text"
                name="message"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white bg-[#9B4AFF] rounded-2xl hover:bg-secondary-light px-7 dark:text-white hover:bg-[#5a32a3] active:bg-[#4a227d] transition-all duration-200 shadow-md border-2 active:scale-105">
              Send Message
            </button>
          </form>
        </div>
        
      </div>
       {/* Playful Footer Note */}
       <div className="text-center text-white/50 text-sm pb-8">
        <p>P.S. No chatbots here - just human connection 🤖 → ❤️</p>
      </div>
    </div>
  );
};

export default ContactForm;