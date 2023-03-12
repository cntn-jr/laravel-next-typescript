import { Box, Container, Grid } from '@mui/material'
import { AppFooter } from './AppFooter'
import { AppHeader } from './AppHeader'

import AppColor from '../../styles/AppColor.module.css'
import { AppMain } from './AppMain'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const AppAuthLayout = (props: Props) => {
    const { children } = props
    return (
        <Box display="flex" className={AppColor.base}>
            <AppHeader />
            <Grid
                mt="60px"
                display="flex"
                container
                component="main"
                spacing={0}
                sx={{
                    height: '100vh',
                }}
            >
                <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                    <AppMain>{children}</AppMain>
                    <AppFooter />
                </Container>
            </Grid>
        </Box>
    )
}
