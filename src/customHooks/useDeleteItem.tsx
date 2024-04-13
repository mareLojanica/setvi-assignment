import { useCallback, useState } from "react"
import { api } from "../api/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { ItemDeletionHookIC } from "../Types/CustomHooks.iterface"

const useItemDeletion = (): ItemDeletionHookIC => {
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleDelete = useCallback(
		async (id: string | undefined): Promise<void> => {
			try {
				setIsLoading(true)
				if (id) {
					await api.deleteItem(id)
					navigate("/")
					toast.success("Item deleted successfully")
				} else {
					throw new Error("ID can't be undefined")
				}
			} catch (error) {
				toast.error("Unable to delete item")
			} finally {
				setIsLoading(false)
			}
		},
		[navigate]
	)

	return {
		handleDelete,
		isLoading,
	}
}

export default useItemDeletion
