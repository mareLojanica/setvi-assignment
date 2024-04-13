import { useState } from "react"
import { ItemCreateDto } from "../Types/Api.interface"
import { FormSubmitResultIC } from "../Types/CustomHooks.iterface"

const useFormSubmit = (
	onSubmit: (values: Record<string, any>) => Promise<ItemCreateDto>
): FormSubmitResultIC => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState<boolean>(false)

	const handleSubmit = async (values: Record<string, any>) => {
		try {
			setIsSubmitting(true)
			const response = await onSubmit(values)
			return response
		} catch (error) {
			setError(true)
		} finally {
			setIsSubmitting(false)
		}
	}

	return {
		handleSubmit,
		isSubmitting,
		error,
	}
}

export default useFormSubmit
