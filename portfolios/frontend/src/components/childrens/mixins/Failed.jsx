import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const Failed = (props) => {
  return (
    <Modal
      open={props.failed}
      onClose={props.failed}
    >

      <Box component="section"  className="flex h-full">
          <div className="grid grid-cols-1 gap-[2rem] section section-modal-failed w-fit px-[1rem] md:px-[10rem] py-[10rem] my-auto  mx-auto">
            <div className='text-center md-font'>
              <h2>{props.text}</h2>
            </div> 
            <svg className="multiply" viewBox="0 0 52 52">
                <circle className="multiply__circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="multiply__line line1" fill="none" d="M16 16 L36 36"/>
                <path className="multiply__line line2" fill="none" d="M36 16 L16 36"/>
            </svg>
          </div>
      </Box>          

    </Modal>
  )
}

export default Failed




