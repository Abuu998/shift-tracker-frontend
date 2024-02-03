import { 
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route
} from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home, { loader as homeLoader } from "./pages/home/Home"
import SignIn from "./pages/signin/SignIn"
import Signup from "./pages/signup/Signup"
import ProfilePage, { loader as profileLoader } from "./pages/profile/ProfilePage"


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route 
				index 
				element={<Home />}
				loader={homeLoader}
			/>
			<Route path="signin" element={<SignIn /> } />
			<Route path="signup" element={<Signup /> } />
			<Route 
				path="profile" 
				element={<ProfilePage />}
				loader={profileLoader}
			/>
		</Route>
	)
)


function App() {
	return <RouterProvider router={router} />
}

export default App
