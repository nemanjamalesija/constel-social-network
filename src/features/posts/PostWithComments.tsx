import getSinglePost from '../../api/getSinglePost';
import Spinner from '../../ui/Spinner';
import { usePost } from './PostContext';
import UserInfo from './UserInfo';
import PostDate from './PostDate';
import { useEffect, useState } from 'react';
import LikeButton from '../../ui/LikeButton';
import CommentButton from '../../ui/CommentButton';

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
  const { post_id } = usePost();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({} as PostWithCommentsType);

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const postAPI = await getSinglePost(post_id);

        if (postAPI) {
          const { post } = postAPI;
          setPost(post as PostWithCommentsType);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    getPost();
  }, []);

  if (loading) return <Spinner />;

  console.log(post);

  return (
    <article className=''>
      <UserInfo />
      {post.image && (
        <figure className='flex my-3 max-h-[360px]'>
          <img
            src={post.image}
            alt='post image'
            className='rounded-lg mx-auto object-cover'
          />
        </figure>
      )}
      <PostDate />
      <p className='text-[15px] text-figmaBlack my-3'>{post.text}</p>
      <div className='flex gap-2'>
        <LikeButton />
        <CommentButton type='dummy' />
      </div>
    </article>
  );
};

export default PostWithComments;
