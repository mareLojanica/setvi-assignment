import useFetchItems from "../customHooks/useFetchItems"
import { Box } from "@mui/material"
import { DataGrid, GridRowParams } from "@mui/x-data-grid"
import { columns } from "../config/gridConfig.tsx"
import Loader from "../components/Loader/Loader.component.tsx"
import Errorbox from "../components/ErrorBox/Errorbox.component.tsx"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

const Home = (): JSX.Element => {
	const { items, loading, error } = useFetchItems()
	const navigate = useNavigate()
	const handleRowClick = useCallback(
		(params: GridRowParams) => {
			navigate(`details/${params.id}`)
		},
		[navigate]
	)
	return loading ? (
		<Loader />
	) : error ? (
		<Errorbox />
	) : (
		<Box sx={{ height: "calc(100vh - 200px)" }}>
			<DataGrid
				rows={items}
				columns={columns}
				onRowClick={handleRowClick}
				sx={{ cursor: "pointer" }}
				pageSizeOptions={[10, 25, 50, 100]}
			/>
		</Box>
	)
}

export default Home
