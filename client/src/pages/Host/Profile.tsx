import { useParams } from "react-router";
import { Posts, ProfileFilter } from "../../components";
import { useState } from "react";

const Profile = () => {
	const [filter, setFilter] = useState("posts");

	const username = useParams();
	console.log(username);

	return (
		<article className="max-w-md md:max-w-2xl mx-auto pt-4">
			<section className="flex flex-col">
				<button className="w-25 h-6 bg-logo text-primary text-xs rounded-full ml-auto flex justify-center items-center">
					Edit Profile
				</button>
				<section className="flex gap-6 sm:gap-16 border-b border-gray-400 py-4">
					<img
						className="w-20 h-20 object-cover border-2 border-logo rounded-full"
						src="https://res.cloudinary.com/dyh9ryswk/image/upload/v1700773081/clench_snap/rw2g3c6pcmf16byngogv.jpg"
						alt="profile pic"
					/>
					<section className="flex flex-col">
						{/* name */}
						<h1 className="text-gray-600 font-secondary font-bold">Clench Snap</h1>
						{/* username */}
						<h2 className="text-sm text-gray-600">@clench_snap</h2>
						{/* Bio */}
						<p className="text-sm text-gray-600 mt-3">This is ClenchSnap official</p>
						{/* Website */}
						<a
							className="text-sm text-logo border-none sm:bg-primary"
							href="https://suryakant-kumar.netlify.app/"
							target="_blank"
						>
							https://suryakant-kumar.netlify.app/
						</a>
						{/* user info */}
						<section className="flex items-center gap-5 text-xs mt-3">
							<span className="text-gray-600">3 posts</span>
							<span className="text-gray-600">1 followers</span>
							<span className="text-gray-600">7 followings</span>
						</section>
					</section>
				</section>
			</section>
			<ProfileFilter filter={filter} setFilter={setFilter} />
			{filter === "posts" && <Posts />}
			{filter === "liked" && <Posts />}
			{filter === "saved" && <Posts />}
		</article>
	);
};

export default Profile;
