import React from "react";
import { RiMoonClearFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";


function IndexPage() {
    return (
        <>
        
            <div className="bg-black/90 border-t-2 ">
                
                <div className="mx-auto container pt-20 lg:pt-1  flex flex-col items-center justify-center mt-5 p-4">
                {/* <div className="w-9/12  h-0.5 bg-gray-100 rounded-full m-5" /> */}
                    <div>
                        <RiMoonClearFill size={92} color="white" />
                     
                    </div>
                    <div className="text-white flex flex-col md:items-center f-f-l pt-3 mb-6">
                        <h1 className="text-2xl textfont">Moongirl A.K.A Winifer</h1>


                        <div className="text-sm text-color mb-10 f-f-l mt-3">
                            <p className="pfont text-xl">Made with <AiFillHeart size={24} className="inline text-red-600 heart"/> by <span className="textfont">Emely</span></p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
}

export default IndexPage;
