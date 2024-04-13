import { Box, CircularProgress } from "@mui/material"

const Loader = (): JSX.Element => {
	return (
		<Box
			sx={{
				position: "fixed",
				left: 0,
				top: 0,
				width: "100%",
				height: "100%",
			}}
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<CircularProgress size={64} disableShrink thickness={3} />
		</Box>
	)
}

export default Loader
