"use client";

import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const SelectBox = ({ control, name = "age", label, size = "medium", labelId = "select-label", id = "select-id", minWidth = "150px", options = [] }) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id={labelId} sx={{ color: "text.primary" }}> {label}</InputLabel>

            {control ? (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Select {...field} label={label} labelId={labelId} id={id}>
                            {options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                />
            ) : (
                <Select
                    labelId={labelId}
                    id={id}
                    fullWidth
                    label={label}
                    sx={{ minWidth: minWidth }}
                    value={value}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            )}
        </FormControl>
    );
};

export default SelectBox;
