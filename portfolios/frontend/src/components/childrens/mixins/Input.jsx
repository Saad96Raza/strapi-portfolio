
import React from 'react'
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";


   const StyledTextField = styled(TextField)({
        "& .MuiInputBase-input": {
            backgroundColor: "transparent",
            borderBottom: "0.1rem solid #837f7f",
            transition: "border-color 0.2s ease",
            color:'#fff',
            fontSize : '1.4rem',
        },        
    })

    const Input = (props) => {
    return (
        <StyledTextField
            label={props.label}
            variant="standard"
            type={props.type}
            name={props.name}
            onChange={props.onChange}  // ✅ bind Formik handler
            onBlur={props.onBlur}
            error={props.error}      
            value={props.value}                    
            helperText={props.validation}  
            fullWidth
            sx={{        
                '&& .MuiInput-root::after': {
                    borderBottom: "0.1rem solid #fff", // Tailwind blue-500
                },
                '&& .MuiInputLabel-root ': {
                    color: "#837f7f",
                    fontSize : '1.4rem',
                },
            }}
        />
    )
}

export default Input