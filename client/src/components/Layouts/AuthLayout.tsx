import { Navigate, Outlet, useLocation } from "react-router";

export const AuthLayout = () => {
	const pathname = useLocation().state?.redirectTo || "/Home";
	const user = false;

	return user ? <Navigate to={pathname} replace /> : <Outlet />;
};
