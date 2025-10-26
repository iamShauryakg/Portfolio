import { Link } from 'react-router-dom';
import  logo_shaurya from '../assets/logo-shaurya.png'



function Navbar() {


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

           <nav className=' lg:fixed  px-0 flex bg-[rgba(0,0,0,0.333)] h-40 sm:h-25 w-full z-[99]' >
            <div className="w-[90%] flex justify-between items-center ">
                <div className="hidden sm:block">
                    <img src={logo_shaurya} alt="logo" className='w-[200px] h-auto' />
                </div>
                <div className="flex justify-center">
                    <ul className='inline-flex flex-wrap gap-2 justify-center items-center '>
                        {all_Links.map((link) => (
                            <li  key={link.name} className='list-none ml-[20px]'> 
                              <a href={link.href}  className=' no-underline text-xl text-white font-medium px-2.5 py-1.5 rounded transition-all duration-300 ease-in-out hover:text-blue-700 ' >
                                {link.name}
                              </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    

    )
}
export default Navbar;
