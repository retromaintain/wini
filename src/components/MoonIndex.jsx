import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player';


function MoonIndex() {
    return (
        <>
        <Player
        autoplay={true}
        loop={true}
        controls={true}
        speed={0.4}
        src="https://lottie.host/82a80820-36ee-4c3f-94fc-7435b00d8223/iCvVLBYtKW.json"
       
      ></Player>
      {/* <p className='textfont text-white text-3xl -mt-20'>Full moon</p> */}
      </>
    );
}

export default MoonIndex;