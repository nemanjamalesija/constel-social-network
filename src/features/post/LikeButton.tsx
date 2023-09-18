import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { usePost } from '../posts/PostContext';
import likePost from '../../api/likePost';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { postLike, postUnlike } from '../posts/postsSlice';
import unlikePost from '../../api/unlikePost';

const LikeButton = () => {
  const { likes, liked, post_id } = usePost();
  const dispatch = useAppDispatch();

  const baseStyle =
    'sma:py-2 sma:px-[3.2rem] smb:px-[4.6rem] smb:py-3 md:px-6 sm:py-1 text-lg md:text-base  md:py-1  sm:text-base text-figmaGrayShade2 rounded-lg transition-all duration-200 flex items-center gap-2';

  const colorsDefault =
    'bg-figmaGrayLight hover:bg-figmaGrayShade text-figmaGrayShade2 hover:text-white';

  const colorsLiked = 'bg-figmaBlue hover:bg-figmaBlueShade text-white';

  const postsLikesHandler = async () => {
    liked
      ? (dispatch(postUnlike(post_id)), await unlikePost(post_id))
      : (dispatch(postLike(post_id)), await likePost(post_id));
  };

  return (
    <button
      className={`${baseStyle} ${liked ? colorsLiked : colorsDefault}`}
      onClick={postsLikesHandler}
    >
      <FontAwesomeIcon icon={liked ? faSolidHeart : faRegularHeart} />
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;
