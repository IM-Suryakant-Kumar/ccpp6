import { Navigate, Outlet, useLocation } from "react-router";
import { Navbar, Sidebar } from "../../components";

export const HostLayout = () => {
	const pathname = useLocation().pathname;
	const user = true;

	return user ? (
		<>
      <Navbar />
      <Sidebar />
			<article className="wrapper mt-25 sm:mt-15 sm:ml-50 sm:w-[calc(100%-200px)]">
				<Outlet />
			</article>
		</>
	) : (
		<Navigate
			to="/login"
			state={{ message: "You Must Login First", redirectTo: pathname }}
			replace
		/>
	);
};
