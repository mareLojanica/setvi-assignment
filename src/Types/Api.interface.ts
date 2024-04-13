export interface Item {
	userId: number
	id: number
	title: string
	body: string
}
export interface ItemCreateDto {
	title: string
	description: string
}
export type ItemUpdateDto = ItemCreateDto & { id: string }
