import React from 'react';

type UserImageProp = {
  src: string;
  alt: string;
  imgClassname?: string;
};

const UserImage = ({ src, alt, imgClassname }: UserImageProp) => {
  return (
    <figure>
      <img
        src={src}
        alt={`${alt} image`}
        className={`h-10 w-10 rounded-full object-cover ${imgClassname}`}
      />
    </figure>
  );
};

export default UserImage;
