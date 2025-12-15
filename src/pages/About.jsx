import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutContent from '../components/about/AboutContent'
import DigitalEraSection from '../components/about/DigitalEraSection'
import LogoCarousel from '../components/home/Logo'

const About = () => {
    return (

        

        <>
            <div className='bg-black text-white'>

                <div className='bg-fixed'>  {/* fixed background  paralex background */}
                    <AboutHero />
                </div>
                <div className=' text-white h-[50vh] w-full flex  items-center justify-center max-w-[1200px] mx-auto'>

                    <AboutContent />
                </div>

                
                <DigitalEraSection />
                <LogoCarousel />
            </div>
        </>
    )
}


export default About

