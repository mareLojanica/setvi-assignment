import { ItemCreateDto, ItemUpdateDto } from "./Types/Api.interface"
import { api } from "./api/api"

export const onSubmitCreateItem = async (values: any) => {
	const itemCreateDto: ItemCreateDto = {
		title: values.title,
		description: values.description,
	}

	return await api.createNewItem(itemCreateDto)
}
export const onSubmitEditItem = async (
	values: ItemUpdateDto
): Promise<ItemCreateDto> => {
	const itemCreateDto: ItemCreateDto = {
		title: values.title,
		description: values.description,
	}

	return await api.updateItem(values.id, itemCreateDto)
}
