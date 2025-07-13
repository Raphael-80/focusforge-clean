import React from 'react'
// import HeroImg from '../assets/Hero_img.jpg';

const HeroSection = () => {
    return (
        <div>
            <section className="relative w-full h-[400px] md:h-[400px] bg-center bg-cover flex items-center justify-center"
                style={{ backgroundImage: "url('/hero_img.jpg')" }}>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
            </section>
        </div>
    )
}

export default HeroSection