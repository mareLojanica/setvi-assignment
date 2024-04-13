import { FormikProps } from "formik"
import { ItemCreateDto } from "./Api.interface"
import { ReactNode } from "react"

export interface TextInputProps {
	value: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
	touched: boolean
	error: boolean
	title: string
	label: string
}
export enum SubmitButtonLabelEnum {
	UPDATE = "Update",
	SAVE = "Save",
}
export interface FormProps {
	formikData: FormikProps<ItemCreateDto>
	submitButtonLabel: SubmitButtonLabelEnum
	deleteButton?: JSX.Element
}

export interface FormLayoutProps {
	headline: string
	children: ReactNode
}
