import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import formatDate from '../../helpers/formatDate';
import { usePost } from './PostContext';

const PostHeader = ({}) => {
  const {
    created_at,
    user: { full_name, username, picture },
  } = usePost();

  return (
    <div className='flex justify-between items-center mb-3'>
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
  );
};

export default PostHeader;
