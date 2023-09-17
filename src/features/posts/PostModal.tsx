import getSinglePost from '../../api/getSinglePost';
import Spinner from '../../ui/Spinner';
import { usePost } from './PostContext';
import UserInfo from '../../ui/UserInfo';
import PostDate from '../../ui/PostDate';
import { useEffect, useState } from 'react';
import LikeButton from '../../ui/LikeButton';
import CommentButton from '../../ui/CommentButton';
import WriteComment from '../comments/WriteComment';
import AllComments from '../comments/AllComments';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import PostImage from '../../ui/PostImage';

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
    <article className='shadow-lg py-4 px-6  bg-figmaGray rounded-lg max-w-2xl max-h-[700px] min-h-[360px] min-w-[620px] overflow-y-scroll'>
      <UserInfo
        username={username}
        full_name={full_name}
        picture={picture}
        fullNameClassname={post.image ? '' : 'mb-3'}
      />
      {post.image && (
        <PostImage
          src={post.image}
          alt="post's user image"
          imgClassname='max-h-[280px]'
        />
      )}
      <PostDate created_at={post.created_at} />
      <p className='text-[15px] leading-[1.45rem] text-figmaBlack my-3'>
        {post.text}
      </p>

      {post.audio && <AudioPlayer audioSrc={post.audio} />}

      <WriteComment post_id={post_id} />
      <div className='flex gap-2 mb-4'>
        <LikeButton />
        <CommentButton type='dummy' />
      </div>
      <AllComments />
    </article>
  );
};

export default PostWithComments;
