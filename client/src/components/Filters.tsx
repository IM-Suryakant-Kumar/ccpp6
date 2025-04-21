type Props = {
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const Filters: React.FC<Props> = ({ filter, setFilter }) => {
	const handleFilter = (newFilter: string) => {
		if (newFilter !== filter) setFilter(newFilter);
	};

	return (
		<section className="flex justify-between items-center gap-4 mx-2 py-4 border-b-2 border-gray-400">
			<button
				className={`filters-btn ${filter === "recent" && "bg-logo text-primary"}`}
				onClick={() => handleFilter("recent")}
			>
				Recent
			</button>
			<button
				className={`filters-btn ${filter === "older" && "bg-logo text-primary"}`}
				onClick={() => handleFilter("older")}
			>
				Older
			</button>
			<button
				className={`filters-btn ${filter === "trending" && "bg-logo text-primary"}`}
				onClick={() => handleFilter("trending")}
			>
				Trending
			</button>
		</section>
	);
};
