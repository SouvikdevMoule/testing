import React from 'react'
interface StreProps{
    name:string,
    goal:string
}

const Head: React.FC<StreProps> = ({ goal, name }) => {
  return (
    <div className="flex justify-center">
    <div className='w-[90%]  bg-grey-100'>
        <h1 className=' text-bold text-2xl lg:text-4xl'>Hi, Name{name}! Your Overall Progress for <span className='text-[#3cab7d]'>Goal{goal}</span> </h1>
    </div>
    </div>
  );
};

export default Head;