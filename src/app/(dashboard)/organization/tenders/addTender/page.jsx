"use client";
import { DollarIcon } from '@/assests';
import SectionWrapper from '@/shared/common-layouts/section-wrapper/sectionWrapper';
import { FLOW_SPACER } from '@/shared/constant/constant';
import UIDatePicker from '@/shared/form-control/DatePicker';
import InputField from '@/shared/form-control/InputField';
import SelectBox from '@/shared/form-control/select-box';
import BackButton from '@/shared/pure-components/back-button/BackButton';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

const AddTender = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDatePicker = (date) => {
        dayjs(date).startOf('d').toISOString()
        const formattedDate = date ? dayjs(date).format('YYYY-MM-DD') : null;
        setSelectedDate(date);
        console.log(formattedDate, "formattedDate");
    }

    return (
        <Stack spacing={FLOW_SPACER}>
            <BackButton />

            <SectionWrapper>
                <Stack data-role="header">
                    <Typography variant='h5' fontWeight={"bold"}>Create New Tender</Typography>
                </Stack>
                <Stack data-role="content">
                    <InputField
                        fullWidth={false}
                        placeholder="E.g. Gold Ring"
                        label="Title"
                        sx={{ width: "min(400px, 100%)" }}
                    />
                    <InputField
                        type="number"
                        fullWidth={false}
                        placeholder="Enter Amount"
                        label="Tender Budget Amount"
                        sx={{ width: "min(400px, 100%)" }}
                        icon={<DollarIcon />}
                    />
                    <SelectBox
                        // fullWidth
                        name="Size"
                        label="Tender Type"
                        items={[
                            { label: "All", value: "all" },
                            { label: "Outsource", value: "outSource" },
                            { label: "In-House", value: "inHouse" },
                        ]}
                    />
                    <UIDatePicker
                        name="date"
                        // label="Select Date"
                        value={selectedDate}
                        onChange={handleDatePicker}
                        sx={{ width: "min(400px, 100%)" }}
                        errorMessage="" // Pass error messages if needed
                    />
                    <SelectBox
                        // fullWidth
                        name="Size"
                        label="Category"
                        items={[
                            { label: "All", value: "all" },
                            { label: "Outsource", value: "outSource" },
                            { label: "In-House", value: "inHouse" },
                        ]}
                    />
                      {/* <UISwitch name="switchValue" /> */}
                </Stack>
            </SectionWrapper>
        </Stack>
    )
}

export default AddTender