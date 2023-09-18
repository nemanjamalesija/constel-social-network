import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import formatDate from '../helpers/formatDate';

const PostDate = ({ created_at }: { created_at: string }) => {
  return (
    <div className='flex gap-1 items-center self-start sma:mb-2 smb:mb-2 md:mb-3'>
      <FontAwesomeIcon
        className='h-3.5 w-3.5 text-figmaGrayShade'
        icon={faCalendar}
      />
      <span className='text-figmaGrayShade text-sm'>
        {formatDate(created_at)}
      </span>
    </div>
  );
};

export default PostDate;
