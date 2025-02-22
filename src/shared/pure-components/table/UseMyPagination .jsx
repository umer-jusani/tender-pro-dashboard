const UseMyPagination = memo(({ margin, totalPages, callBack, page }) => {
    return (
        <Box sx={{ ...margin, display: "flex", justifyContent: "flex-end" }}>
            <Pagination page={page} count={totalPages} color="primary" onChange={(_, newPage) => callBack(newPage)} />
        </Box>
    );
});
