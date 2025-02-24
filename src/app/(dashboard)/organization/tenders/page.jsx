import { DeleteIcon, EditIcon } from '@/assests'
import SectionWrapper from '@/shared/common-layouts/section-wrapper/sectionWrapper'
import { FLOW_SPACER } from '@/shared/constant/constant'
import UIButton from '@/shared/pure-components/button/button'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const MyTenders = () => {
    return (
        <Stack spacing={FLOW_SPACER}>
            {/* Heading */}
            <Typography variant='h4' fontWeight={"bold"}>Tenders</Typography>

            <SectionWrapper>
                {/* header */}
                <Stack data-role="header" direction={"row"} alignItems={"center"} justifyContent="space-between" flex={1}>
                    <Typography variant='h5' fontWeight={"bold"}>Hyundai Sonata</Typography>
                    <Stack direction="row" spacing={2}>
                        <UIButton variant='outlined' color="" startIcon={<EditIcon />}>Edit</UIButton>
                        <UIButton variant='outlined' color='error' startIcon={<DeleteIcon />}>Delete</UIButton>
                    </Stack>
                </Stack>

                <Stack data-role="content">
                    
                </Stack>
            </SectionWrapper>
        </Stack>
    )
}

export default MyTenders;
