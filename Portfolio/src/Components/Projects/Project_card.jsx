
import girl from "../../assets/girl.png";

const Project_card = ({ title, description, img, link }) => {
  return (
    <div className=" p-4 rounded  transition-transform duration-300 ease-in-out md:w-[400px] w-[350px]  ">
      <div className='flex flex-col border-2 rounded  text-center items-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] '>

        <img src={img} alt="Project Screenshot" className="w-[400px] h-[250px] object-cover" />

        <h3 className="text-2xl font-semibold py-2 text-[aqua]">{title}</h3>

        <span className="text-[16px] px-3 pb-4">{description}</span>

          <a href={link} className="bg-green w-full text-white border-2 rounded p-4  hover:bg-green-600 transition duration-300 ease-in-out"> 
            <div className="text-center text-lg font-medium ">
                go to <span className="text-gray-500"> &gt;&gt; </span>
            </div>
          </a>

      </div>
    </div>
  )
}

export default Project_card
