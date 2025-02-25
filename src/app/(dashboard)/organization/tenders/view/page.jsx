"use client";
import { DeleteIcon, DollarIcon, EditIcon, TenderCar, TransportIcon } from '@/assests';
import SectionWrapper from '@/shared/common-layouts/section-wrapper/sectionWrapper';
import { FLOW_SPACER } from '@/shared/constant/constant';
import InputField from '@/shared/form-control/InputField';
import SelectBox from '@/shared/form-control/select-box';
import UIButton from '@/shared/pure-components/button/button';
import ModalWrapper from '@/shared/pure-components/ModalWrapper/ModalWrapper';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const DisclaimerBulletPoints = ["The information provided in this tender document is for the sole purpose of enabling interested parties to submit a bid",
    "TenderWord does not guarantee the accuracy or completeness of the information and reserves the right to amend, update, or withdraw this document at any time without prior notice."];

const TOSBulletPoints = ["Bids must comply with the terms and conditions specified in the tender document.",
    "TenderWord shall not be held liable for any costs incurred by bidders during the preparation or submission of their proposals."]

const COSBulletPoints = ["All items or services offered under this tender are sold on an ”as-is” basis. No warranties, either expressed or implied, are provided regarding the quality, condition, or suitability for a specific purpose."];

const ConfidentiallyBulletPoints = ["All information contained within this tender document must be treated as confidential and should not be disclosed to third parties without written consent."];

const LAWBulletPoints = ["This tender shall be governed by and interpreted in accordance with (the laws of the state of Delaware)."]


const TenderView = () => {
    const [modalOpen, setModalOpen] = useState(false);


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

                <Stack data-role="content" spacing={6}>
                    {/* first child */}

                    {/* <Grid2 container spacing={6}>
                        <Grid2 item size={7} border={"2px solid black"}>
                            <Stack spacing={4}>
                                <Stack spacing={0.5}>
                                    <Typography variant='h2' fontWeight={"bold"}>2018 Hyundai Sonata</Typography>
                                    <Typography variant='subtitle2' color='textDisabled'>Listing ID: 14076242 Item #: 7300-3356862</Typography>
                                </Stack>

                                <Stack bgcolor={"background.lightPurple"} px={2} py={4} borderRadius={"5px"} spacing={2} gridRow={"auto"}>
                                    <Typography variant='subtitle1' fontWeight={"bold"} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        Current Price
                                        <Typography variant='h5' sx={{ fontWeight: "medium" }} color='success'>US $700.00</Typography>
                                    </Typography>

                                    <Stack spacing={0.8}>
                                        <Typography sx={{ display: "flex", justifyContent: "space-between" }} color='textDisabled'>
                                            Buyer's Premium
                                            <Typography color='textPrimary' fontWeight={"medium"}>$10.00%</Typography>
                                        </Typography>

                                        <Typography color='textDisabled' sx={{ display: "flex", justifyContent: "space-between" }}>
                                            Bid Increment (US)
                                            <Typography color='textPrimary' fontWeight={"medium"}>$50.00</Typography>
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid2>

                        <Grid2 item size={5} bgcolor={"primary.light"} sx={{ boxShadow: 3, borderRadius: 2 }}>
                            <Image src={TenderCar} layout='responsive' />
                        </Grid2>
                    </Grid2> */}



                    <Stack direction="row" spacing={6}>
                        {/* Left Section (7 parts) */}
                        <Stack flex={6} spacing={4}>
                            <Stack spacing={0.5}>
                                <Typography variant='h2' fontWeight={"bold"}>2018 Hyundai Sonata</Typography>
                                <Typography variant='subtitle2' color='textDisabled'>
                                    Listing ID: 14076242 Item #: 7300-3356862
                                </Typography>
                            </Stack>

                            <Stack justifyContent={"center"} bgcolor={"background.lightPurple"} px={2} py={4} borderRadius={"5px"} spacing={2} flex={1}>
                                <Typography
                                    variant='subtitle1'
                                    fontWeight={"bold"}
                                    sx={{ display: "flex", justifyContent: "space-between" }}
                                >
                                    Current Price
                                    <Typography variant='h5' sx={{ fontWeight: "medium" }} color='success'>US $700.00</Typography>
                                </Typography>

                                <Stack spacing={0.8}>
                                    <Typography sx={{ display: "flex", justifyContent: "space-between" }} color='textDisabled'>
                                        Buyer's Premium
                                        <Typography color='textPrimary' fontWeight={"medium"}>$10.00%</Typography>
                                    </Typography>

                                    <Typography color='textDisabled' sx={{ display: "flex", justifyContent: "space-between" }}>
                                        Bid Increment (US)
                                        <Typography color='textPrimary' fontWeight={"medium"}>$50.00</Typography>
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                        {/* Right Section (5 parts) */}
                        <Stack flex={5} bgcolor={"primary.light"} sx={{ boxShadow: 3, borderRadius: 2 }}>
                            <Image src={TenderCar} layout='responsive' />
                        </Stack>
                    </Stack>

                    {/* Second child */}
                    <Stack spacing={1.5}>
                        <Typography variant='h5' fontWeight={"bold"}>Transport</Typography>
                        <UIButton startIcon={<TransportIcon />} width={"fit-content"}>Transporter</UIButton>
                    </Stack>

                    {/* Third Child */}
                    <Stack spacing={3}>
                        <TenderInfoSection title={"Disclaimer"} bulletPoints={DisclaimerBulletPoints} />
                        <TenderInfoSection title={"Terms of Submission"} bulletPoints={TOSBulletPoints} />
                        <TenderInfoSection title={"Conditions of Sale"} bulletPoints={COSBulletPoints} />
                        <TenderInfoSection title={"Confidentiality"} bulletPoints={ConfidentiallyBulletPoints} />
                        <TenderInfoSection title={"Governing Law"} bulletPoints={LAWBulletPoints} />
                    </Stack>
                </Stack>
            </SectionWrapper>

            {/* ModalWrapper */}
            <ModalWrapper open={modalOpen} onClose={()=> setModalOpen(false)}>
                <Stack mx={"auto"} spacing={3}>
                    <Stack spacing={-0.2}>
                        <Typography variant='h6' fontWeight={"bold"}>Submit A Bid</Typography>
                        <Typography variant='body2'>Submit your bid to proceed with the evaluation process.</Typography>
                    </Stack>
                    {/* Forms */}
                    <Stack spacing={1.5}>
                        <SelectBox
                            name="Account Type"
                            labelTop="Account Type"
                            // label="Account Type"
                            items={[
                                { label: "All", value: "all" },
                                { label: "Outsource", value: "outSource" },
                                { label: "In-House", value: "inHouse" },
                            ]}
                            minWidth="400px"
                        />
                        <InputField
                            labelTop="Bid Amount"
                            type="number"
                            icon={<DollarIcon />}
                        />
                    </Stack>
                    {/* Button */}
                    <UIButton>
                        Submit
                    </UIButton>
                </Stack>
            </ModalWrapper>
        </Stack>
    )
}

export default TenderView;


const TenderInfoSection = ({ title, bulletPoints = [] }) => {
    return (
        <Stack spacing={1.5}>
            <Typography variant='h5' fontWeight={"bold"}>{title}</Typography>
            <Stack>
                {bulletPoints?.map(ele => (
                    <Typography>&bull; {ele}</Typography>
                ))}
            </Stack>
        </Stack>
    )
}


