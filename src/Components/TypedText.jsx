import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["C++ Programmer", "Python Programmer", "Full Stack Developer"],
			startDelay: 1000,
			typeSpeed: 50,
			backSpeed: 25,
			backDelay: 1000,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return <span ref={el} />;
};

export default TypedText;
