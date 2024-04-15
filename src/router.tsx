import { Suspense, lazy } from "react"
import { RouteObject } from "react-router"
import SuspenseLoader from "./components/Loader/Loader.component"
import BaseLayout from "./Layout/Base.layout"

// Loader
const Loader = (Component: React.ComponentType<any>) => (props: any) =>
	(
		<Suspense fallback={<SuspenseLoader />}>
			<Component {...props} />
		</Suspense>
	)

const Home = Loader(lazy(() => import("./Screens/Home.screen")))
const Create = Loader(lazy(() => import("./Screens/Create.screen")))
const Details = Loader(lazy(() => import("./Screens/Details.screen")))

const routes: RouteObject[] = [
	{
		path: "",
		element: <BaseLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/create",
				element: <Create />,
			},
			{
				path: "/details/:id",
				element: <Details />,
			},
		],
	},
]

export default routes
