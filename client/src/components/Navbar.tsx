import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router";

export const Navbar = () => {
	return (
		<article className="w-full h-25 sm:h-15 bg-secondary fixed top-0 left-0 z-10 flex items-center">
			<section className="wrapper flex items-center justify-between gap-4 flex-wrap">
				{/* logo and logo icon */}
				<section className="flex items-center gap-2 sm:-order-1">
					<img className="w-8 h-8 object-contain rounded-full" src="/logo.svg" alt="logo image" />
					<Link to="/home" className="text-2xl font-secondary font-bold text-logo border-none sm:bg-secondary">
						ClenchSnap
					</Link>
				</section>
				{/* profile pic */}
				<img
					className="w-9 h-9 object-contain p-0.5 border-3 border-logo rounded-full"
					src="https://res.cloudinary.com/dyh9ryswk/image/upload/v1700768960/clench_snap/nfrvxf2mvfsy36u1cq8o.png"
					alt="profile pic"
				/>

				{/* searchbar */}
				<section className="w-full h-7 bg-primary flex items-center justify-between rounded-sm sm:w-[50%] sm:-order-1 ">
					<input
						className="w-[85%] h-10 outline-none ml-4 text-sm"
						type="search"
						name="search"
						id="search"
						placeholder="Search"
					/>
					<label htmlFor="search">
						<MdOutlineSearch className="mr-2" size="1.2em" fill="#3a86ff" />
					</label>
				</section>
			</section>
		</article>
	);
};
