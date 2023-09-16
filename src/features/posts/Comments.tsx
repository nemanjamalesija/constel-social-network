import { useEffect, useState } from 'react';
import getAllComments from '../../api/getAllComments';
import { usePost } from './PostContext';
import UserInfo from './UserInfo';
import PostDate from './PostDate';
import { useAppSelector } from '../../hooks/useAppSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

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
  const username = useAppSelector((state) => state.userReducer.username);
  const [comments, setComments] = useState([] as CommentType[]);

  useEffect(() => {
    (async () => {
      const commentsAPI = await getAllComments(post_id);
      if (!commentsAPI) return;

      const { comments } = commentsAPI;
      setComments(comments);
    })();
  }, []);

  console.log(comments);

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
