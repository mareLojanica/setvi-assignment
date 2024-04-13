import { FormikProps } from "formik"
import { Item, ItemCreateDto } from "./Api.interface"
import { ItemModeEnum } from "./Enums"

export interface ItemDeletionHookIC {
	handleDelete: (id: string | undefined) => Promise<void>
	isLoading: boolean
}

export interface FetchItemResultIC {
	item: Item | null
	loading: boolean
}
export interface FetchItemsHookIC {
	items: Item[] | []
	loading: boolean
	error: boolean
}
export interface UseItemFormResultIC {
	formik: FormikProps<ItemCreateDto>
	isSubmitting: boolean
	error: {
		[key: string]: string
	}
}

export interface UseItemFormOptionsIC {
	initialValues: ItemCreateDto
	onSubmitCallback: (values: ItemCreateDto) => Promise<ItemCreateDto>
	mode: ItemModeEnum
}
export interface FormSubmitResultIC {
	handleSubmit: (
		values: Record<string, any>
	) => Promise<ItemCreateDto | undefined>
	isSubmitting: boolean
	error: boolean
}
