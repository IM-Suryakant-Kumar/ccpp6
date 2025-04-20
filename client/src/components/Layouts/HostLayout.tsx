import { Navigate, Outlet, useLocation } from "react-router";
import { Navbar, Sidebar, RightSidebar } from "../../components";

export const HostLayout = () => {
	const pathname = useLocation().pathname;
	const user = true;
  console.log(pathname)

	return user ? (
		<>
			<Navbar />
			<Sidebar />
			<article className={`wrapper mt-25 sm:mt-15 sm:ml-[25%] sm:w-[75%] ${(pathname === "/home" || pathname === "/explore") && "md:w-[45%]"}`}>
				<Outlet />
			</article>
			{(pathname === "/home" || pathname === "/explore") && <RightSidebar />}
		</>
	) : (
		<Navigate
			to="/login"
			state={{ message: "You Must Login First", redirectTo: pathname }}
			replace
		/>
	);
};
