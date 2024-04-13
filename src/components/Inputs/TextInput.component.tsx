import React from "react"
import { TextField } from "@mui/material"
import { TextInputProps } from "../../Types/Component.interface"

const TextInput: React.FC<TextInputProps> = ({
	value,
	handleBlur,
	handleChange,
	error,
	title,
	label,
	touched,
}): JSX.Element => {
	return (
		<TextField
			fullWidth
			id={`${title}-${label}}`}
			name={title}
			label={label}
			value={value}
			onChange={handleChange}
			onBlur={handleBlur}
			error={error}
			helperText={touched && error ? `${label} is required` : ""}
			margin="normal"
		/>
	)
}

export default TextInput
