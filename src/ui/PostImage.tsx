type PostImageType = {
  src: string;
  alt: string;
  imgClassname: string;
};

const PostImage = ({ src, alt, imgClassname }: PostImageType) => {
  return (
    <figure className='flex mb-3 max-h-[360px]'>
      <img
        src={src}
        alt={`${alt}'s post image`}
        className={`rounded-lg mx-auto object-cover ${imgClassname}`}
      />
    </figure>
  );
};

export default PostImage;
