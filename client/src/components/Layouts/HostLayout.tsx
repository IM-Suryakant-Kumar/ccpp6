import { Navigate, Outlet, useLocation } from "react-router";

const HostLayout = () => {
	const pathname = useLocation().pathname;
	const user = true;

	return user ? (
		<Outlet />
	) : (
		<Navigate
			to="/login"
			state={{ message: "You Must Login First", redirectTo: pathname }}
			replace
		/>
	);
};

export default HostLayout;
