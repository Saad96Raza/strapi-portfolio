import React from 'react'
import { useState  } from 'react'
import PrimaryButton from '../mixins/PrimaryButton'
import Input from '../mixins/Input'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from "yup"
import Success from '../mixins/Success'
import Failed from '../mixins/Failed'

const One = () => {
  
  const [success , setSuccess] = useState(false)
  const [failed , setFailed] = useState(false)

  const {values,errors , touched,  handleSubmit , handleChange ,handleBlur }  =  useFormik({
    initialValues : {
      first: "",
      last: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    },
    validationSchema: Yup.object().shape({
      first: Yup.string().min(3).max(50).required('first name is required'),
      last: Yup.string().min(3).max(50).required('last name  is required'),
      email: Yup.string().email().required('please add the valid email address'),
      phone: Yup.string().matches(/^[0-9]{11,14}$/, 'Phone number must be between 11 and 14 digits').min(11).max(14).required('please add the valid phone number'),
      subject: Yup.string().min(6).max(20).required('subject is required'),
      message: Yup.string().required('please add some lines of query').min(20),
    }),
    onSubmit: async (values,action)=>{

      console.log(values)
      
      action.resetForm()
      axios.post(process.env.CONTACT_FORM_FIELDS,
          {
            data:{ form : values}
          },
        ).then((response) => {
          action.resetForm()
          if (response.status === 201) {
              setSuccess(true)
              setTimeout(()=>setSuccess(false),2000)
          }
          console.log(response)

        }).catch((error) => {
          console.log(error)
          setFailed(true)
          setTimeout(()=>setFailed(false),2000)
      })
       
    }



  })




  
  return (
      <section className='section contact-section-1  py-[5rem]'>
        <div className='container'>
    
            <div className='grid grid-cols-1  gap-[3.75rem]'>
              <div className='flex flex-col'>
                <h1 className='sm-font'>get in touch</h1>
                <h2 className='xl-font'>with us</h2>
              </div>
              <div className='flex flex-col  gap-[3.75rem]'>
                <p className='body-font w-full md:w-[40.5%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aspernatur enim sunt? Quae molestiae ullam ut? Delectus quia quod qui ex, sequi voluptate culpa dignissimos dolorem repellat ab nam incidunt!</p>
              </div>
            </div>

            <form  className='flex flex-col' onSubmit={handleSubmit}>
              <div className='grid  gird-cols-1 md:grid-cols-2 gap-[3.75rem] pt-[10rem] pb-[5rem]'>
                <div className='flex'>
                    <Input 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    error={(errors.first && touched.first) ? true : false}  
                    validation={(errors.first && touched.first) ? errors.first : ''} 
                    value={values.first} label="first name" name="first"/>
                </div>
                <div className='flex'>
                    <Input onChange={handleChange}
                    onBlur={handleBlur} 
                    error={(errors.last && touched.last) ? true : false}
                    validation={(errors.last && touched.last) ? errors.last : ''}
                    value={values.last} label="last name" name="last"/>
                </div>
                <div className='flex'>
                    <Input 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    error={(errors.email && touched.email) ? true : false}
                    validation={(errors.email && touched.email) ? errors.email : ''} 
                    value={values.email} label="email" name="email"/>
                </div>
                <div className='flex'>
                    <Input  
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    error={(errors.phone && touched.phone) ? true : false}
                    validation={(errors.phone && touched.phone) ? errors.phone : ''}
                    value={values.phone} label="phone number" name="phone"/>
                </div>
                <div className='flex col-span-2'>
                    <Input onChange={handleChange}
                    onBlur={handleBlur}
                    error={(errors.subject && touched.subject) ? true : false}  
                    validation={(errors.subject && touched.subject) ? errors.subject : ''}
                    value={values.subject} label="subject" name="subject"/>
                </div>
                <div className='flex col-span-2'>
                  <Input onChange={handleChange} 
                  onBlur={handleBlur}  
                  error={(errors.message && touched.message) ? true : false}  
                  validation={(errors.message && touched.message) ? errors.message : ''}
                  value={values.message} label="Message" name="message" />
                </div>
              </div>  

              <PrimaryButton  type="submit" text="send us your query" value="" styleName='primary-button' />

            </form>

        </div>
      <Success success={success} text="Thank You Message Have Been Sent" />
      <Failed failed={failed} text="Sorry Your Message Have Not Been Sent" />

    </section>
  ) 
}

export default One