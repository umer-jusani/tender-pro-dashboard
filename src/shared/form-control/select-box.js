"use client";
import { useState, useEffect } from "react";
import { InputLabel, FormControl, Select, MenuItem, FormHelperText, Box } from "@mui/material";

export default function SelectBox({
    initValue = "",
    labelTop,
    label,
    items = [],
    name = "",
    error = "",
    addNew = false,
    styles = {},
    minWidth = "150px",
    required,
    addHandle = () => { },
    search = () => { },
    handleChange = () => { },
    disabled = false,
    ...props
}) {
    const [selected, setSelected] = useState("");
    const rand = `select__${Math.ceil(Math.random())}`;

    useEffect(() => {
        setSelected(initValue);
    }, [initValue]);

    const handleSelect = (e) => {
        setSelected(e.target.value);
        handleChange(e);
    };

    const printError = () => {
        if (error !== "") {
            return (
                <FormHelperText sx={{ color: "#d32f2f", mt: "0 !important" }}>
                    {error}
                </FormHelperText>)
        }
    }

    return (
        <Box sx={styles}>
            {labelTop && (
                <InputLabel
                    id={rand}
                    error={Boolean(error !== "")}
                    sx={{ marginBottom: "5px", color: "" }}
                >
                    {labelTop}
                </InputLabel>
            )}
            <FormControl sx={{ minWidth: minWidth }} error={Boolean(error !== "")} {...props}>
                {label && (
                    <InputLabel
                        id={rand}
                        sx={{ backgroundColor: "#fff", color: "GrayText", px: 1 }}
                    >
                        {label}
                    </InputLabel>
                )}
                <Select
                    id={rand}
                    onChange={handleSelect}
                    value={selected}
                    name={name}
                    required={required}
                    error={Boolean(error !== "")}
                    disabled={disabled}
                >
                    {addNew && (
                        <MenuItem
                            value=""
                            onClick={() => addHandle(true)}
                        >
                            Add New
                        </MenuItem>
                    )}
                    {
                        (!items || !items?.length) ?
                            <MenuItem disabled>{"No Options"}</MenuItem>
                            :
                            items?.map((_v, _i) => (
                                <MenuItem
                                    key={_i}
                                    value={_v.value}
                                >
                                    {_v.label}
                                </MenuItem>
                            ))
                    }
                </Select>
            </FormControl>
            {printError()}
        </Box>
    );
}

