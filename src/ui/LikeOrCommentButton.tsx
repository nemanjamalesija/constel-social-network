import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment';

type LikeOrCommentButtonProps = {
  type: string;
  likes?: number;
  comments?: number;
};

const LikeOrCommentButton = ({
  type,
  likes,
  comments,
}: LikeOrCommentButtonProps) => {
  const className =
    'py-1 px-6 bg-figmaGrayLight hover:bg-figmaGrayShade text-figmaGrayShade2 hover:text-white rounded-lg transition-all duration-300 flex items-center gap-2';

  if (type == 'likes')
    return (
      <button className={className}>
        <FontAwesomeIcon icon={faRegularHeart} />
        <span>{likes}</span>
      </button>
    );

  if (type == 'comments')
    return (
      <button className={className}>
        <FontAwesomeIcon icon={faComment} />
        <span>{comments}</span>
      </button>
    );
};

export default LikeOrCommentButton;
