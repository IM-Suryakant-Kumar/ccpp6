import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";

export const Posts = () => {
	return (
		<section className="flex flex-col mx-2 py-2 gap-4">
			{Array(6)
				.fill(0)
				.map((_, idx) => (
					<section
						className="bg-secondary px-2 py-4 rounded-md border border-gray-400"
						key={idx + "2"}
					>
						<header className="flex justify-between items-center px-2">
							<Link className="flex items-center gap-4 border-none hover:bg-secondary" to="/profile/username">
								<img
									className="w-9 h-9 object-contain border-3 border-logo rounded-full"
									src="https://res.cloudinary.com/dyh9ryswk/image/upload/v1700773081/clench_snap/rw2g3c6pcmf16byngogv.jpg"
									alt="Profile pic"
								/>
								<h1 className="font-bold">Sujeet Kumar</h1>
							</Link>
							<BiDotsVerticalRounded className="fill-gray-600 cursor-pointer" size="1.5em" />
						</header>
						<section className="w-[80%] ml-15 pr-2 sm:pr-0">
							<p className="text-gray-600">I don't really know what I'm doing atm</p>
							<img
								className="border border-gray-400 object-cover rounded-xl mt-4"
								src="https://res.cloudinary.com/dyh9ryswk/image/upload/v1701321945/clench_snap/post/trk4ebxiu51n9seenrvj.png"
								alt=""
							/>
							<section className="flex items-center gap-4 mt-3">
								<div className="flex items-center gap-2 text-gray-600 cursor-pointer">
									<FaRegHeart className="fill-gray-600" size="1.2em" />2
								</div>
								<div className="flex items-center gap-2 text-gray-600 cursor-pointer">
									<FaRegComment className="fill-gray-600" size="1.2em" />3
								</div>
								<div className="flex items-center gap-2 text-gray-600 cursor-pointer ml-auto">
									<FaRegBookmark className="fill-gray-600" size="1.2em" />
								</div>
							</section>
						</section>
					</section>
				))}
		</section>
	);
};
