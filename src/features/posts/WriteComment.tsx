import React from 'react';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WriteComment = () => {
  return (
    <form action='' className='flex items-center  mb-3 text-base'>
      <input
        type='text'
        className='py-2 border-b border-figmaGrayShade w-full  placeholder:text-figmaGrayShade bg-figmaGray outline-none'
        placeholder='Write a comment'
      />
      <button type='submit' className='-ml-4'>
        <FontAwesomeIcon
          icon={faPaperPlane}
          className='text-figmaGrayShade text-xl'
        />
      </button>
    </form>
  );
};

export default WriteComment;
