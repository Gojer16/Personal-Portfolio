import React from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { TbBrandLeetcode } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <>

    <footer role="contentinfo" aria-label="Footer" className="site-footer w-full">
      <div className="pt-12 sm:pt-20 md:pt-40 lg:pt-60  flex items-center justify-center p-4 sm:p-6 md:p-8" id="footer-main">
      
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-secondary" id="contact-heading">Contact Me!</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Mail size={16} className='text-secondary' aria-hidden="true"/>
                <span className="text-sm sm:text-base"><a href='mailto:operation927@gmail.com' className='hover:text-[#9B4AFF]' aria-label="Email me at operation927@gmail.com">operation927@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone size={16} className='text-secondary' aria-hidden="true"/>
                <span className="text-sm sm:text-base"><a href='tel:+58-412-8449024' className='hover:text-[#9B4AFF]' aria-label="Call me at +58-412-8449024">+58-412-8449024</a></span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MapPin size={16} className='text-secondary' aria-hidden="true"/>
                <span className="text-sm sm:text-base" aria-label="Location">Currently Orbiting Earth <span role="img" aria-label="Earth">🌍</span></span>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-secondary" id="quick-links-heading">Quick Links</h3>
            <nav aria-labelledby="quick-links-heading">
            <ul className="space-y-1 sm:space-y-2 text-white">
              <li><a href="/" className="text-sm sm:text-base hover:text-[#9B4AFF] transition-colors" aria-label="Go to Home page">Home</a></li>
              <li><a href="/about" className="text-sm sm:text-base hover:text-[#9B4AFF] transition-colors" aria-label="Go to About Me page">About Me</a></li>
              <li><a href="/projects" className="text-sm sm:text-base hover:text-[#9B4AFF] transition-colors" aria-label="Go to Projects page">Projects</a></li>
              <li><a href="/skills" className="text-sm sm:text-base hover:text-[#9B4AFF] transition-colors" aria-label="Go to Skills page">Skills</a></li>
              <li><a href="/contact" className="text-sm sm:text-base hover:text-[#9B4AFF] transition-colors" aria-label="Go to Contact page">Contact</a></li>
            </ul>
            </nav>
          </div>

          <div className="space-y-3 sm:space-y-4 mt-6 lg:mt-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-semibold text-secondary" id="social-heading">Connect With Me!</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <a href="https://x.com/Gojer27" className="p-1.5 sm:p-2 bg-[#9B4AFF] rounded-full hover:bg-[#5a32a3] transition-colors duration-200" aria-label="Follow me on Twitter">
                <BsTwitterX size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" aria-hidden="true" />
              </a>
              <a href="https://github.com/gojer16" className="p-1.5 sm:p-2 bg-[#9B4AFF] rounded-full hover:bg-[#5a32a3] transition-colors duration-200" aria-label="Check out my GitHub profile">
                <Github size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/orlando-ascanio-52527b2a8/" className="p-1.5 sm:p-2 bg-[#9B4AFF] rounded-full hover:bg-[#5a32a3] transition-colors duration-200" aria-label="Connect with me on LinkedIn">
                <Linkedin size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" aria-hidden="true" />
              </a>
              <a href="https://www.paypal.com/paypalme/orlandodev" className="p-1.5 sm:p-2 bg-[#9B4AFF] rounded-full hover:bg-[#5a32a3] transition-colors duration-200" aria-label="View my LeetCode profile">
                <FaCcPaypal size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/lilgojer/" title="Instagram" aria-label="Instagram Profile" rel="noopener noreferrer" className='p-1.5 sm:p-2 bg-[#9B4AFF] rounded-full hover:bg-[#5a32a3] transition-colors duration-200'><BsInstagram className='sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary'/></a>
            </div>
          </div>
        </div>
      </div>
        <div className=' mx-auto p-30 grid-cols-1 text-center space-y-2' id="copyright-section">
            <p className='text-[1rem] font-bold text-primary'><span aria-label="Copyright">©</span> 2025. All Rights Reserved by Gojer.</p>
            <hr className='text-primary' aria-hidden="true"></hr>
            <div>
            <p className='text-xs sm:text-sm md:text-base lg:text-[1rem] font-bold text-primary'>Made with <span role="img" aria-label="love">❤️</span> by Gojer. Built with curiosity and a pinch of trial-and-error.</p>
          </div>
        </div>
        
      </footer>
    </>
  )
}

export default Footer