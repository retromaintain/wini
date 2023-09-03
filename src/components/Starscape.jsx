import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AUDIO = new Audio("https://cdn.discordapp.com/attachments/1071891376557527191/1147782879695355914/loop.mp3");

const Starscape = ({
  densityRatio = 0.5,
  sizeLimit = 5,
  defaultAlpha = 0.2,
  scaleLimit = 12,
  proximityRatio = 0.1,
}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const starsRef = useRef(null);
  const vminRef = useRef(null);
  const scaleMapperRef = useRef(null);
  const alphaMapperRef = useRef(null);
  const isPartyRef = useRef(false);

  useEffect(() => {
    contextRef.current = canvasRef.current.getContext('2d'); // Get the 2D context

    const LOAD = () => {
      vminRef.current = Math.min(window.innerHeight, window.innerWidth);
      const STAR_COUNT = Math.floor(vminRef.current * densityRatio);
      scaleMapperRef.current = gsap.utils.mapRange(
        0,
        vminRef.current * proximityRatio,
        scaleLimit,
        1
      );
      alphaMapperRef.current = gsap.utils.mapRange(
        0,
        vminRef.current * proximityRatio,
        1,
        defaultAlpha
      );
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      starsRef.current = new Array(STAR_COUNT).fill().map(() => ({
        hue: isPartyRef.current ? gsap.utils.random(0, 60) : 0, // Random hue when party mode, else 0
        saturation: isPartyRef.current ? 100 : 0, // 100% saturation in party mode, else 0
        lightness: isPartyRef.current ? 80 : 100, // 80% lightness in party mode, else 100
        x: gsap.utils.random(0, window.innerWidth, 1),
        y: gsap.utils.random(0, window.innerHeight, 1),
        size: gsap.utils.random(1, sizeLimit, 1),
        scale: 1,
        alpha: defaultAlpha,
      }));
    };

    const RENDER = () => {
      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      starsRef.current.forEach((star) => {
        contextRef.current.fillStyle = `hsla(${star.hue}, ${star.saturation}%, ${star.lightness}%, ${star.alpha})`;
        contextRef.current.beginPath();
        contextRef.current.arc(
          star.x,
          star.y,
          (star.size / 2) * star.scale,
          0,
          Math.PI * 2
        );
        contextRef.current.fill();
      });
    };

    const UPDATE = ({ x, y }) => {
      if (!isPartyRef.current) {
        starsRef.current.forEach((STAR) => {
          const DISTANCE = Math.sqrt(
            Math.pow(STAR.x - x, 2) + Math.pow(STAR.y - y, 2)
          );
          gsap.to(STAR, {
            scale: scaleMapperRef.current(
              Math.min(DISTANCE, vminRef.current * proximityRatio)
            ),
            alpha: alphaMapperRef.current(
              Math.min(DISTANCE, vminRef.current * proximityRatio)
            ),
          });
        });
      }
    };

    const PARTY_EFFECT = () => {
      if (!isPartyRef.current) {
        isPartyRef.current = true;
        gsap.to(starsRef.current, {
          scale: 1.1,
          alpha: defaultAlpha,
          
          onComplete: () => {
            isPartyRef.current = false;
          },
          duration: 0.5, // Make the overall animation slower
        });
        const STAGGER = 0.01; // Adjust the stagger value for smoother animation
    
        for (let s = 0; s < starsRef.current.length; s++) {
          gsap.to(starsRef.current[s], {
            onStart: () => {
              gsap.set(starsRef.current[s], {
                //hue: 270, // Set to a purple hue value (around 270)
                //saturation: 100, // 100% saturation
                lightness: 80, // 80% lightness
                alpha: 1,
              });
            },
            onComplete: () => {
              gsap.set(starsRef.current[s], {
                //saturation: 270,
                lightness: 100,
                alpha: defaultAlpha,
              });
            },
            x: gsap.utils.random(0, window.innerWidth),
            y: gsap.utils.random(0, window.innerHeight),
            duration: 10, // Make individual star animations slower
          }).delay(s * STAGGER); // Apply the stagger
        }
    
        // Play the audio at 30% volume on click
        AUDIO.volume = 0.3;
        AUDIO.play();
      }
    };
    
    
    LOAD();
    gsap.ticker.fps(60);
    gsap.ticker.add(RENDER);

    // Set up event handling
    window.addEventListener('resize', LOAD);
    document.addEventListener('pointermove', UPDATE);
    document.addEventListener('click', PARTY_EFFECT); // Trigger party effect on mouse click

    return () => {
      window.removeEventListener('resize', LOAD);
      document.removeEventListener('pointermove', UPDATE);
      document.removeEventListener('click', PARTY_EFFECT);
      gsap.ticker.remove(RENDER);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Starscape;
