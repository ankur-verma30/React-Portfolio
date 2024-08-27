import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
	return (
		<div className=" border-neutral-900 pb-4">
			<motion.h1  whileInView={{ opacity: 1,y:0 }} initial={{ opacity: 0,y:-100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl"> Projects</motion.h1>
			<div className="">
				{PROJECTS.map((project, index) => (
					<div key={index} className="mb-8  flex flex-wrap lg:justify-center">
						<motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.2 }} className="w-full lg:w-1/4">
							<img
								src={project.image}
								width={150}
								height={150}
								alt={project.title}
								className="mb-6 rounded"
							/>
						</motion.div>
						<motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.2 }} className="w-full max-w-xl lg:w-3/4">
							<h6 className="mb-2 font-semibold">{project.title}</h6>
							<p className="mb-4 text-neutral-400">{project.description}</p>
							<span className="mr-2 mb-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"><a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a></span>
							<br />
							<br />
							{project.technologies.map((tech, index) => (
								<span
									key={index}
									className="mr-2 mb-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-">
									{tech}
								</span>
							))}
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Projects;
