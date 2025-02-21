import Header from '@/shared/common-layouts/header/Header'
import { Container, Stack } from '@mui/material'
import React from 'react'
import { sideBarRoutes } from '../routes'
import Drawer from '@/shared/common-layouts/sidebar/Drawer'

const DashboardLayout = ({children}) => {   
    return (
        <>
            <Drawer routes={sideBarRoutes.organization} />
            <Stack sx={{ width: { md: "calc(100% - 260px)" }, ml: { md: "260px" } }}>
            <Header />
                {/* <Header /> */}
                <Container maxWidth="xl" sx={{ py: { md: 4, sm: 3, xs: 2 } }} >{children}</Container>
            </Stack>
        </>
    )
}

export default DashboardLayout