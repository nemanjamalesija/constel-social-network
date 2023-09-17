type PostImageType = {
  src: string;
  alt: string;
  containerSize: string;
};

const PostImage = ({ src, alt, containerSize }: PostImageType) => {
  return (
    <figure className={`flex mb-3 max-h-[360px] ${containerSize}`}>
      <img
        src={src}
        alt={`${alt}'s post image`}
        className='rounded-lg mx-auto object-cover'
      />
    </figure>
  );
};

export default PostImage;
