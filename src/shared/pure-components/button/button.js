"use client";

import { Button, CircularProgress } from "@mui/material";
import * as PropTypes from "prop-types";

// import UIFilterButton from "./filter";

const UIButton = ({
    children,
    variant = "contained",
    fullWidth = false,
    isLoading = false,
    sans = false,
    size = "large",
    width = "min-content",
    startIcon = null,
    endIcon = null,
    rounded = false,
    capitalize = true, 
    sx = {},
    callback = () => { },
    btnColor,
    ...otherProps
}) => {
    const loaderColor = variant === "contained" ? "common" : "primary";

    return (
        <Button
            fullWidth={fullWidth}
            rounded={rounded}
            size={size}
            sx={{ ...sx, textTransform: capitalize && "capitalize", bgcolor: btnColor }}
            variant={variant}
            startIcon={
                isLoading ? (
                    <CircularProgress size="0.7rem" color={loaderColor} pr="0.4rem" />
                ) : (
                    startIcon
                )
            }
            endIcon={
                isLoading ? (
                    <CircularProgress size="0.7rem" color={loaderColor} pr="0.4rem" />
                ) : (
                    endIcon
                )
            }
            btnColor={btnColor}
            disabled={isLoading}
            {...otherProps}
            onClick={callback}
        >
            {children}
        </Button>
    );
};

export default UIButton;

// export {  UIFilterButton };

UIButton.propTypes = {
    sx: PropTypes.object,
    sans: PropTypes.bool,
    size: PropTypes.string,
    rounded: PropTypes.bool,
    children: PropTypes.any,
    isLoading: PropTypes.bool,
    startIcon: PropTypes.node,
    variant: PropTypes.string,
    btnColor: PropTypes.string,
};
