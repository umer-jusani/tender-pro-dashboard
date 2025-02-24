import { EditIcon } from '@/assests'
import SectionWrapper from '@/shared/common-layouts/section-wrapper/sectionWrapper'
import { FLOW_SPACER } from '@/shared/constant/constant'
import BackButton from '@/shared/pure-components/back-button/BackButton'
import { Avatar, Box, Divider, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const MyProfile = () => {
    return (
        <Stack spacing={FLOW_SPACER}>
            <BackButton />

            <SectionWrapper>
                <Stack data-role="header">
                    <Typography variant='h5' fontWeight={"bold"}>My Profile</Typography>
                </Stack>

                <Stack data-role="content" spacing={4}>
                    {/* Image && Title */}
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Avatar
                                alt="John Smith"
                                src="https://via.placeholder.com/150"
                                sx={{ width: 50, height: 50 }}
                            />
                            <Stack>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    John Smith
                                </Typography>
                                <Typography variant="body2" color='textDisabled'>
                                    Lorem ipsum
                                </Typography>
                            </Stack>
                        </Stack>

                        <IconButton size="small"  >
                            <EditIcon fontSize="small" />
                        </IconButton>
                    </Stack>

                    <Divider />

                    <PersonalInformation />

                    <Divider />

                    <CompanyInformation />
                </Stack>
            </SectionWrapper>
        </Stack>
    )
}

export default MyProfile;

const PersonalInformation = () => {
    return (
        <Stack spacing={0.8}>
            {/* Header with Edit Icon */}
            <Box display="flex" justifyContent="space-between" alignItems="center"  >
                <Typography variant="h6" fontWeight="bold">
                    Personal Information
                </Typography>
                <IconButton size="small">
                    <EditIcon fontSize="small" />
                </IconButton>
            </Box>

            {/* Personal Information Grid */}
            <Grid container spacing={3} >
                <Grid item xs={6}>
                    <Typography fontWeight="bold">Full Name</Typography>
                    <Typography variant="body2">John Smith</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography fontWeight="bold">Phone</Typography>
                    <Typography variant="body2" >+09 123 456789</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography fontWeight="bold">Email Address</Typography>
                    <Typography variant="body2">johnsmith@gmail.com</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography fontWeight="bold">Country</Typography>
                    <Typography variant="body2">XYZ</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography fontWeight="bold">Lorem Ipsum</Typography>
                    <Typography variant="body2">xxx xxx xxx</Typography>
                </Grid>
            </Grid>
        </Stack >
    )
}

const CompanyInformation = () => {
    return (
        <Stack spacing={0.8}>
            {/* Header with Edit Icon */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                    Company Information
                </Typography>
                <IconButton size="small">
                    <EditIcon fontSize="small" />
                </IconButton>
            </Box>

            {/* Personal Information Grid */}
            <Grid container spacing={3}>
                <Grid item xs={6} spacing={2}>
                    <Typography fontWeight="bold">Company Name</Typography>
                    <Typography variant="body2">John Smith</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography fontWeight="bold">Bussiness Type</Typography>
                    <Typography variant="body2" >+09 123 456789</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography fontWeight="bold">Email Address</Typography>
                    <Typography variant="body2">johnsmith@gmail.com</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography fontWeight="bold">Phone</Typography>
                    <Typography variant="body2">+09123456789</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography fontWeight="bold">Lorem Ipsum</Typography>
                    <Typography variant="body2">xxx xxx xxx</Typography>
                </Grid>
            </Grid>
        </Stack>
    )
}
