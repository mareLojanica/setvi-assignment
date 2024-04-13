import { Typography } from "@mui/material"

const Errorbox = (): JSX.Element => {
	return (
		<div style={{ textAlign: "center", padding: 20 }}>
			<Typography variant="h5" color="error">
				There is some Error
			</Typography>
		</div>
	)
}

export default Errorbox
