import { useEffect } from 'react';
import profile3 from '../assets/profile3.jpg'
import aboutback from '../assets/aboutme.jpg'

function About_Me() {
    useEffect(() => {
        document.title = "Portfolio"
    }) 

  return (
    <section id="about" className="h-screen w-[100%] bg-[#222d33]" >
        <div className="bg-no-repeat bg-center bg-cover overflow-hidden h-screen"
        style={{ backgroundImage: `url(${aboutback})` }}
        >
            <div className="relative flex h-[100%] w-full items-center flex-col ">
                <div className="title w-auto py-[30px] text-[40px] font-medium text-[rgb(204,113,113)] relative">
                    <h2>About Me</h2>
                    <span className="absolute left-0 bottom-0 h-[5px] w-[100%] bg-gradient-to-r from-[rgb(119,55,55)] to-[rgb(64,201,30)]"></span>
                </div>
    
                <div className="absolute flex h-[100vh] w-[100%] justify-around items-center">
                    <div className="image2">
                        <img src={profile3} alt="about me image" />
                    </div>
                    <div className="relative flex flex-col w-[50%] text-[18px] text-[#beb7b7]">
                        <div className="aname">I am Shaurya Kumar Gupta</div>
                        <div className="ajob">  Software engineer </div>
                        <br/>
                        <div className="bg-black/50  ">
                            I am Computer engineering student. <br/>
                            i am very passionate and hardworking computer engineering student <br/>
                            lokking forward to became a skilled Software Engineer and serve my excelence to the company. <br/>
                            I am euthusiatic person and love to learn new things. <br/>
                            The field of technology always amazes me that's why i choose the field of computer engineering to follow my passion.
                            <br/>
                            <br/>
                            Email : iamshauryakgupta@gmail.com <br/>
                            Contact No: 9528205752
                            Birth Place: Hasanpur, Uttar Pradesh - 244241
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About_Me;
