import React from 'react';
import dictionary from './image/dictio.svg';
import Button from './Button';

const Dictionary = () => {

    return(
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center p-5 mt-24 max-w-sm rounded overflow-hidden shadow-lg'>
            <div>
            <img className='object-scale-down h-12 my-4' src={dictionary} alt='dictionary' />
            </div>
            <input className='h-10  bg-white border border-solid border-gray-200 rounded outline-none focus:border-blue-500 px-4'
          type='text' placeholder='word'/>
            <div>
            <Button classNames='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 outline-none'>Meaning</Button>
            </div>
            </div>
        </div>
    )
}

export default Dictionary;
