import React from 'react';

type UserImageProp = {
  picture: string;
  full_name: string;
  imgClassname?: string;
};

const UserImage = ({ picture, full_name, imgClassname }: UserImageProp) => {
  return (
    <figure>
      <img
        src={picture}
        alt={`${full_name} image`}
        className={`h-10 w-10 rounded-full object-cover ${imgClassname}`}
      />
    </figure>
  );
};

export default UserImage;
