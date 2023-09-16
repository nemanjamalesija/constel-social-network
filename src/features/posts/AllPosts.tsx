import { useEffect, useState } from 'react';
import { useGetPostsData } from '../../hooks/useGetPostsData';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import getCurrentPosts from '../../api/getCurrentPosts';
import { setPosts } from './postsSlice';
import { PostsType } from '../../types/postType';
import Spinner from '../../ui/Spinner';
import { PostProvider } from './PostContext';
import SinglePost from './SinglePost';

const PostsParent = () => {
  const dispatch = useAppDispatch();
  const { posts } = useGetPostsData();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const postsAPI = await getCurrentPosts();

        if (postsAPI) {
          const { posts } = postsAPI;
          dispatch(setPosts(posts as PostsType));
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    if (posts.length == 0) fetchData();
  }, [dispatch, posts]);

  if (loading) return <Spinner />;

  return (
    <section>
      {posts.map((p) => (
        <PostProvider key={p.post_id} postProps={p}>
          <SinglePost />
        </PostProvider>
      ))}
    </section>
  );
};
export default PostsParent;
