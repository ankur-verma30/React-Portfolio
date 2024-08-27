import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const Contact = () => {
	return (
		<div className=" border-neutral-900 pb-4">
			<motion.h1  whileInView={{ opacity: 1,y:0 }} initial={{ opacity: 0,y:-100 }} transition={{ duration: 1.5 }} className="my-10 text-center text-4xl">Contact Me</motion.h1>
			<div className="text-center tracking-tighter">
				<p className="my-4 ">Address : {CONTACT.address}</p>
				<p>
					E-mail :
					<a href="#" className="border-b">
						{CONTACT.email}
					</a>
				</p>
			</div>
		</div>
	);
};
export default Contact;
