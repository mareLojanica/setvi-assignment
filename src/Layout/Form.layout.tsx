import React from "react"
import { FormLayoutProps } from "../Types/Component.interface"
import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import BackArrow from "../components/BackArrow/BackArrow.component"

const FormLayout: React.FC<FormLayoutProps> = ({ headline, children }) => {
	return (
		<Box sx={{ padding: 2 }}>
			<Link to="/">
				<BackArrow />
			</Link>
			<Box sx={{ marginTop: "24px" }}>
				<Typography variant="h4" gutterBottom>
					{headline}
				</Typography>
				{children}
			</Box>
		</Box>
	)
}

export default FormLayout
