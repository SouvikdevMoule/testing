import React from 'react'
import { Button } from '../ui/button';

interface StreProps{
    topic:string
}

const Strength: React.FC<StreProps> = ({ topic }) => {
  return (
    <div className="flex justify-center">
    <div className='w-[90%]  bg-white'>
      <h1 className='border-b-2 border-dashed border-gray-300 m-4 text-xl p-2 font-semibold '>Weekness</h1>
      <div className="m-2 ">
        <Button className='bg-yellow-400 text-white rounded-full m-1'>Itemefeffsfsef{topic}</Button>
        <Button className='bg-yellow-400 text-white rounded-full m-1'>Itemefeffsfsef{topic}</Button>
        <Button className='bg-yellow-400 text-white rounded-full m-1'>Itemefeffsfsef{topic}</Button>
        <Button className='bg-yellow-400 text-white rounded-full m-1'>Itemefeffsfsef{topic}</Button>  
      </div>
    </div>
    </div>
  );
};

export default Strength;