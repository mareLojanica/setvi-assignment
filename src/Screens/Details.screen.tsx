import { Button } from "@mui/material"
import { useParams } from "react-router-dom"

import useFetchItem from "../customHooks/useFetchItem"
import useItemForm from "../customHooks/useItemForm"
import { onSubmitEditItem } from "../utils"
import Loader from "../components/Loader/Loader.component"
import CreateUpdateItemForm from "../components/Forms/CreateUpdateItemForm/CreateUpdateItemForm.component"
import { ItemModeEnum } from "../Types/Enums"
import { SubmitButtonLabelEnum } from "../Types/Component.interface"
import FormLayout from "../Layout/Form.layout"
import useItemDeletion from "../customHooks/useDeleteItem"

const Details = () => {
	const { id } = useParams()
	const { item, loading } = useFetchItem(id)
	const { handleDelete } = useItemDeletion()

	const { formik } = useItemForm(
		{ title: item?.title ?? "", description: item?.body ?? "" },
		(values) => onSubmitEditItem({ id: id ?? "", ...values }),
		ItemModeEnum.EDIT
	)

	return loading ? (
		<Loader />
	) : (
		<FormLayout headline={`Details of item ${id}`}>
			<CreateUpdateItemForm
				formikData={formik}
				submitButtonLabel={SubmitButtonLabelEnum.UPDATE}
				deleteButton={
					<Button
						variant="outlined"
						color="error"
						onClick={() => handleDelete(id)}
					>
						Delete
					</Button>
				}
			/>
		</FormLayout>
	)
}

export default Details
