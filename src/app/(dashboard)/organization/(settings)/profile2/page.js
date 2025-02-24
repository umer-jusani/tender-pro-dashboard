"use client";
import SectionWrapper from '@/shared/common-layouts/section-wrapper/sectionWrapper'
import { FLOW_SPACER } from '@/shared/constant/constant'
import BackButton from '@/shared/pure-components/back-button/BackButton'
import { Box, Grid2, LinearProgress, Stack, Typography } from '@mui/material';
import InputField from '@/shared/form-control/InputField';
import React from 'react'
import { SearchIcon } from '@/assests';
import SelectBox from '@/shared/form-control/select-box';
import UIButton from '@/shared/pure-components/button/button';

const page = () => {
    return (
        <Stack spacing={FLOW_SPACER}>
            <BackButton />

            <SectionWrapper>
                <Stack data-role="header">
                    <Typography variant='h5' fontWeight={"bold"}>My Profile</Typography>
                </Stack>

                <Stack data-role="content">
                    {/* ProgressBar */}
                    <Stack mb={3} spacing={1} mr={12}>
                        <Typography variant="body1" fontWeight="bold" gutterBottom>
                            Complete your profile
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <LinearProgress
                                variant="determinate"
                                value={90}
                                sx={{
                                    height: 15,
                                    borderRadius: 5,
                                    flex: 1,
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: "#007bff",
                                    },
                                }}
                            />
                            <Typography variant="caption" sx={{ marginLeft: 1 }}>
                                {90}%
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" color='textDisabled'>
                            You’re almost there!
                        </Typography>
                    </Stack>

                    {/* Connect Your Bank Account */}
                    <Stack spacing={4}>
                        <Stack>
                            <Typography variant='h6' fontWeight={"bold"}>Connect Your Bank Account</Typography>
                            <Typography variant='caption'>We use Stripe to process payments. Your bank account will be used for payouts when you win or post a tender.</Typography>
                        </Stack>

                        <Stack spacing={3}>
                            <InputField
                                fullWidth={false}
                                label="Account Holder Name"
                                size="small"
                                sx={{ width: "min(400px, 100%)" }}
                            />
                            <InputField
                                fullWidth={false}
                                placeholder="Search Here..."
                                size="small"
                                label="Account Number"
                                sx={{ width: "min(400px, 100%)" }}
                            />
                            <InputField
                                fullWidth={false}
                                placeholder="Search Here..."
                                size="small"
                                label="CVC"
                                sx={{ width: "min(400px, 100%)" }}
                            />
                            <InputField
                                fullWidth={false}
                                placeholder="Search Here..."
                                size="small"
                                label="CVC"
                                sx={{ width: "min(400px, 100%)" }}
                            />
                            <SelectBox
                                name="Account Type"
                                label="Account Type"
                                items={[
                                    { label: "All", value: "all" },
                                    { label: "Outsource", value: "outSource" },
                                    { label: "In-House", value: "inHouse" },
                                ]}
                                minWidth="400px"
                            />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <UIButton>Save Changes</UIButton>
                            <UIButton variant='outlined' color='text'>Cancel</UIButton>
                        </Stack>
                    </Stack>



                </Stack>
            </SectionWrapper>
        </Stack>
    )
}

export default page
