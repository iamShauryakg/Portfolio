
import background from '../assets/background.png';
import  profile2 from '../assets/profile2.jpg'
import Navbar from './Navbar';
import TypingText from './Typing_texteff';




const Header_part = () => {



  return (

    <div className='bg-no-repeat bg-center bg-cover overflow-hidden  sm:h-screen'
          style={{ backgroundImage: `url(${background})` }}>

        <Navbar />

        <div className="lg:relative  flex flex-wrap justify-center sm:justify-between items-center   lg:top-[25%] sm:w-[80%] sm:ml-[100px]  lg:ml-[150px] h-auto">
          <div className="w-[650px] h-[200px]">

            <div className="text-white mt-15 sm:mt-0 text-[18px] md:text-[25px] text-center sm:text-left font-light ">
              Hello,<span className='text-[rgb(209,49,49)]  '> It's me</span>
            </div>
            <div className="md:text-5xl text-[#e0dede] mt-[-10px] text-center md:text-left">Shaurya Kumar Gupta</div>
            <div className="text-[25px] md:text-[40px] text-[#73bde2] text-center md:text-left flex flex-col md:flex-row items-center my-0 md:ml-[22px] mt-4">
              <span className='center md:left'>And, I'm a</span>

              <div className="mx-2  text-[rgb(56,233,174)] font-semibold md:text-left">
                <TypingText
                  words={["Software Developer", "Web Developer", "Full Stack Developer", "Backend Developer"]}
                  speed={50}
                  deleteSpeed={10}
                  pause={1200}
                  />
              </div>
            </div>
          </div>

        <div className="hidden sm:block  sm:w-[280px] pt-9 h-[70%] ">
          <img src={profile2} alt="profile2" className="rounded-xl border-10 border-solid border-white hover:translate-x-[-50px] transition-all duration-300" />
        </div>
        </div>

        </div>
    
  )
}

export default Header_part