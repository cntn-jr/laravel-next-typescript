import { AppBar, Box, Typography } from '@mui/material'
import AppColor from '../../styles/AppColor.module.css'

export const AppHeader = () => {
    return (
        <AppBar
            position="absolute"
            className={AppColor.main}
            sx={{ color: '#444' }}
        >
            <Box height="60px" display="flex">
                <Typography
                    component="h1"
                    variant="h5"
                    pt="20px"
                    pb="10px"
                    pl="80px"
                    fontWeight="bold"
                    justifyContent="center"
                >
                    TaskManager
                </Typography>
            </Box>
        </AppBar>
    )
}
