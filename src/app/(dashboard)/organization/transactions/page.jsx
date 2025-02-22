"use client";
import { FileUploadIcon } from '@/assests'
import SectionWrapper from '@/shared/common-layouts/section-wrapper/sectionWrapper'
import { FLOW_SPACER } from '@/shared/constant/constant'
import UIButton from '@/shared/pure-components/button/button'
import TableContainer from '@/shared/pure-components/table/TableContainer';
import { Stack, TableCell, TableRow, Typography } from '@mui/material'
import { Fragment, useState } from 'react'

const transactionsThLabels = ["#ID", "Title", "Status", "Date", "Amount"];
// Sample data for designing the page
const sampleTransactions = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", phoneNumber: "123-456-7890", status: "Paid", date: "2025-02-23", amount: "$100" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", phoneNumber: "987-654-3210", status: "Unpaid", date: "2025-02-22", amount: "$250" },
    { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice@example.com", phoneNumber: "555-666-7777", status: "Paid", date: "2025-02-21", amount: "$500" },
    { id: 4, firstName: "Michael", lastName: "Brown", email: "michael@example.com", phoneNumber: "111-222-3333", status: "Paid", date: "2025-02-20", amount: "$320" },
    { id: 5, firstName: "Emily", lastName: "Davis", email: "emily@example.com", phoneNumber: "444-555-6666", status: "Paid", date: "2025-02-19", amount: "$150" },
    { id: 6, firstName: "Robert", lastName: "Miller", email: "robert@example.com", phoneNumber: "777-888-9999", status: "Unpaid", date: "2025-02-18", amount: "$75" },
    { id: 7, firstName: "Olivia", lastName: "Wilson", email: "olivia@example.com", phoneNumber: "222-333-4444", status: "Paid", date: "2025-02-17", amount: "$600" },
    { id: 8, firstName: "David", lastName: "Martinez", email: "david@example.com", phoneNumber: "666-777-8888", status: "Paid", date: "2025-02-16", amount: "$450" },
    { id: 9, firstName: "Sophia", lastName: "Anderson", email: "sophia@example.com", phoneNumber: "999-000-1111", status: "Unpaid", date: "2025-02-15", amount: "$200" },
    { id: 10, firstName: "Daniel", lastName: "Thomas", email: "daniel@example.com", phoneNumber: "555-444-3333", status: "Paid", date: "2025-02-14", amount: "$350" }
];

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState(sampleTransactions);


    const renderRow = (item, index) => {
        return (
            <TableRow key={index}>
                <TableCell size='small'>
                    <Typography>
                        {item?.firstName || "-"} {item?.lastName || "-"}
                    </Typography>
                </TableCell>
                <TableCell size='small'>
                    <Typography>
                        {item?.email || "-"}
                    </Typography>
                </TableCell>
                <TableCell size='small'>
                    <UIButton variant='text' color={item.status == "Paid" ? "success" : "error"}>
                        {item.status}
                    </UIButton>
                </TableCell>
                <TableCell size='small' sx={{ cursor: "pointer" }}>
                    <Typography>
                        {item.date}
                    </Typography>
                </TableCell>
                <TableCell size='small'>
                    <Typography>
                        {item.amount}
                    </Typography>
                </TableCell>
            </TableRow>
        );
    };


    return (
        <Stack spacing={FLOW_SPACER}>
            {/* Heading */}
            <Typography variant='h4' fontWeight={"bold"}>Transaction</Typography>

            <SectionWrapper>
                <Stack data-role="header" width={"100%"} direction={"row"} justifyContent={"space-between"}>
                    <Stack direction={"row"} spacing={2}>
                        <UIButton>
                            All
                        </UIButton>
                        <UIButton variant='outlined'>
                            Paid
                        </UIButton>
                        <UIButton variant='outlined'>
                            UnPaid
                        </UIButton>
                    </Stack>
                    <UIButton startIcon={<FileUploadIcon />}>
                        Export
                    </UIButton>
                </Stack>

                {/* py={6} mx={"auto"} width={"fit-content"} textAlign={"center"} spacing={3} */}
                <Stack data-role="content" >
                    {/* <Image src={NoTransactionFound} />
                    <Typography variant='body1' color='textDisabled' fontWeight={"bold"}>No Transaction Found.</Typography> */}

                    <TableContainer sx={{ whiteSpace: "noWrap" }}
                        thContent={transactionsThLabels.map((value, i) => (
                            <TableCell key={i}>
                                <Typography variant='h6' color='text.primary' fontWeight={"bold"}>{value}</Typography>
                            </TableCell>
                        ))}
                        spanTd={transactionsThLabels.length}
                        page={1}
                        totalPages={2}
                        // callBack={setPage}
                        isLoading={false}
                        isContent={transactions?.length}
                    >
                        {transactions?.map((item, i) => {
                            return <Fragment key={i}>{renderRow(item, i)}</Fragment>;
                        })}
                    </TableContainer>

                </Stack>

            </SectionWrapper>
        </Stack >
    )
}

export default TransactionsPage
