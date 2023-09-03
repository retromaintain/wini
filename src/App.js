import logo from './logo.svg';
import './App.css';
import MoonIndex from './components/MoonIndex';
import WAVE from './WAVE.svg'
import { HiCursorClick } from "react-icons/hi";
import Starscape from './components/Starscape';
import { Parallax } from 'react-scroll-parallax';
import MoonPhaseComponent from './components/MoonPhaseComponent';
import NextFullMoon from './components/NextFullMoon';
import IndexPage from './components/IndexPage';

function App() {
 
  

  return (
    <>


    <section className="pt-24 " >
      
      <Starscape />
    <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center ">
        <Parallax scale={['1.1', '1.3']}>
            <h1 className="mb-8 text-5xl textfont leading-none tracking-normal text-gray-100 md:text-9xl md:tracking-tight">
              Hello, Moongirl!
                {/* Hello Moongirl <BsBalloonHeartFill className='inline align-top text-red-600 rotate-6'/>! */}
            </h1>
            </Parallax>

            
            <p className="px-0 mb-8 text-xl text-gray-500 md:text-2xl lg:px-24 pfont">
                Welcome to your website <span className='text-white textfont'>Moongirl</span>, Happy <span className='text-white textfont'>19th</span> Birthday!
                Happy birthday, <span className='text-white textfont'>Winifer!</span> Wishing you a fantastic day filled with joy and cherished moments, my dear old friend. 
            </p>
           
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <Parallax scale={['1.3', '0.8']}>
                <a href="#_" className="inline-flex textfont items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                    Shuffle your starts <HiCursorClick className='ml-1'/>!
                    
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
