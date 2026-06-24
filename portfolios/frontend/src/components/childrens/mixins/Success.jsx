import React from 'react'
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";

const Success = (props) => {

  return (

    <Modal
      open={props.success}
      onClose={props.success}
    >

      <Box component="section" className="flex h-full">
          <div className="grid grid-cols-1 gap-[2rem] section section-modal-success w-fit px-[1rem] md:px-[10rem] py-[10rem] m-auto">
            <div className='text-center md-font'>
              <h2>{props.text}</h2>
            </div> 
            <svg className="checkmark" viewBox="0 0 52 52"> 
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /> 
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
      </Box>          

    </Modal>
  )
}

export default Success








