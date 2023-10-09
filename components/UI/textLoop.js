import React, { useState, useEffect, Fragment } from "react";
import Typist from "react-typist";

import ReactRotatingText from "react-rotating-text";

const TextLoop = () => {
	// const [count, setCount] = useState(1);

	// useEffect(() => {
	// 	// document.title = `You clicked ${count} times`;
	// 	console.log("Count: " + count);
	// 	setCount(1);
	// }, [count]);

	return (
		<Fragment>
			<h1>
				<ReactRotatingText
					typingInterval={50}
					items={[
						"UX-Designer",
						"UI-Designer",
						"Product Designer",
						"Human Researcher",
					]}
				/>
			</h1>
			{/* <p>Loop Text can be written bellow</p>
			{count ? (
				<Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
					<span> Your first text goes here</span>
					<Typist.Backspace count={20} delay={800} />
					<span> second text that replaces is here</span>
				</Typist>
			) : (
				""
			)}  */}
		</Fragment>
	);
};

export default TextLoop;
