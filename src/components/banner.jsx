import React from 'react';
import vector1Image from '../assets/vector1.png'; 
import vector1Imageflip from '../assets/vector1flip.png'; 

const Banner = ({ inProgressCount, resolvedCount }) => { 
  return (
    
    <div className='flex flex-col md:flex-row md:justify-between m-6 gap-2 '>
      <div className="relative w-95 md:w-180 h-25 md:h-50 rounded-lg shadow-md overflow-hidden 
                    flex flex-col justify-center items-center text-white p-10
                    bg-gradient-to-br from-[#6e37e6] to-[#9f63f2]">
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80" 
        style={{ backgroundImage: `url(${vector1Image}),url(${vector1Imageflip})` }}
      ></div>
      
      
      <div className="relative z-10 text-center"> 
        <p className="text-lg ">In-Progress</p>
       
        <p className="text-5xl font-semibold mt-1">{inProgressCount}</p> 
      </div>
    </div>
        

      <div 
      className="relative w-95 md:w-180 h-25 md:h-50 rounded-lg shadow-md overflow-hidden 
                    flex flex-col justify-center items-center text-white p-10
                    bg-gradient-to-br from-[#43bf6b] to-[#008279]" 
    >
    
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80" 
        style={{ backgroundImage: `url(${vector1Image}),url(${vector1Imageflip})` }}
      ></div>
      
      
      <div className="relative z-10 text-center"> 
        <p className="text-lg ">Resolved</p>
       
        <p className="text-5xl font-semibold mt-1">{resolvedCount}</p> 
      </div>
    </div>
    </div>
  );
};

export default Banner;