import getCurrentPosts from '../api/getCurrentPosts';
import { setPosts } from '../features/posts/postsSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useEffect, useState } from 'react';
import Spinner from '../ui/Spinner';
import SinglePost from '../features/posts/SinglePost';
import Sidebar from '../ui/Sidebar';
import { PostProvider } from '../features/posts/PostContext';
import { PostType } from '../types/postType';
import { useGetPostsData } from '../hooks/useGetPostsData';

const HomePage = () => {
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
          dispatch(setPosts(posts as PostType));
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
    <div className='grid grid-cols-[300px,1fr,300px] max-w-[1366px] mx-auto'>
      <Sidebar />
      <section>
        <h1 className='text-figmaBlack lg:text-lg  font-bold  border-b border-l border-r border-figmaGrayLight pt-5 pb-2 px-6'>
          Home
        </h1>

        <div className='border-l border-r border-figmaGrayLight p-6 flex flex-col gap-6'>
          {posts.map((p) => (
            <PostProvider key={p.post_id} postProps={p}>
              <SinglePost />
            </PostProvider>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
