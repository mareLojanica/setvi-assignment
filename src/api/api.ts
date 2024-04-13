import { Item, ItemCreateDto } from "../Types/Api.interface"
import { API_URL_GET_ITEMS, API_URL_POST_ITEM } from "./api.constants"
import axiosInstance from "./axios.instance"

export const api = {
	fetchAllItems: async (): Promise<Item[]> => {
		try {
			const { data } = await axiosInstance.get(API_URL_GET_ITEMS)
			return data
		} catch (error) {
			throw error
		}
	},
	createNewItem: async (itemCreateDto: ItemCreateDto) => {
		try {
			const { data } = await axiosInstance.post(
				API_URL_POST_ITEM,
				itemCreateDto
			)
			return data
		} catch (error) {
			throw error
		}
	},
	getSingleItem: async (id: string) => {
		try {
			const { data } = await axiosInstance.get(
				`${API_URL_GET_ITEMS}/${id}`
			)
			return data
		} catch (error) {
			throw error
		}
	},
	updateItem: async (id: string, itemCreateDto: ItemCreateDto) => {
		try {
			const { data } = await axiosInstance.put(
				`${API_URL_POST_ITEM}/${id}`,
				itemCreateDto
			)
			return data
		} catch (error) {
			throw error
		}
	},
	deleteItem: async (id: string) => {
		try {
			const { data } = await axiosInstance.delete(
				`${API_URL_POST_ITEM}/${id}`
			)
			return data
		} catch (error) {
			throw error
		}
	},
}
