import { Link } from "react-router";

const NotFound = () => (
	<article className="min-h-screen flex flex-col justify-center items-center gap-8 text-center">
		<h1 className="text-gray-600 text-2xl font-secondary font-bold sm:text-4xl">404 - PAGE NOT FOUND!</h1>
    {/* redirect to home */}
		<Link
			to="/home"
			replace
			className="btn"
		>
			Go back home
		</Link>
	</article>
);

export default NotFound;
