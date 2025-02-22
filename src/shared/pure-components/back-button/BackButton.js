"use client";
import { Button, IconButton } from '@mui/material'
import React from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from 'next/navigation';

const BackButton = ({ name = "Back" }) => {
    const router = useRouter();
    return (
        <>
            <Button
                onClick={() => router.back()}
                variant=""
                sx={{
                    display: "flex",
                    width: "fit-content",
                    fontWeight: "bold",
                    alignItems: "center",
                    gap: 1,
                    // color: "white",
                    padding: "8px 16px",
                    borderRadius: "50px",
                }}
                startIcon={
                    <IconButton
                        sx={{
                            backgroundColor: "primary.main",
                            width: 36,
                            height: 36,
                            "&:hover": { backgroundColor: "#ddd" },
                        }}
                    >
                        <ArrowBackIcon sx={{ color: "text.secondary" }} />
                    </IconButton>
                }
            >

                {name}
            </Button>
        </>
    )
}

export default BackButton // Single Responsible Component
