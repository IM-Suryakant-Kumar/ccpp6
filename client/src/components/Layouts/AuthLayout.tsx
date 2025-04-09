import { Navigate, Outlet, useLocation } from "react-router";

const AuthLayout = () => {
	const pathname = useLocation().state?.redirectTo || "/Home";
	const user = false;

	return user ? <Navigate to={pathname} replace /> : <Outlet />;
};

export default AuthLayout;
