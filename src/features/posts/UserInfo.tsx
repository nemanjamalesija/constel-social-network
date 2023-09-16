import React from 'react';
import { usePost } from './PostContext';

const UserInfo = () => {
  const {
    user: { full_name, username, picture },
  } = usePost();

  return (
    <div className='flex gap-3 items-center'>
      <figure>
        <img
          src={picture}
          alt={`${full_name} image`}
          className='h-10 w-10 rounded-full object-cover'
        />
      </figure>
      <div className='flex flex-col'>
        <span className='text-figmaGrayShade text-base'>@{username}</span>
        <h3 className='text-figmaBlack text-lg font-medium'>{full_name}</h3>
      </div>
    </div>
  );
};

export default UserInfo;
