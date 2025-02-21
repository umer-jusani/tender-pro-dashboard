"use client";

import {
    FormControl,
    FormHelperText,
    InputAdornment,
    TextField,
    Typography,
    useMediaQuery
} from "@mui/material";
import React from "react";

const InputField = React.forwardRef(
    (
        {
            endIcon = null,
            startIcon = null,
            labelTop = "",
            label = "",
            placeholder = "",
            styles,
            error = "",
            helperText = "",
            icon,
            fullWidth = true,
            value: propsValue,
            onChange: propsOnChange,
            size,
            variant = "outlined",
            min = "",
            max = "",
            onBlur,
            onlyAlphabet = false,
            onlyNumeric = false,
            ...props
        },
        ref
    ) => {
        const matches = useMediaQuery("(min-width:600px)");
        const [stateValue, setStateValue] = React.useState("");
        const [localError, setLocalError] = React.useState(""); // for local error handling
        const value = propsValue !== undefined ? propsValue : stateValue;
        const _id = ``;
        const adjustSize = size ? size : matches ? "large" : "small";

        const removeError = (duration) => {
            setTimeout(() => setLocalError(""), duration); // Clear the error after duration
        };

        const onChange = (event) => {
            const newValue = event.target.value;
            let valid = true;

            // Check for only alphabet
            if (onlyAlphabet) {
                if (!/^[a-zA-Z]*$/.test(newValue)) {
                    valid = false;
                    setLocalError("Only alphabetic characters are allowed.");
                    removeError(3000);
                } else {
                    setLocalError("");
                }
            }

            // Check for only numeric (and positive)
            if (onlyNumeric) {
                if (!/^\d*$/.test(newValue)) {
                    valid = false;
                    setLocalError("Only numeric characters are allowed.");
                    removeError(3000);
                } else if (parseFloat(newValue) < 0) {
                    valid = false;
                    setLocalError("Only positive values are allowed.");
                    removeError(3000);
                } else {
                    setLocalError("");
                }
            }

            if (valid) {
                if (propsOnChange) {
                    propsOnChange(event);
                } else {
                    setStateValue(newValue);
                }
            }
        };

        const printError = () => {
            if (localError || error) {
                return (
                    <FormHelperText sx={{ mt: "0 !important" }}>
                        {`${localError || error}*`}
                    </FormHelperText>
                );
            }
        };

        const printHelperText = () => {
            if (helperText !== "") {
                return (
                    <FormHelperText
                        sx={{
                            mt: "0 !important",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "#6C6A6A",
                            fontWeight: 500,
                        }}
                    >
                        {helperText}
                        {icon}
                    </FormHelperText>
                );
            }
        };

        const commonTextProps = {
            // size: 'medium',
            // variant,
            // fullWidth: true,
            // error: isError,
            // helperText: errorMessageToShow,
            InputProps: {
                ...(startIcon
                    ? {
                        startAdornment: (
                            <InputAdornment position="start">{startIcon}</InputAdornment>
                        ),
                    }
                    : {}),
                ...(endIcon
                    ? {
                        endAdornment: (
                            <InputAdornment position="end">{endIcon}</InputAdornment>
                        ),
                    }
                    : {}),
                // ...InputProps,
            },
            // inputProps: { min: 4, max: 10 },
        };

        return (
            <FormControl
                sx={{ ...styles, width: 1 }}
                error={Boolean(localError || error)}
            >
                {labelTop && (
                    <Typography
                        // htmlFor={_id}
                        sx={{
                            marginBottom: "5px",
                            color: "#000",
                            fontWeight: "Medium",
                        }}
                    >
                        {labelTop}
                    </Typography>
                )}
                <TextField
                    placeholder={placeholder}
                    id={_id}
                    inputRef={ref}
                    error={Boolean(localError || error)}
                    label={label}
                    variant={variant}
                    fullWidth={fullWidth}
                    size={adjustSize}
                    autoComplete="off"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    inputProps={{
                        min: min,
                        max: max,
                    }}
                    {...commonTextProps}
                    {...props}
                    sx={{
                        "& input[type=number]": {
                            MozAppearance: "textfield", // ✅ Correct
                            WebkitAppearance: "none", // ✅ Correct
                            appearance: "textfield",
                            margin: 0,
                        },
                        "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                        {
                            WebkitAppearance: "none", // ✅ Correct
                        },
                        backgroundColor: "background.paper",
                        borderRadius: 1
                    }}
                />
                {printHelperText()}
                {printError()}
            </FormControl>
        );
    }
);

// Add displayName for the component
InputField.displayName = "InputField";

export default InputField;
