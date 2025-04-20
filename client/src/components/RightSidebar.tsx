import { Link } from "react-router";

export const RightSidebar = () => {
	return (
		<article className="hidden scrollbar-none w-[30%] border-l sm:border-logo h-full  md:flex flex-col gap-2 fixed top-15 right-0 bottom-0 pt-4 overflow-auto">
			<h1 className="text-gray-600 text-lg text-center">You Might Like</h1>
			{Array(6)
				.fill(0)
				.map((_, idx) => (
					<section
						key={idx + "id"}
						className="w-4/5 max-w-60 mx-auto flex items-center border-b border-gray-400 py-2"
					>
						<Link to="username" className="flex items-center gap-2 hover:bg-primary">
							<img
								className="w-8 h-8 rounded-full border-2"
								src="https://res.cloudinary.com/dyh9ryswk/image/upload/v1700772832/clench_snap/pecc3inlqhmekpl9s4kh.jpg"
								alt="profile fic"
							/>
							<span className="text-logo">CrackC8</span>
						</Link>
						<span className="ml-auto text-logo">Follow</span>
					</section>
				))}
		</article>
	);
};
