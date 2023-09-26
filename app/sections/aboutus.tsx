import Image from 'next/image'
import ImageCard from '../components/imageCard'



const AboutUs = () => {
    return (
        <div className="h-full py-24" id='about'>
            <div className="text-center">
                <h1 className="text-5xl font-bold" >About us</h1>
            </div>
            <div className=' w-full flex flex-col justify-center items-center mt-4 mx-0'>
                <div>
                    <img
                        src='/about.jpeg'
                        alt='about image'
                        data-aos='fade-right'
                        className='lg:hidden'
                    />
                </div>
                <div className="hidden lg:flex items-center justify-center pt-4">
                    <div className=' hidden lg:grid grid-flow-row-dense grid-cols-2 grid-rows-3 '>
                        <ImageCard image='/about.jpeg' animation='fade-right' />
                        <div></div>
                        <div></div>
                        <ImageCard image='/about2.jpeg' animation='fade-left' duration='800' />
                        <ImageCard image='/about.jpeg' animation='fade-right' duration='1000' />

                    </div>

                </div>
                <div className='w-[40%] text-left pt-20'>
                    <p>
                        LHA is not just an ordinary consultancy service; it&apos;s a game-changer for anyone looking to
                        navigate the complex landscapes of law and business in African countries. Our platform
                        seamlessly bridges the gap between industry professionals and individuals or SMEs seeking
                        expert guidance. With LHA, you gain access to a comprehensive suite of services.
                    </p>
                    <ol className='mt-4 list-disc text-left'>
                        <li>Legal Consultations</li>
                        <li>Legal Document Drafting</li>
                        <li>Legal Representation</li>
                        <li>Legal Consulting Services</li>
                        <li>Taxation and Accounting Services</li>
                    </ol>
                    <p className='mt-4'>
                        We emphasize dual focus on cutting-edge technology and a personalized experience. Our AI-powered platform streamlines processes, making them faster and more efficient than ever before.
                    </p>
                    <p className='mt-4'>
                        To deliver on our commitment to making the help you need more accessible than ever; our Tech Team is fine tuning our systems to ensure a seamless user experience.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutUs