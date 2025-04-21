import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { AuthLayout, HostLayout, Layout } from "./components";
import {
	Explore,
	Home,
	Landing,
	LikedPosts,
	Login,
	NotFound,
	Posts,
	Profile,
	SavedPosts,
	Setting,
	Signup,
} from "./pages";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<Landing />} />
				<Route element={<HostLayout />}>
					<Route path="home" element={<Home />} />
					<Route path="explore" element={<Explore />} />
					<Route path="profile/:username" element={<Profile />}>
						{/* <Route index element={<Posts />} />
						<Route path="liked" element={<LikedPosts />} />
						<Route path="saved" element={<SavedPosts />} /> */}
					</Route>
					<Route path="settings" element={<Setting />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
