import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'

const SectionWrapper = ({ children }) => {
    let HeaderChildern = children?.find(ele => ele.props["data-role"] == "header");
    let ContentChildern = children?.find(ele => ele.props["data-role"] == "content");

    return (
        <>
            <Box>
                {/* Heading Row */}
                <AppBar
                    sx={{
                        bgcolor: "background.default",
                        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.15)", // Soft bottom shadow
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        py: 2,
                        color: "text.primary"
                    }}
                    position="relative"
                    elevation={0}
                >
                    <Toolbar>
                        {HeaderChildern}
                    </Toolbar>
                </AppBar>
                <Box bgcolor={"background.default"} p={4}>
                    {ContentChildern}
                </Box>
            </Box>
        </>
    )
}

export default SectionWrapper
