import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
	return (
		<nav className=" mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				<img className="mx-2 w-10" src={logo} alt="logo" />
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<span className=" rounded bg-stone-100 px-2 py-1 text-sm font-medium text-purple-800">
					<a href="https://drive.google.com/file/d/15MlfCPQjDx3N2JUjQtrtSbYfZ_jVaHXI/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Resume</a></span>
				<a href="https://www.linkedin.com/in/ankur-verma30/"  target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
				<a href="https://github.com/ankur-verma30" target="_blank"rel="noopener noreferrer"><FaGithub /></a>
				<a href="https://x.com/Ankur_Codez07" target="_blank"rel="noopener noreferrer"><FaSquareXTwitter /></a>
			</div>
		</nav>
	);
};
export default Navbar;
