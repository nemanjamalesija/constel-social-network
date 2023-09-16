import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import formatDate from '../../helpers/formatDate';
import { usePost } from './PostContext';

const DatePost = () => {
  const { created_at } = usePost();
  return (
    <div className='flex gap-1 items-center self-start'>
      <FontAwesomeIcon
        className='h-3.5 w-3.5 text-figmaGrayShade'
        icon={faCalendar}
      />
      <span className='text-figmaGrayShade text-base'>
        {formatDate(created_at)}
      </span>
    </div>
  );
};

export default DatePost;
