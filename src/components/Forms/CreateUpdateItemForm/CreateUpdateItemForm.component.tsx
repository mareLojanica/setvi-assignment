import React from "react"
import { FormProps } from "../../../Types/Component.interface"
import TextInput from "../../Inputs/TextInput.component"
import { Box, Button } from "@mui/material"

const CreateUpdateItemForm: React.FC<FormProps> = ({
	formikData,
	submitButtonLabel,
	deleteButton = <></>,
}) => {
	return (
		<form onSubmit={formikData.handleSubmit}>
			<TextInput
				value={formikData.values.title}
				handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					formikData.setFieldValue("title", event.target.value)
				}}
				handleBlur={formikData.handleBlur}
				touched={!!formikData.touched.title}
				error={!!formikData.errors.title}
				title="title"
				label="Title"
			></TextInput>

			<TextInput
				value={formikData.values.description}
				handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					formikData.setFieldValue("description", event.target.value)
				}}
				handleBlur={formikData.handleBlur}
				touched={!!formikData.touched.description}
				error={!!formikData.errors.description}
				title="description"
				label="Description"
			></TextInput>

			<Box
				sx={{
					display: "flex",
					width: "100%",
					justifyContent: "flex-end",
					gap: "10px",
				}}
			>
				{deleteButton}
				<Button type="submit" variant="contained" color="primary">
					{submitButtonLabel}
				</Button>
			</Box>
		</form>
	)
}

export default CreateUpdateItemForm
