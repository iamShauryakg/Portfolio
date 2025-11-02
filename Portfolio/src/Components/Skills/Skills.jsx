import SkillsCard from "./Card"

function Skills() {
    const skillData = [{
        heading : "Frontend Development",
        skills : ["HTML", "Css", "JavaScript", "React", "TailwindCss"]
    },
    {
        heading : "Backend Development",
        skills : ["Python", "django", "NumPy", "Pandas"]
    },
    {
        heading : "Other Skills",
        skills : ["Git", "GitHub", "Sql", "mySql"]
    }

]

    return (
        <section className=" flex flex-col bg-black pt-10 pb-10 ">
                   <div className=" justify-center items-center w-[100px] m-auto text-[40px] font-medium text-[rgb(226,223,223)] relative">
                    <h2 className="text-center text-white" >Skills</h2>
                    <span className="absolute left-0 bottom-0 m-0 h-[5px] w-full bg-gradient-to-r from-[rgb(7,7,119)] to-[rgb(145,159,142)] "></span>
                </div>

                   <div className="flex flex-col md:flex-row justify-center  items-center mt-8 mb-8  p-4">
                       {skillData.map((skill, index) => (
                           <SkillsCard key={index} heading= {skill.heading} skills={skill.skills} />
                       ))}
                   </div>
        </section>
    )
}
 


export default Skills;