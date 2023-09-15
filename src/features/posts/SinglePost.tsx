import { Post } from '../../types/postType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import formatDate from '../../helpers/formatDate';

type SinglePostProps = Post;

const SinglePost = (props: SinglePostProps) => {
  const {
    audio,
    comments,
    created_at,
    image,
    liked,
    likes,
    post_id,
    text,
    user,
    user_id,
  } = props;

  return (
    <article className='bg-figmaGray py-4 px-6 rounded-lg'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <figure>
            <img
              src={user.picture}
              alt={`${user.full_name} image`}
              className='h-10 w-10 rounded-full object-cover'
            />
          </figure>
          <div className='flex flex-col'>
            <span className='text-figmaGrayShade text-base'>
              @{user.username}
            </span>
            <span className='text-figmaBlack text-lg font-medium'>
              {user.full_name}
            </span>
          </div>
        </div>
        <div className='flex gap-1 items-center self-start'>
          <FontAwesomeIcon
            className='h-3 w-3 text-figmaGrayShade'
            icon={faCalendar}
          />
          <span className='text-figmaGrayShade text-base'>
            {formatDate(created_at)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default SinglePost;
