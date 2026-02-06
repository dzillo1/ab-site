import { useEffect } from 'react';
import UwHeroImage from '../assets/uw-hero-img.jpg';
import { gsap } from "gsap";

gsap.registerPlugin();


function HeroImage() {
    useEffect(() => {
        gsap.to(".uw-img", { opacity: 0, x: 200});
        gsap.to(".uw-img", { delay: .8, duration: 1, x: 0, opacity: 1 });

    }, []);
    return(
        <img src={UwHeroImage} className="img-fluid uw-img" alt="hero image" />
    );
}

export default HeroImage;