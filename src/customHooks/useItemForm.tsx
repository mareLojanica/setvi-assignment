import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"
import { ItemCreateDto, ItemUpdateDto } from "../Types/Api.interface"
import { toast } from "react-toastify"
import { ItemModeEnum } from "../Types/Enums"

const validationSchema = yup.object({
	title: yup.string().required("Title is required"),
	description: yup.string().required("Description is required"),
})

const useItemForm = (
	initialValues: ItemCreateDto,
	onSubmitCallback: (values: ItemCreateDto) => Promise<ItemCreateDto>,
	mode: ItemModeEnum
) => {
	const navigate = useNavigate()

	const handleSubmit = useCallback(
		async (values: ItemCreateDto | ItemUpdateDto) => {
			try {
				const response = await onSubmitCallback(values)
				navigate("/")
				if (mode === ItemModeEnum.CREATE) {
					toast.success("Item successfully created")
				} else if (mode === ItemModeEnum.EDIT) {
					toast.success(`Item successfully updated`)
				}
				return response
			} catch (error) {
				toast.error("Ooooops something went wrong")
				throw error
			}
		},
		[navigate, onSubmitCallback]
	)

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleSubmit,
		validateOnChange: false,
		validateOnBlur: true,
	})

	useEffect(() => {
		if (initialValues.description.trim()) {
			formik.setFieldValue("description", initialValues.description)
		}
		if (initialValues.title.trim()) {
			formik.setFieldValue("title", initialValues.title)
		}
	}, [initialValues.description, initialValues.title])

	return {
		formik,
		isSubmitting: formik.isSubmitting,
		error: formik.errors,
	}
}

export default useItemForm
