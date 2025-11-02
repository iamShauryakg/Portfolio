

const SkillsCard = ({ heading, skills }) => {
    return  (
        <>

            <div className=" w-[300px] h-auto bg-[rgb(24,24,24)] text-white m-4 border-3 border-white p-4 rounded-lg shadow-lg ">
                <div className=" mb-2">
                    <h2 className="text-center md:text-[22px] text-blue-700 font-bold">{heading} </h2>
                </div>

                <span className="block w-full bg-white h-0.5 "></span>

                <div className=''>
                    <ul className="flex flex-col gap-2  mt-4 max-w-[400px] m-auto text-[18px] ">
                        {skills.map((skill, index) => (
                            <li key={index} className="list-none ml-7">{skill}</li>
                        ))}
                    </ul>
                </div>

            </div>
             
        </>
    )
}

export default SkillsCard;