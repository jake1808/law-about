'use client'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

interface Props {
    image: string,
    animation: string,
    duration?: string
}
const ImageCard = ({ image, animation, duration }: Props) => {
    useEffect(() => {
        AOS.init({
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:

            delay: 1000, // values from 0 to 3000, with step 50ms
            duration: 600, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them

        });

    })
    return (<Image
        src={image}
        alt='about image'
        width={300}
        height={300}
        data-aos={animation}
        className='rounded-lg shadow-xl'
        data-aos-duration={duration || ''}
    />);
}

export default ImageCard;