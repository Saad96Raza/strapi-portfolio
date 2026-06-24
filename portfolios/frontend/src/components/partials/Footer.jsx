import React from 'react'
import Line from '../childrens/mixins/Line'
import Input from '../childrens/mixins/Input'
import PrimaryButton from '../childrens/mixins/PrimaryButton'

const Footer = () => {
  return (
    <React.Fragment>
        <Line/>
        <footer className='flex flex-col'>
            <div className='footer-top py-[1.875rem] container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[3.125rem]'>
                    <div className='flex flex-col gap-[2.125rem]'>
                        <h4 className='sm-font'>Office</h4>
                        <div className='flex flex-col gap-[1.125rem]'>
                            <span className='heighlight'>Abidjan, Cote d’Ivoire</span>
                              <div className='flex flex-col'>
                                <span className='heighlight'>Monday → Friday 9am to 6pm</span>
                                <span className='heighlight'>(UTC)</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[2.125rem]'>
                        <h4 className='sm-font'>Join our newsletter</h4>
                        <div className='flex flex-col gap-[1.125rem]'>
                              <div className='flex flex-col gap-[1.125rem]'>
                                <span className='heighlight'>info@e6studio.com</span>
                                <span className='heighlight'>Creative? Share your work.</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[2.125rem]'>
                        <h4 className='sm-font'>Connect with us</h4>
                        <div className='flex flex-col gap-[1.125rem]'>
                            <div className='input'>
                                <div className='flex flex-col w-full'>
                                    <Input label="name" type="text" name="name"/>
                                </div>
                            </div>
                            <div className='input'>
                                <div className='flex gap-[1.125rem]'>
                                    <div className='flex flex-col w-full'>
                                        <Input label="e-mail" type="email" name="email"/>
                                    </div>
                                    <PrimaryButton styleName='primary-button-textless'/>
                                 </div>
                            </div>
                              
                        </div>

                    </div>
                    <div className='flex flex-col gap-[2.125rem]'>
                        <h4 className='sm-font'>Follow us</h4>
                        <div className='flex flex-col gap-[1.125rem]'>
                            <div className='flex'>
                                <ul className='grid grid-cols-2 gap-[1rem]'>
                                    <li><a href="#" className='link'>instagram</a></li>
                                    <li><a href="#" className='link'>linkedin</a></li>
                                    <li><a href="#" className='link'>dribble</a></li>
                                    <li><a href="#" className='link'>facebook</a></li>
                                    <li><a href="#" className='link'>instagram</a></li>
                                </ul>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Line/>
            <div className='footer-bottom py-[1.875rem] container'>
                <p className='body'>© {new Date().getFullYear()} We Are <a className='link'>Echelon6 Studio</a> All Rights Reserved.</p>
            </div>
        </footer>
    </React.Fragment>

  )
}

export default Footer