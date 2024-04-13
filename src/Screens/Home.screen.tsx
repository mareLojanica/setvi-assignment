import useFetchItems from "../customHooks/useFetchItems"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { columns } from "../config/gridConfig.tsx"
import Loader from "../components/Loader/Loader.component.tsx"
import Errorbox from "../components/ErrorBox/Errorbox.component.tsx"

const Home = () => {
	const { items, loading, error } = useFetchItems()

	return loading ? (
		<Loader />
	) : error ? (
		<Errorbox />
	) : (
		<Box sx={{ height: "calc(100vh - 200px)" }}>
			<DataGrid rows={items} columns={columns} />
		</Box>
	)
}

export default Home
