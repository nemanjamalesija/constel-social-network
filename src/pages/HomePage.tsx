import WritePost from '../features/posts/WritePost';
import HeadingPrimary from '../ui/HeadingPrimary';
import PostsFeed from '../features/posts/PostsFeed';
import LogoHome from '../ui/LogoHome';
import Sidebar from '../ui/Sidebar';

const HomePage = () => {
  return (
    <div className='flex flex-col lg:grid grid-cols-[300px,1fr,300px] max-w-[1366px] mx-auto'>
      <LogoHome />
      <Sidebar />
      <HeadingPrimary />
      <section className='md:p-6 smb:p-4 sma:p-2 flex flex-col gap-6 col-start-2 border-l border-r border-figmaGrayLight z-40 '>
        <WritePost />
        <PostsFeed />
      </section>

      <section className='user-info'></section>
    </div>
  );
};

export default HomePage;
