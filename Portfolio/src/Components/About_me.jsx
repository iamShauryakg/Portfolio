
import Resume from '../assets/Resume.pdf'

function About_Me() {

  return (
    <section id="about" >
      
        <div className="mt-8 w-full my-auto p-4 md:p-8 lg:p-16">
          <div className="flex flex-col sm:w-[75%] mx-auto  justify-center">
              <div className="text-left  ">
                    <h2 className="sm:eff text-4xl text-center font-bold text-blue-700">About Me</h2>
                      <p className='sm:eff mt-5 text-center text-lg'>
                          Full Stack Web Developer  with a keen interest in crafting visually appealing and highly
                          functional websites. With a solid foundation in HTML, CSS, Bootstrap, Tailwindcss, React, Python, and Django, I strive to
                          create seamless user experiences and bring innovative ideas to life.
                      </p>
                      <div className="text-center text-lg-start mt-4"><button className="bg-blue-700 rounded border-4 border-white  p-3 cursor-pointer hover:border-blue-700  hover:bg-white hover:text-blue-700 sm:eff transition-all duration-300">
                        <a href={Resume} download="Resume">
                        Download Resume
                        </a>
                      
                      </button>
                      </div>

              </div>

              <div className="flex flex-col w-full items-center gap-6 md:mx-0  lg:flex-row sm:justify-between mt-10" >

                  <div className="sm:eff border-4 rounded-2xl p-5 w-[350px] sm:w-[500px] sm:h-[500px] hover:scale-105 transition-all duration-300 ">
                      <h3 className="text-3xl text-blue-700 font-semibold">Education</h3>
                      <div className="mt-4 px-4">
                          <h6>• <span className='underline text-[15px] md:text-[20px]'>Master of Computer Applications (MCA) </span> </h6>
                          <div className=" items-center ml-5 text-[14px] md:text-[16px]">
                            <h6>IFTM University <span className='text-[12px] pt-[-5px] ml-2'>2023 - 2025</span></h6>
                            
                                <p>
                                Grade : 8.68 CGPA <br/>
                                </p>
                        </div>
                      </div>

                      <div className="mt-4 px-4">
                          <h6>• <span className='underline text-[15px] md:text-[20px]'>Bachelor of Computer Applications (BCA) </span> </h6>
                          <div className=" items-center ml-5 text-[14px] md:text-[16px]">
                            <h6>IFTM University <span className='text-[12px] pt-[-5px] ml-2'>2020 - 2023</span></h6>
                            
                            <p>
                            Grade : 8.92 CGPA <br/>
                            </p>
                        </div>
                          
                      </div>
                      <div className="mt-4 px-4">
                          <h6>• <span className='underline text-[15px] md:text-[20px]'>Intermediate </span> </h6>
                          <div className=" items-center ml-5 text-[14px] md:text-[16px]">
                            <h6>H.S.S. Public School <span className='text-[12px] pt-[-5px] ml-2'>2019 - 2020</span></h6>
                            
                            <p>
                            Grade : 78%<br/>
                            </p>
                        </div>
                          
                      </div>
                      <div className="mt-4 px-4">
                          <h6>• <span className='underline text-[15px] md:text-[20px]'>High School </span> </h6>
                          <div className=" items-center ml-5 text-[14px] md:text-[16px]">
                            <h6>H.S.S. Public School <span className='text-[12px] pt-[-5px] ml-2'>2017 - 2018</span></h6>
                            
                            <p>
                            Grade : 58%<br/>
                            </p>
                        </div>
                          
                      </div>
                  </div>

                  <div className="sm:eff border-4 rounded-2xl p-5 w-[350px] sm:w-[500px] sm:h-[500px] hover:scale-105 transition-all duration-300 ">
                      <h3 className="text-3xl text-blue-700 font-semibold">Experience</h3>
                      <div className="expe mt-4 px-4">
                          <h6><span>•</span> Django Intern</h6>
                          <div className="d-flex align-items-center mt-3">

                              <div className="ms-2 date">Jun 2025 - Sep 2025</div>
                          </div>
                          <div className="mt-4">
                              <h6>The Enterprenuere Network</h6>
                              <p>
                                  During my internship at "The Enterprenuere Network" as a Django intern, I Deployed 3+ projects successfullly and gained hands-on experience with git/Github and deployments tools,
                             </p>
                             <br />
                             <p>
                                I developed backend features with Django and REST APIs, and integrated them with React.js frontends to create dynamic web applications.
                             </p>
                             <br />
                             <p>
                                I also worked as acting project leader, managing task distribution, code reviews, and ensuring timely delivery.
                             </p>
                              <div id="skillsss"></div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
        </div>
    </section>
  )
}

export default About_Me;
