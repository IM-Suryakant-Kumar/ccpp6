import { NavLink } from "react-router";
import {
	MdOutlineHome,
	MdOutlineExplore,
	MdOutlineSettings,
	MdOutlinePerson,
} from "react-icons/md";

export const Sidebar = () => {
	const sidebarList = [
		{
			title: "Home",
			icon: MdOutlineHome,
			link: "/home",
		},
		{
			title: "Explore",
			icon: MdOutlineExplore,
			link: "/explore",
		},
		{
			title: "Profile",
			icon: MdOutlinePerson,
			link: "/profile/username",
		},
		{
			title: "Settings",
			icon: MdOutlineSettings,
			link: "/settings",
		},
	];

	return (
		<article
			className="w-full h-12 sm:border-r sm:border-logo 
     bg-secondary fixed left-0 bottom-0 flex  items-center justify-around sm:w-[25%] sm:h-full sm:bg-primary sm:top-15 sm:flex-col sm:items-start sm:justify-start sm:gap-4 sm:pt-4"
		>
			{sidebarList.map((item, idx) => (
				<NavLink
					className="flex items-center gap-4 rounded-full sm:w-4/5 sm:mx-auto sm:h-10"
					key={idx}
					to={item.link}
				>
					<span className="w-6 h-6 flex items-center justify-center sm:ml-4">
						{
							<item.icon
								className="sm:text-[1.5em] fill-inherit"
								size="1.2em"
								color="#3a86ff"
								fill="#3a86ff"
							/>
						}
					</span>
					<span className="hidden text-inherit text-lg sm:block">{item.title}</span>
				</NavLink>
			))}
		</article>
	);
};
