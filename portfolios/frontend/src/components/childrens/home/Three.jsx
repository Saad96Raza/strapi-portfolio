import React  from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios'
import { map } from 'lodash'
import Line from '../mixins/Line'



const Three = () => {

    const [features,setFeatures] = useState([])

    useEffect(()=>{
        axios.get(process.env.FEATURES_API).then((response)=>{setFeatures(response.data.data[0].feature)})
    },[])

 
  return (

    <div className='section home-section-3 grid grid-cols-1 items-center'>
        {

        map(features,(element, index) => (
             <React.Fragment key={index}>
                <Line/>
                <section  className='features-wrapper w-full container'>

                    <div className='features grid  grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[5rem] py-[4.875rem]  w-[90.5%]  md:w-[71.5%]'>
                        <h2 className='xl-font'>{element.number}</h2>
                        <div className='flex flex-col gap-[1rem] md:gap-[1.75rem] justify-center'>
                            <div className='flex flex-col'>
                                <h3 className='md-font  w-fit'>{element.title}</h3>
                            </div>    
                            <p className='body-font'>{element.description}</p>
                        </div>    
                    </div>
                </section>
            </React.Fragment>
        ))
        
        }
        

    </div>
  )
}

export default Three