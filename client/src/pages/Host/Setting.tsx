import { IoIosReverseCamera } from "react-icons/io";

const Setting = () => {
	return (
		<article className="max-w-md md:max-w-2xl mx-auto pt-2">
			<form className="w-[80%] mx-auto flex flex-col gap-1">
				{/* profile fic */}
				<div className="w-25 sm:w-30 h-25 sm:h-30 mx-auto mt-4 bg-secondary border-2 border-logo rounded-full relative">
					<img
						className="w-full h-full  object-cover"
						src="https://res.cloudinary.com/dyh9ryswk/image/upload/v1700768960/clench_snap/nfrvxf2mvfsy36u1cq8o.png"
						alt="profile pic"
					/>
					<label
						className="w-12 h-12 rounded-full bg-[#00000070] overflow-hidden p-2 cursor-pointer absolute left-0 top-0 right-0 bottom-0 m-auto"
						htmlFor="profile"
					>
						<IoIosReverseCamera className="fill-logo w-full h-full" size="1.5em" />
						<input
							className="w-full h-full bg-blue-300 absolute top-0 left-0 right-0 bottom-0 invisible"
							type="file"
							name="profile"
							id="profile"
						/>
					</label>
				</div>

				{/* name */}
				<label className="mt-4 text-gray-600" htmlFor="name">
					Full Name
				</label>
				<input
					className="outline-none border-2 border-logo text-sm p-1 pl-2 rounded-md text-gray-600"
					type="text"
					name="name"
					id="name"
					defaultValue="Clench Snap"
				/>
				{/* username */}
				<label className="mt-4 text-gray-600" htmlFor="username">
					Username
				</label>
				<input
					className="outline-none border-2 border-logo text-sm p-1 pl-2 rounded-md text-gray-600"
					type="text"
					name="username"
					id="username"
					defaultValue="clench_snap"
				/>
				{/* email */}
				<label className="mt-4 text-gray-600" htmlFor="email">
					Email
				</label>
				<input
					className="outline-none border-2 border-logo text-sm p-1 pl-2 rounded-md text-gray-600"
					type="email"
					name="email"
					id="email"
					defaultValue="clenchsnap@gmail.com"
				/>
				{/* bio */}
				<label className="mt-4 text-gray-600" htmlFor="bio">
					Bio
				</label>
				<textarea
					className="outline-none border-2 border-logo text-sm p-1 pl-2 rounded-md text-gray-600 resize-none"
					name="bio"
					id="bio"
					defaultValue="This is ClenchSnap official"
				/>
				{/* website */}
				<label className="mt-4 text-gray-600" htmlFor="website">
					Website
				</label>
				<input
					className="outline-none border-2 border-logo text-sm p-1 pl-2 rounded-md text-gray-600"
					type="text"
					name="website"
					id="website"
					defaultValue="https://suryakant-kumar.netlify.app/"
				/>

				<button className="w-full h-7 sm:h-8 flex justify-center items-center bg-logo text-primary font-secondary text-sm font-bold mt-6">
					Save
				</button>
				<button className="w-full h-7 flex justify-center items-center bg-logo text-primary font-secondary text-sm font-bold mt-1">
					Logout
				</button>
			</form>
		</article>
	);
};

export default Setting;
