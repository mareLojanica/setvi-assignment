import { Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const BackArrow = (): JSX.Element => {
	return (
		<Button startIcon={<ArrowBackIcon />} variant="outlined">
			Back
		</Button>
	)
}

export default BackArrow
