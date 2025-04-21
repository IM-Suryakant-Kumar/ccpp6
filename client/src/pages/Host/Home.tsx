import { useState } from "react";
import { AddPost, Filters, Posts } from "../../components";

const Home = () => {
	const [filter, setFilter] = useState("recent");

	return (
		<article className="max-w-xl mx-auto">
      <Filters filter={filter} setFilter={setFilter} />
      <AddPost />
      <Posts />
		</article>
	);
};

export default Home;
