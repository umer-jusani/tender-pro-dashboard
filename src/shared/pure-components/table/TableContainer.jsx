import { CircularProgress, Pagination, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { StyledPaginationBox, StyledTable, StyledTableContainer, StyledTableRow } from "./ui";

function TableContainer({
    tableStyle,
    containerStyle,
    spanTd,
    message,
    isLoading,
    isContent,
    children,
    thContent,
    page,
    totalPages,
    callBack,
    ...props
}) {
    const shouldShowPagination = page === 10 ? (isContent && isContent >= 10 && page) : (isContent && page);
    return (
        <>
            <StyledTableContainer>
                <StyledTable sx={tableStyle} {...props}>
                    <TableHead>
                        <StyledTableRow>{thContent}</StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={spanTd} align="center">
                                    <CircularProgress size={24} />
                                </TableCell>
                            </TableRow>
                        ) : isContent ? (
                            children
                        ) : (
                            <TableRow>
                                <TableCell colSpan={spanTd} align="center" >
                                    <Typography variant="caption1">
                                        {message || "No Records Found"}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </StyledTable>
            </StyledTableContainer>
            {Boolean(shouldShowPagination) && (
                <UseMyPagination totalPages={totalPages} page={page} callBack={callBack} margin={{ my: 2 }} />
            )}
        </>
    );
}

const UseMyPagination = ({ margin, totalPages, callBack, page }) => {
    return (
        <StyledPaginationBox sx={margin}>
            <Pagination page={page} count={totalPages} color="primary" />
        </StyledPaginationBox>
    );
};

export default TableContainer;
