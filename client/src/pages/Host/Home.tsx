import { useState } from "react";
import { Filters } from "../../components";

const Home = () => {
	const [filter, setFilter] = useState("recent");

	return (
		<article className="max-w-xl mx-auto">
      <Filters filter={filter} setFilter={setFilter} />
      
		</article>
	);
};

export default Home;
