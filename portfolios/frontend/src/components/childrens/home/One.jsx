import React from 'react'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { map ,times,forEach} from 'lodash';
import GSAP from 'gsap';

import PrimaryButton from '../mixins/PrimaryButton'


const One = () => {

  const marquee = useRef(null)
  const marqueeItem = useRef([])
  const [sliders, setSlider] = useState([])
  
   

  useEffect(() => {

    forEach(marqueeItem.current,(element)=>{
      GSAP .fromTo(element,
        {x:0},
        {x:-(marqueeItem.current[0].getBoundingClientRect().width),
          duration:12,
          ease:'none',
          repeat:-1   
        }
      )

    })
    axios.get(process.env.HOME_SLIDER_API).then((response) => {
      return response.data.data[0].heroSlider
    }).then((afterResponse)=>{
      setSlider(afterResponse)
    
    })
       
  }, [])


  return (
    <section className='section home-section-1  py-[5rem]'>
      <div className='grid grid-cols-1  md:grid-cols-2 gap-[3.75rem] container'>
        <div className='flex flex-col'>
          <h1 className='sm-font'>we are cascade</h1>
          <h2 className='xl-font'>space</h2>
        </div>
        <div className='flex flex-col items-start  justify-end md:items-end gap-[3.75rem]'>
          <p className='body-font w-[90.5%]  md:w-[70.5%] direction'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aspernatur enim sunt? Quae molestiae ullam ut? Delectus quia quod qui ex, sequi voluptate culpa dignissimos dolorem repellat ab nam incidunt!</p>
          <PrimaryButton text="get in touch with us" styleName='primary-button' />
        </div>
      </div>
      <div className='flex'>      
       <div className='marquee flex w-screen overflow-hidden py-[10rem]' ref={marquee}>
          {
            times(2, (i) => (
              <div key={i} className='marquee-item min-w-full flex' ref={(element)=>marqueeItem.current[i] = element }>                
                  {
                    map(sliders,(element,i)=>(
                      <div key={i} className='marquee-items mx-[4rem]'>
                        <img  className='marquee-items-img' src={`http://localhost:1337${element.url}`} alt='' loading="lazy" />
                      </div>
                    ))
                  }
              </div>
            ))           
          }  
        </div>
      </div>
    </section>
  )
}

export default One