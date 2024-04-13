import { Typography } from "@mui/material"
import React from "react"

const Errorbox = () => {
	return (
		<div style={{ textAlign: "center", padding: 20 }}>
			<Typography variant="h5" color="error">
				There is some Error
			</Typography>
		</div>
	)
}

export default Errorbox
