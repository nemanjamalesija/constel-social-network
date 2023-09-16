import WritePost from '../features/posts/WritePost';
import HeadingPrimary from '../ui/HeadingPrimary';
import AllPosts from '../features/posts/AllPosts';
import Sidebar from '../ui/Sidebar';

const HomePage = () => {
  return (
    <div className='grid grid-cols-[300px,1fr,300px] max-w-[1366px] mx-auto'>
      <Sidebar />
      <HeadingPrimary />

      <section className='border-l border-r border-figmaGrayLight p-6 flex flex-col gap-6 col-start-2'>
        <WritePost />
        <AllPosts />
      </section>

      <section className='user-info'></section>
    </div>
  );
};

export default HomePage;
