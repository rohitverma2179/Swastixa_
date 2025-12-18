import React from 'react'
import AboutHero from '../components/about/AboutHero'
// import AboutContent from '../components/about/AboutContent'
import DigitalEraSection from '../components/about/DigitalEraSection'
import LogoCarousel from '../components/home/Logo'
import ScrollReveal from '../components/common/ScrollReveal'
import CardSwap, { Card } from '../components/common/CardSwap'

const About = () => {



    const cardData = [
    {
        id: 1,
        title: "Social Media Management",
        description: "Strategic content and consistent management that turns followers into loyal audiences.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 2,
        title: "Production House",
        description: "High-impact videos, ads, and visual stories crafted to connect and inspire.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 3,
        title: "Website Development",
        description: "Clean, responsive, and scalable websites built for speed, experience, and conversion.",
        image: "https://swastixa.b-cdn.net/About%20-%204%20-%20%20(2).png"
    },
    {
        id: 4,
        title: "Digital Marketing",
        description: "Performance-driven campaigns designed to increase reach, engagement, and measurable growth.",
        image: "https://swastixa.b-cdn.net/About%20-%204%20-%20%20(1).png"
    },
    // {
    //     id: 5,
    //     title: "DevOps Engineer",
    //     description: "Streamlining deployment and operations for maximum efficiency.",
    //     image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000"
    // },
];

    return (
        <>
            <div className='bg-black text-white'>

                <div className=''>  {/* fixed background  paralex background */}
                    {/* <AboutHero /> */}

                    <div style={{ height: '600px', position: 'relative' }}>
                        <CardSwap
                            cardDistance={60}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={true}
                        >
                            <Card>
                                <h3>Card 1</h3>
                                <p>Your content here</p>
                            </Card>
                            <Card>
                                <h3>Card 2</h3>
                                <p>Your content here</p>
                            </Card>
                            <Card>
                                <h3>Card 3</h3>
                                <p>Your content here</p>
                            </Card>
                            <Card>
                                <h3>Card 4</h3>
                                <p>Your content here</p>
                            </Card>
                            <Card>
                                <h3>Card 5</h3>
                                <p>Your content here</p>
                            </Card>
                            <Card>
                                <h3>Card 6</h3>
                                <p>Your content here</p>
                            </Card>
                        </CardSwap>
                    </div>
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