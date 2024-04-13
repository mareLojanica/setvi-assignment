import useItemForm from "../customHooks/useItemForm"
import { onSubmitCreateItem } from "../utils"
import CreateUpdateItemForm from "../components/Forms/CreateUpdateItemForm/CreateUpdateItemForm.component"
import { ItemModeEnum } from "../Types/Enums"
import { SubmitButtonLabelEnum } from "../Types/Component.interface"
import FormLayout from "../Layout/Form.layout"

const Create = (): JSX.Element => {
	const { formik } = useItemForm({
		initialValues: { title: "", description: "" },
		onSubmitCallback: onSubmitCreateItem,
		mode: ItemModeEnum.CREATE,
	})

	return (
		<FormLayout headline={"Create Item"}>
			<CreateUpdateItemForm
				formikData={formik}
				submitButtonLabel={SubmitButtonLabelEnum.SAVE}
			/>
		</FormLayout>
	)
}

export default Create
