import Project_card from "./Project_card";
import file_tranfer_img from '../../assets/file_transfer.jpg'

const Projects = () => {
    const data = [
        {
            title: "portfolio website",
            description: "A personal portfolio website to showcase my projects and skills.",
            img: "https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg",
            link: '#'
        },
        {
            title: "File transfer app",
            description: "A web application where user can upload the file and share genereated link with other to download it.",
            img: `${file_tranfer_img}`,
            link: "https://file-transfer-eta.vercel.app/"
        },
        {
            title: "e-commerce platform",
            description: "an online store for various products with filltering and search features.",
            img: "https://th.bing.com/th/id/OIP.TwV7yH2pyK-1moL8P6wlhgHaEH?w=284&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.1&pid=1.7&rm=3",
            link: "#"
        },
        {
            title: "blog website",
            description: "A bloggin platform where user can read and write articles on various topics.",
            img: "https://th.bing.com/th/id/OIP.UQmdUO1qDG-k508SYNsCSwHaED?w=290&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.1&pid=1.7&rm=3",
            link: "#"
        },
        {
            title: "data visualization dashboard",
            description: "A dashboard to visualize complex datas average through interactive charts and graphs.",
            img: "https://th.bing.com/th/id/OIP.jj-chsA9PZgl-DNBoVh0ngHaEw?w=267&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.1&pid=1.7&rm=3",
            link: "#"
        },

    ]

    return (
        <section id="projects" className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] w-full text-white py-5">
            <div className="flex flex-col items-center justify-center  p-4 w-full">
                <h2 className="text-5xl text-green-500 font-bold py-9">My Projects</h2>

                <div className="md:w-[80%] flex justify-center md:justify-between  items-center">
                    <div className="flex flex-wrap gap-8 justify-center ">
                        {data.map((project, index) => (
                            <Project_card key={index} title={project.title} description={project.description} img={project.img} link={project.link} />
                        ))}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;