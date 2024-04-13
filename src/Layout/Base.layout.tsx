import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BaseLayoutProps } from "../Types/Component.interface"

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	return (
		<>
			<ToastContainer />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
				}}
			>
				<AppBar
					position="static"
					sx={{ width: "100vw" }}
					color="inherit"
				>
					<Toolbar>
						<Button
							component={Link}
							to="/create"
							type="contained"
							color="primary"
						>
							Create
						</Button>
					</Toolbar>
				</AppBar>
				<Container
					component="main"
					sx={{
						flexGrow: 1,
						mt: 4,
						background: "white",
						borderRadius: "6px",
						padding: "24px",
						height: "calc(100vh - 200px)",
					}}
				>
					{children || <Outlet />}
				</Container>
			</Box>
		</>
	)
}

export default BaseLayout
