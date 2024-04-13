import { useEffect, useState } from "react"
import { api } from "../api/api"
import { Item } from "../Types/Api.interface"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { FetchItemResultIC } from "../Types/CustomHooks.iterface"

const useFetchItem = (itemId: string | undefined): FetchItemResultIC => {
	if (!itemId) return { item: null, loading: false }
	const [item, setItem] = useState<Item | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const navigate = useNavigate()
	useEffect(() => {
		const fetchItem = async () => {
			try {
				setLoading(true)
				const itemData = await api.getSingleItem(itemId)
				setItem(itemData)
				setLoading(false)
			} catch (error) {
				navigate("/")
				toast.error(`Failed to fetch item with id=${itemId}`)
				setLoading(false)
			}
		}

		fetchItem()

		return () => {}
	}, [itemId])

	return { item, loading }
}

export default useFetchItem
