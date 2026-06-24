import React from 'react'

const PrimaryButton = (props) => {
  return (
    <a href={props.link}  target="_blank" rel="noopener noreferrer"
    onClick={props.onClick}    
    type={props.type} 
    className={`${props.styleName} flex`}
    >
        <button className="small-btn-cta-link small-btn-cta-link-cta -xxl">
            <span className="small-btn-cta-border"></span>
            <span className="small-btn-cta-ripple">
            <span></span>
            </span>
            <span className="small-btn-cta-title">
              <span className="sm-btn-text" data-text={props.text}>{props.text}<i className='icon-ArrowDownRight'></i></span>
            </span>
        </button>
    </a>     
  )
}

export default PrimaryButton