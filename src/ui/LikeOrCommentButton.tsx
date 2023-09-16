import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment';
import Modal from './Modal';
import PostComments from '../features/posts/PostComments';

type LikeOrCommentButtonProps = {
  type: string;
  likes?: number;
  liked?: boolean;
  comments?: number;
};

const LikeOrCommentButton = ({
  type,
  likes,
  liked,
  comments,
}: LikeOrCommentButtonProps) => {
  const className =
    'py-1 px-6 bg-figmaGrayLight hover:bg-figmaGrayShade text-figmaGrayShade2 hover:text-white rounded-lg transition-all duration-300 flex items-center gap-2';

  if (type == 'likes')
    return (
      <button
        className={`${className} ${
          liked ? 'bg-[#157EFF] hover:bg-[#005BCA] text-white' : ''
        }`}
      >
        <FontAwesomeIcon icon={liked ? faSolidHeart : faRegularHeart} />
        <span>{likes}</span>
      </button>
    );

  if (type == 'comments')
    return (
      <Modal>
        <Modal.Open opens='post-comments'>
          <button className={className}>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments}</span>
          </button>
        </Modal.Open>
        <Modal.Window name='post-comments'>
          <PostComments />
        </Modal.Window>
      </Modal>
    );
};

export default LikeOrCommentButton;
