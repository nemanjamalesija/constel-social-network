import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment';
import Modal from './Modal';
import PostComments from '../features/comments/PostWithComments';
import { usePost } from '../features/posts/PostContext';

const CommentButton = ({ type }: { type: string }) => {
  const { comments } = usePost();

  const className =
    'py-1 px-6 bg-figmaGrayLight hover:bg-figmaGrayShade text-figmaGrayShade2 hover:text-white rounded-lg transition-all duration-200 flex items-center gap-2';

  if (type == 'modal')
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

  if (type == 'dummy')
    return (
      <button className={className}>
        <FontAwesomeIcon icon={faComment} />
        <span>{comments}</span>
      </button>
    );
};

export default CommentButton;
