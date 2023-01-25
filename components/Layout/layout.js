import Nav from "./Navigation";

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>
		</>
	);
}
