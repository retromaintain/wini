import './App.css';
import MoonIndex from './components/MoonIndex';
import { HiCursorClick } from "react-icons/hi";
import Starscape from './components/Starscape';
import { Parallax } from 'react-scroll-parallax';
import MoonPhaseComponent from './components/MoonPhaseComponent';
import NextFullMoon from './components/NextFullMoon';
import IndexPage from './components/IndexPage';
import splitType from 'split-type';
import { gsap } from 'gsap';
import React, { useEffect } from 'react';




function App() {
  useEffect(() => {
    const animateText = () => {
      // Character-by-character animation for h1.our-text
      const h1Text = new splitType('h1.our-text', { types: 'chars' });
      const h1Chars = h1Text.chars;

      gsap.fromTo(
        h1Chars,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 3,
          ease: 'power4.out',
        }
      );

      // Word-by-word animation for p.our-text
      const pText = new splitType('p.our-text', { types: 'words' });
      const pWords = pText.words;

      gsap.fromTo(
        pWords,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2, // Adjust the stagger value as needed
          duration: 2,
          delay: 2,
          ease: 'power4.out',
        }
      );
    };

    animateText();
  }, []);

  

  return (
    <>
    


    <section className="pt-24 " >
      
      <Starscape />
    <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center ">
        <Parallax scale={['1.1', '1.3']}>
            <h1 className="our-text mb-8 mt-2 text-4xl md:text-center textfont leading-none tracking-normal text-gray-100 md:text-9xl md:tracking-tight">
              Hello, Moongirl!
                {/* Hello Moongirl <BsBalloonHeartFill className='inline align-top text-red-600 rotate-6'/>! */}
            </h1>
            </Parallax>

            
            <p className="our-text px-0 mb-8 text-xl text-gray-500 md:text-2xl lg:px-24 pfont">
                Welcome to your website <span className='text-white textfont'>Moongirl</span>, Happy <span className='text-white textfont'>19th</span> Birthday!
                Happy birthday, <span className='text-white textfont'>Winifer!</span> Wishing you a fantastic day filled with joy and cherished moments, my dear old friend. 
            </p>
           
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <Parallax scale={['1.3', '0.8']}>
                <a href="#_" className="inline-flex textfont items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0 hover:scale-125 transition-all duration-500">
                   Make the stars dance <HiCursorClick className='ml-1'/>!
                    
                </a>
                </Parallax>
            </div>
        </div>
        <div className="w-full mx-auto mt-10 text-center md:w-10/12 my-72">
            <div className="relative z-0 w-full mt-8">
                <div className="relative overflow-hidden">
                  
                <Parallax scale={['1.6', '0.1']}>
                  
                    <MoonIndex />
                    
                    </Parallax>
                    
                </div>
            </div>
        </div>
    </div>
    <Parallax scale={['1.5', '0.5']}>
                  
                   
    <MoonPhaseComponent />
    </Parallax>
    <Parallax scale={['1.1', '0.1']}>
                  
                    <MoonIndex />
                    <NextFullMoon />
                    </Parallax>
</section>
<IndexPage />
</>
  );
}

export default App;
