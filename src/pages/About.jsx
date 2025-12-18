import React from 'react'
import AboutHero from '../components/about/AboutHero'
// import AboutContent from '../components/about/AboutContent'
import DigitalEraSection from '../components/about/DigitalEraSection'
import LogoCarousel from '../components/home/Logo'
import ScrollReveal from '../components/common/ScrollReveal'

const About = () => {
    return (
        <>
            <div className='bg-black text-white'>

                <div className='bg-fixed'>  {/* fixed background  paralex background */}
                    <AboutHero />
                </div>
                <div className=' text-white h-[50vh] w-full lg:max-w-[980px] text-center flex  items-center  lg:mb-60 justify-center max-w-[1200px] mx-auto'>

                    <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                    >
                        For us, creativity is a refined and strategic flow where deep understanding shapes ideas, thoughtful design creates balance, and digital innovation transforms vision into powerful and scalable solutions, delivered with clarity, consistency, and measurable performance across every stage of the brand journey.

                    </ScrollReveal>
                </div>


                <DigitalEraSection />
                <LogoCarousel />
            </div>
        </>
    )
}




export default About