import getSinglePost from '../../api/getSinglePost';
import Spinner from '../../ui/Spinner';
import { usePost } from './PostContext';
import UserInfo from './UserInfo';
import PostDate from './PostDate';
import { useEffect, useState } from 'react';
import LikeButton from '../../ui/LikeButton';
import CommentButton from '../../ui/CommentButton';
import WriteComment from './WriteComment';
import Comments from './Comments';

type PostWithCommentsType = {
  audio: string | null;
  created_at: string;
  image: string;
  liked: false;
  post_id: string;
  text: string;
  user_id: string;
};

const PostWithComments = () => {
  const {
    post_id,
    user: { username, full_name, picture },
  } = usePost();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({} as PostWithCommentsType);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const postAPI = await getSinglePost(post_id);

        if (postAPI) {
          const { post } = postAPI;
          setPost(post as PostWithCommentsType);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Spinner />;

  return (
    <article className='shadow-lg py-4 px-6  bg-figmaGray rounded-lg max-w-2xl max-h-[700px] overflow-y-scroll'>
      <UserInfo username={username} full_name={full_name} picture={picture} />
      {post.image && (
        <figure className='flex my-3 max-h-[280px]'>
          <img
            src={post.image}
            alt='post image'
            className='rounded-lg mx-auto object-cover'
          />
        </figure>
      )}
      <PostDate created_at={post.created_at} />
      <p className='text-[15px] text-figmaBlack my-3'>{post.text}</p>
      <WriteComment />
      <div className='flex gap-2 mb-4'>
        <LikeButton />
        <CommentButton type='dummy' />
      </div>
      <Comments />
    </article>
  );
};

export default PostWithComments;
