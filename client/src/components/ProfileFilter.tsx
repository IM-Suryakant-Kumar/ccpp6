type Props = {
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const ProfileFilter: React.FC<Props> = ({ filter, setFilter }) => {
	const handleFilter = (newFilter: string) => {
		if (newFilter !== filter) setFilter(newFilter);
	};

	return (
		<section className="flex justify-between items-center m-2 my-4">
			<button
				className={`sm:bg-primary text-logo font-secondary text-sm font-bold cursor-pointer border-b-2 ${filter === "posts" ? "border-logo" : "border-primary"}`}
				onClick={() => handleFilter("posts")}
			>
				Posts
			</button>
			<button
				className={`sm:bg-primary text-logo font-secondary text-sm font-bold cursor-pointer border-b-2 ${filter === "liked" ? "border-logo" : "border-primary"}`}
				onClick={() => handleFilter("liked")}
			>
				Liked
			</button>
			<button
				className={`sm:bg-primary text-logo font-secondary text-sm font-bold cursor-pointer border-b-2 ${filter === "saved" ? "border-logo" : "border-primary"}`}
				onClick={() => handleFilter("saved")}
			>
				Saved
			</button>
		</section>
	);
};
