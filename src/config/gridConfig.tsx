import { Link } from "react-router-dom"
import { Item } from "../Types/Api.interface"

export const columns = [
	{ field: "id", headerName: "ID", width: 90 },
	{ field: "title", headerName: "Title", width: 200 },
	{ field: "body", headerName: "Body", width: 400 },
	{
		field: "detailsLink",
		headerName: "Details",
		width: 200,
		renderCell: (params: { row: Item }) => {
			return <Link to={`/details/${params.row.id}`}>View Details</Link>
		},
	},
]
