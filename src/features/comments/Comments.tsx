import { useEffect, useState } from 'react';
import getAllComments from '../../api/getAllComments';
import { usePost } from '../posts/PostContext';
import UserInfo from '../../ui/UserInfo';
import PostDate from '../../ui/PostDate';
import { useAppSelector } from '../../hooks/useAppSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useGetUserData } from '../../hooks/useGetUserData';
import Spinner from '../../ui/Spinner';
import { useGetCommentsData } from '../../hooks/useGetCommentsData';
import { setComments } from './commentsSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

type CommentType = {
  comment_id: string;
  created_at: string;
  full_name: string;
  picture: string;
  text: string;
  username: string;
};

const Comments = () => {
  const { post_id } = usePost();
  const { username } = useGetUserData();
  const dispatch = useAppDispatch();
  const { comments } = useGetCommentsData();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const commentsAPI = await getAllComments(post_id);
      if (!commentsAPI) return;

      const { comments } = commentsAPI;
      dispatch(setComments(comments));
      setLoading(false);
    })();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <h3 className='text-lg font-bold text-figmaBlack mb-3'>
        {comments.length} comments
      </h3>
      <div className='w-full flex flex-col gap-4'>
        {comments.map((c) => {
          return (
            <article
              key={c.comment_id}
              className='w-full border-b border-figmaGrayShade'
            >
              <div className='flex justify-between items-center'>
                <UserInfo
                  username={c.username}
                  full_name={c.full_name}
                  picture={c.picture}
                  imgClassname='h-9 w-9'
                  usernameClassname='text-xs'
                  fullNameClassname='text-sm'
                />
                <div className='flex items-center gap-3'>
                  <PostDate created_at={c.created_at} />
                  {c.username === username && (
                    <button className='flex items-center gap-1 text-sm text-figmaRed capitalize'>
                      <FontAwesomeIcon icon={faTrashCan} />
                      <span>delete</span>
                    </button>
                  )}
                </div>
              </div>
              <p className='text-sm text-figmaBlack pt-2 pb-1'>{c.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
