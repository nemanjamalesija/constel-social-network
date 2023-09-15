import getCurrentPosts from '../api/getCurrentPosts';
import { setPosts } from '../features/posts/postsSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useEffect, useState } from 'react';
import Spinner from '../ui/Spinner';
import SinglePost from '../features/posts/SinglePost';
import Sidebar from '../features/posts/Sidebar';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postsReducer.posts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const postsAPI = await getCurrentPosts();

        if (postsAPI) {
          const { posts } = postsAPI;
          dispatch(setPosts(posts));
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

  console.log(posts);

  return (
    <div className='grid grid-cols-[150px,1fr,150px] max-w-7xl '>
      <Sidebar />
      <section className='border-l border-r border-neutral-100 px-4 py-2 flex flex-col gap-6'>
        <h2 className='text-figmaBlack text-sm lg:text-base'>Home</h2>
        {posts.map((p) => (
          <SinglePost key={p.post_id} {...p} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
