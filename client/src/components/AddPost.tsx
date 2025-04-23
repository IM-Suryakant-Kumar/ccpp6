import { MdOutlineEmojiEmotions, MdOutlineImage } from "react-icons/md";

export const AddPost = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

	return (
		<section className="m-2 p-2 mt-4 border border-gray-400 bg-secondary rounded-md flex gap-2">
			<img
				className="w-10 h-10 border-3 border-logo rounded-full"
				src="https://res.cloudinary.com/dyh9ryswk/image/upload/v1700773081/clench_snap/rw2g3c6pcmf16byngogv.jpg"
				alt=""
			/>
			<form onSubmit={handleSubmit} className="w-[80%] mx-auto flex flex-col gap-2">
				<textarea
					className="border-2 border-gray-400 text-gray-600 rounded-md resize-none outline-none w-full px-4 py-2"
					name=""
					id=""
					placeholder="What's Happening?"
				></textarea>
				{/* action buttons */}
				<section className="flex items-center gap-6">
					<MdOutlineImage className="fill-gray-600 cursor-pointer" size="1.5em" />
					<MdOutlineEmojiEmotions className="fill-gray-600 cursor-pointer" size="1.5em" />
					<button
						className="w-22 h-7 bg-logo text-primary font-secondary text-sm font-bold rounded-full flex justify-center items-center ml-auto border-2 border-gray-400"
						type="submit"
					>
						Post
					</button>
				</section>
			</form>
		</section>
	);
};
