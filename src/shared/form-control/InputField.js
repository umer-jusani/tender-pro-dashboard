"use client";

import React from "react";
import {
    FormHelperText,
    TextField,
    useMediaQuery,
    Typography,
    FormControl,
    InputAdornment,
} from "@mui/material";
import { Controller } from "react-hook-form";

const InputField = React.forwardRef(
    (
        {
            labelTop = "",
            label = "",
            styles,
            error = "",
            helperText = "",
            icon,
            startIcon = null,
            fullWidth = true,
            value: propsValue,
            onChange: propsOnChange,
            size = "medium",
            variant = "outlined",
            min = "",
            max = "",
            type = "",
            onBlur,
            control = null, // react-hook-form control
            name = "fallback",
            errors = {},
            InputProps = {},
            ...props
        },
        ref
    ) => {
        const matches = useMediaQuery("(min-width:600px)");
        const _id = `myInput__`;

        const errorMessageToShow = error || errors[name]?.message;
        const isError = Boolean(errorMessageToShow);

        const commonTextFieldProps = {
            id: _id,
            inputRef: ref,
            error: isError,
            label,
            type,
            variant,
            fullWidth,
            size: size,
            autoComplete: "off",
            value: propsValue,
            onBlur,
            onChange: propsOnChange,
            inputProps: { min, max },
            InputProps: {
                ...(startIcon ? { startAdornment: <InputAdornment position="start">{startIcon}</InputAdornment> } : {}),
                ...(icon ? { endAdornment: <InputAdornment position="end">{icon}</InputAdornment> } : {}),
                ...InputProps,
            },
            ...props,
        };

        return (
            <FormControl sx={{ ...styles, width: 1 }} error={isError}>
                {labelTop && (
                    <Typography sx={{ marginBottom: "5px", color: "text.primary", fontWeight: "Medium" }} >
                        {labelTop}
                    </Typography>
                )}

                {control ? (
                    <Controller
                        name={name}
                        control={control}
                        render={({ field }) => <TextField {...commonTextFieldProps} {...field} InputLabelProps={{ sx: { color: "GrayText" } }} />}
                    />
                ) : (
                    <TextField {...commonTextFieldProps} color="primary" InputLabelProps={{ sx: { color: "GrayText" } }} />
                )}

                {helperText && (
                    <FormHelperText sx={{ mt: "0 !important", color: "#6C6A6A", fontWeight: 500 }}>
                        {helperText}asd
                    </FormHelperText>
                )}

                {isError && <FormHelperText sx={{ mt: "0 !important" }}>{errorMessageToShow}*</FormHelperText>}
            </FormControl>
        );
    }
);

InputField.displayName = "InputField";

export default InputField;
