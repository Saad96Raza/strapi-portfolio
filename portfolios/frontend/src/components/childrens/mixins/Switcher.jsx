import React from 'react'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Switcher = () => {

const Switcher = styled(Switch)({
 

  '& .MuiSwitch-track': {
    backgroundColor: '#a7111c', 
    opacity: 1,
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#ffffff',
    opacity: 1,
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#837f7f', 
    '& + .MuiSwitch-track': {
      backgroundColor: '#837f7f', 
      opacity: 1,
    },
 
  },
})

  return (
    <FormGroup >
        <FormControlLabel
        control={<Switcher />}
        sx={{
            '&&.MuiFormControlLabel-root':{
              marginRight: 0,
            },
            '&& .MuiSwitch-input': {
              width: "auto",
            },

        }}
        />
    </FormGroup>
  )
}

export default Switcher