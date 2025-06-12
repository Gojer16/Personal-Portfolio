import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { useForm, ValidationError } from "@formspree/react";


type ContactFormProps = {};


  const ContactForm: React.FC<ContactFormProps> = () => {
  const [state, handleSubmit] = useForm("xvgrkdkl");

    if (state.succeeded) {
    return (
      <div className="py-24 translate-y-4 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Thanks for your message! 🙏
            </h3>
            <p className="text-gray-700">
              I’ll get back to you as soon as I can.
            </p>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 ">
        <h2 className="text-[1rem] flex justify-center gap-2 dark:text-secondary-light"><RiContactsLine className="m-0.5 hover:text-white"/>
        Let's Innovate Together!</h2>
        <p className="pt-6 pb-6 text-white max-w-2xl text-center m-auto text-[1.5rem] font-medium">
        Passionate about turning <strong className="text-secondary">ethical code</strong> into 
    <strong className="text-secondary"> real-world impact</strong>. 
    Share your vision below - let's build tomorrow's solutions today.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-[1rem] gap-2 text-secondary-dark dark:text-secondary-light">
          <RiContactsLine className="hover:text-white"/>
            Contact Me!
          </h2>
          <p className="max-w-sm mt-4 mb-4 dark:text-white">
          Whether it's a <strong className="text-secondary">complex challenge</strong> or 
            <strong className="text-secondary"> innovative spark</strong>, I'm here to help 
            turn ideas into reality. 24/7 idea hotline:     
          </p>
          <div className="flex items-center mt-8 space-x-2 dark:text-secondary-light">
            <span className="text-1xl">🌍</span>
            <span>Digital Nomad (Currently orbiting Earth)</span>
          </div>
          <div className="flex items-center mt-2 space-x-2 dark:text-secondary-light hover:text-white">
          <span className="text-1xl">📩</span>
            <a href="mailto:operation927@gmail.com">operation927@gmail.com</a>
          </div>
          <div className="flex items-center mt-2 space-x-2 dark:text-secondary-light">
          <span className="text-1xl">⌚</span>
          <span>Availability: When inspiration strikes</span>
          </div>
        </div>
        <div>
          <form form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="_gotcha"
              autoComplete="off"
              tabIndex={-1}
              className="hidden"
            />
            <input type="checkbox" className="hidden" name="botcheck" />
            <div className="mb-5">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name......"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-2xl outline-none text-secondary-dark dark:text-white bg-background-light dark:bg-background-dark border-[#e0b0ff] focus:border-white text-sm sm:text-base"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div className="mb-5">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email Address......"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-2xl outline-none text-secondary-dark dark:text-white bg-background-light dark:bg-background-dark border-[#e0b0ff] focus:border-white text-sm sm:text-base"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                required
                placeholder="Your Message......"
                className="w-full px-4 py-3 border-2 rounded-2xl outline-none text-white bg-background-light dark:bg-background-dark border-[#e0b0ff] focus:border-white h-36 text"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white rounded-2xl hover:bg-secondary-light px-7 dark:text-white hover:bg-[#5a32a3] active:bg-[#4a227d] transition-all duration-200 shadow-md border-2 active:scale-105">
              {state.submitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
        
      </div>
       <div className="text-center text-white/50 text-sm pb-8">
        <p>P.S. No chatbots here - just human connection 🤖 → ❤️</p>
      </div>
    </div>
  );
};

export default ContactForm;