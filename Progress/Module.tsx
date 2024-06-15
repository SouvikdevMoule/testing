import React from 'react'
import ProgressBar from '../ProgressBar';
import Image from 'next/image';

interface ModProps{
    topic:string,
    icon:string,
    per:number
}

const Module: React.FC<ModProps> = ({ icon, topic, per }) => {
  return (
    <div className="flex justify-center">
    <div className='w-[90%]  bg-white p-2' >
      <h1 className='border-b-2 border-dashed border-gray-300 m-4 text-xl p-2 font-semibold'>Module Progress</h1>
      <div className="m-[40px] w-full flex flex-row justify-center">
                <div className="flex items-center">
                    <Image src={icon} height={30} width={30} alt=''/>
                    <p>name{topic}</p>               
                </div>
                <ProgressBar progress={per}/>
        </div>
        <div className="m-[40px] w-full flex flex-row justify-center">
                <div className="flex items-center">
                    <Image src={icon} height={30} width={30} alt=''/>
                    <p>name{topic}</p>               
                </div>
                <ProgressBar progress={per}/>
        </div>
        <div className="m-[40px] w-full flex flex-row justify-center">
                <div className="flex items-center">
                    <Image src={icon} height={30} width={30} alt=''/>
                    <p>name{topic}</p>               
                </div>
                <ProgressBar progress={per}/>
        </div>
    </div>
    </div>
  );
};

export default Module;