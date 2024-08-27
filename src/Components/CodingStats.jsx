import { CODING_STATS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
	return (
		<div className=" border-neutral-900 pb-4">
			<motion.h1  whileInView={{ opacity: 1,y:0 }} initial={{ opacity: 0,y:-100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl"> Coding Statistics</motion.h1>
			<div className="">
				{CODING_STATS.map((code, index) => (
					<div key={index} className="mb-8  flex flex-wrap lg:justify-center">
						<motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.2 }} className="w-full lg:w-1/4">
							<img
								src={code.image}
								width={100}
								height={100}
								alt={code.title}
								className="mb-6 rounded"
							/>
						</motion.div>
						<motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.2 }} className="w-full max-w-xl lg:w-3/4">
							<h6 className="mb-2 font-semibold">Problem Solved : {code.problemsSolved}</h6>
                            <p className="mb-4 text-neutral-400">{code.discription}</p>
							<span className="mr-2 mb-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"><a href={code.profileLink} target="_blank" rel="noopener noreferrer">Profile Link</a></span>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Projects;
