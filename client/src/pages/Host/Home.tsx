import { useState } from "react";

const Home = () => {
	const [filter, setFilter] = useState<string>("recent");

  const handleFilter = (newFilter: string) => {
    if(newFilter !== filter) setFilter(newFilter)
  }

	return (
		<article className="max-w-xl mx-auto">
			{/* filters */}
			<section className="flex justify-between items-center gap-4 mx-2 py-4 border-b-2 border-blue-200">
				<button className={`filters-btn ${filter === "recent" && "bg-logo text-primary"}`} onClick={() => handleFilter("recent")}>
					Recent
				</button>
				<button className={`filters-btn ${filter === "older" && "bg-logo text-primary"}`} onClick={() => handleFilter("older")}>
					Older
				</button>
				<button className={`filters-btn ${filter === "trending" && "bg-logo text-primary"}`} onClick={() => handleFilter("trending")}>
					Trending
				</button>
			</section>
			home
		</article>
	);
};

export default Home;
