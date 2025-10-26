import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import background from '../assets/background.png';
import  profile2 from '../assets/profile2.jpg'
import  logo_shaurya from '../assets/logo-shaurya.png'
import TypingText from './Typing_texteff';


function Navbar() {
  useEffect(() => {
    document.title = "Portfolio"
  });

  const all_Links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skill", href: "#skills" },
    { name: "Projects", href: "#" },
    { name: "Achivements", href: "#" },
    { name: "Resume", href: "#" },
    { name: "Contact Me", href: "#" },
  ]
  
  
  return (
    <header id="home" className="h-screen max-w-screen">
        <div className='bg-no-repeat bg-center bg-cover overflow-hidden h-screen'
             style={{ backgroundImage: `url(${background})` }}>

           <nav className='fixed py-[10px] px-0 flex bg-[rgba(0,0,0,0.333) w-[100%] z-[99]' >
            <div className="w-[90%] flex justify-between items-center px-[10px] py-[30px]">
                <div className="">
                    <img src={logo_shaurya} alt="logo" className='w-[200px] h-auto' />
                </div>
                <div className="">
                    <ul className='inline-flex'>
                        {all_Links.map((link) => (
                            <li  key={link.name} className='list-none ml-[20px]'> 
                              <a href={link.href}  className=' no-underline text-xl text-white font-medium px-2.5 py-1.5 rounded transition-all duration-300 ease-in-out hover:text-black hover:bg-white' >
                                {link.name}
                              </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    <div className="relative top-[33%] left-[5%] z-2 ">
      <div className="text-[#fff] text-[25px] ">Hello,<span className='text-[rgb(209,49,49)] text-[27px]'> It's me</span></div>
      <div className="text-[30px] text-[#e0dede]">Shaurya Kumar Gupta</div>
      <div className="text-[40px] text-[#73bde2] flex my-0 mx-[10px]">
        <span>And, I'm a</span>
        <div className="typingtext ml-2">
          <TypingText 
            words={["Software Developer . . .", "Web Developer . . .", "Full Stack Developer . . .", "Django Developer . . ."]}
            speed={50}
            deleteSpeed={10}
            pause={1200}
          />
        </div>
      </div>
    </div>

    <div className="w-[35%] h-[60%] absolute bottom-[140px] images1 right-[150px]">
      <img src={profile2} alt="profile2" className="" />
    </div>

    </div>
</header>

    )
}
export default Navbar;
