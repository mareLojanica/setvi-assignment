import { useCallback } from "react"
import { api } from "../api/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const useItemDeletion = () => {
	const navigate = useNavigate()

	const handleDelete = useCallback(
		async (id: string | undefined) => {
			try {
				if (id) {
					await api.deleteItem(id)
					navigate("/")
					toast.success("Item deleted successfully")
				} else {
					throw new Error("ID can't be undefined")
				}
			} catch (error) {
				toast.error("Unable to delete item")
			}
		},
		[navigate]
	)

	return {
		handleDelete,
	}
}

export default useItemDeletion
