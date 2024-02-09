import { motion } from "framer-motion";

const WithTransition = (OriginalComponent) => {
	const WT = () => {
		return (
			<div>
				<OriginalComponent />
				<motion.div
					className="slide-in"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 0 }}
					exit={{ scaleX: 1 }}
					transition={{
						duration: 1,
						transition: "transform cubic-bezier(0.5, 0, 0.75, 0);",
					}}
				/>
				<motion.div
					className="slide-out"
					initial={{ scaleX: 1 }}
					animate={{ scaleX: 0 }}
					exit={{ scaleX: 0 }}
					transition={{
						duration: 1,
						transition: "transform  cubic-bezier(0.5, 0, 0.75, 0);",
					}}
				/>
			</div>
		);
	};
	WT.displayName = "WithTransition";
	return WT;
};
export default WithTransition;
