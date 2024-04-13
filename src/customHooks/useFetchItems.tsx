import { useEffect, useState } from "react"
import { api } from "../api/api"
import { Item } from "../Types/Api.interface"
import { toast } from "react-toastify"
import { FetchItemsHookIC } from "../Types/CustomHooks.iterface"

const useFetchItems = (): FetchItemsHookIC => {
	const [items, setItems] = useState<Item[] | []>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<boolean>(false)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await api.fetchAllItems()
				setItems(data)
			} catch (error) {
				setError(true)
				toast.error(`Ooooooops! Something went wrong!!`)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	return { items, loading, error }
}

export default useFetchItems
