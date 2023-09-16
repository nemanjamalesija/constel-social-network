import React from 'react';
import { usePost } from '../features/posts/PostContext';

type UserInfoType = {
  full_name: string;
  username: string;
  picture: string;
  imgClassname?: string;
  usernameClassname?: string;
  fullNameClassname?: string;
};

const UserInfo = ({
  full_name,
  username,
  picture,
  imgClassname,
  usernameClassname,
  fullNameClassname,
}: UserInfoType) => {
  return (
    <div className='flex gap-3 items-center'>
      <figure>
        <img
          src={picture}
          alt={`${full_name} image`}
          className={`h-10 w-10 rounded-full object-cover ${imgClassname}`}
        />
      </figure>
      <div className='flex flex-col'>
        <span className={`text-figmaGrayShade text-sm ${usernameClassname}`}>
          @{username}
        </span>
        <h3
          className={`text-figmaBlack text-base font-medium ${fullNameClassname}`}
        >
          {full_name}
        </h3>
      </div>
    </div>
  );
};

export default UserInfo;
