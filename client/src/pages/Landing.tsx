import { Link } from "react-router";

const Landing = () => {
	return (
		<article className="bg-secondary">
			<section className="w-[95%] sm:[90%] mx-auto min-h-screen flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 text-center">
				<section className="flex flex-col items-center justify-center gap-4">
					<img
						className="p-2 border-8 border-logo rounded-full"
						src="/share.svg"
						alt="Logo"
						width={80}
						height={80}
					/>
					<h1 className="logo">ClenchSnap</h1>
					<p className="max-w-96 text-sm md:text-base text-gray-600">
						Connect and share your thoughts and snaps with people and the community.
					</p>
					<Link to="/home" className="btn">
						Get Started
					</Link>
				</section>
				<section className="flex flex-col items-center justify-center gap-4">
					<img className="" src="/hero.svg" alt="Logo" width={400} height={400} />
				</section>
			</section>
		</article>
	);
};

export default Landing;
