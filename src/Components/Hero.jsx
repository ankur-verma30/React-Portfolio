import { HERO_CONTENT } from "../constants";
import myPhoto from "../assets/myPhoto.jpg";
import { motion } from "framer-motion";
import TypedText from "./TypedText";

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
	return (
		<div className=" border-neutral-900 pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<motion.h1
							variants={container(0.3)}
							initial="hidden"
							animate="visible"
							className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
							Ankur Verma
						</motion.h1>
						<motion.span
							variants={container(0.7)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
							<TypedText/>
						</motion.span>
						<motion.p
							variants={container(1.2)}
							initial="hidden"
							animate="visible"
							className="my-2 max-w-xl py-6 font-light tracking-tighter">
							{HERO_CONTENT}
						</motion.p>
					</div>
				</div>

				<div className="w-full lg:w-1/3 lg:p-8">
					<div className="flex justify-center">
						<motion.img className="rounded-2xl" initial={{opacity:0, x:100}} animate={{ x:0,opacity:1}} transition={{duration:1.2, delay:1.5}} src={myPhoto} alt="profile photo" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
