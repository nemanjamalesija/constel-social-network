import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { usePost } from '../features/posts/PostContext';
import likePost from '../api/likePost';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { postLike, postUnlike } from '../features/posts/postsSlice';
import unlikePost from '../api/unlikePost';

const LikeButton = () => {
  const { likes, liked, post_id } = usePost();
  const dispatch = useAppDispatch();

  const className =
    'py-1 px-6 bg-figmaGrayLight hover:bg-figmaGrayShade text-figmaGrayShade2 hover:text-white rounded-lg transition-all duration-200 flex items-center gap-2';

  const postsLikesHandler = async () => {
    liked
      ? (dispatch(postUnlike(post_id)), await unlikePost(post_id))
      : (dispatch(postLike(post_id)), await likePost(post_id));
  };

  return (
    <button
      className={`${className} ${
        liked ? 'bg-blue-500 hover:bg-blue-700 text-white' : ''
      }`}
      onClick={postsLikesHandler}
    >
      <FontAwesomeIcon icon={liked ? faSolidHeart : faRegularHeart} />
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;
