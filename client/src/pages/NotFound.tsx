import { NavLink } from "react-router";

const NotFound = () => (
	<main className="min-h-screen flex flex-col justify-center items-center gap-8 text-center">
		<h1 className="text-gray-600 text-2xl font-secondary font-bold sm:text-4xl">404 - PAGE NOT FOUND!</h1>
		<NavLink
			to="/home"
			replace
			className="btn"
		>
			Go back home
		</NavLink>
	</main>
);

export default NotFound;
