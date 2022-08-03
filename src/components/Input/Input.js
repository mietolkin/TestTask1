import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Input(props) {
    
    const {data} = props;
    const {mode, setMode} = props;
    const {setFields} = props;
    const {start} = props;
    const handleChange = (event) => {
        setMode(event.target.value);
        data.find(item => {
            if (item.name === event.target.value) {
                setFields(item.field);
            }
        });
    };

    return (
      <div style={{width: '120px'}}>
        <Box sx={{ m: 1, minWidth: 120 }} size="big">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Mode</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mode}
              label="Age"
              onChange={handleChange}
              disabled={start} 
            >

            {data.map((data) => (
                <MenuItem key={data.field} value={data.name}>
                    {data.name}
                </MenuItem>
            ))}
            </Select>
          </FormControl>
        </Box>
      </div>
    );
}

export const MemoizedInput = React.memo(Input);
