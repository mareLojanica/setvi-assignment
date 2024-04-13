import { LoadingButton } from "@mui/lab"
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

const Details = (): JSX.Element => {
	const { id } = useParams()
	const { item, loading } = useFetchItem(id)
	const { handleDelete, isLoading } = useItemDeletion()

	const { formik } = useItemForm({
		initialValues: {
			title: item?.title ?? "",
			description: item?.body ?? "",
		},
		onSubmitCallback: (values) =>
			onSubmitEditItem({ id: id ?? "", ...values }),
		mode: ItemModeEnum.EDIT,
	})

	return loading ? (
		<Loader />
	) : (
		<FormLayout headline={`Details of item ${id}`}>
			<CreateUpdateItemForm
				formikData={formik}
				submitButtonLabel={SubmitButtonLabelEnum.UPDATE}
				deleteButton={
					<LoadingButton
						loading={isLoading}
						variant="outlined"
						color="error"
						onClick={() => handleDelete(id)}
					>
						Delete
					</LoadingButton>
				}
			/>
		</FormLayout>
	)
}

export default Details
