import Logo from './logo';

const LogoHome = () => {
  return (
    <aside className='pt-5 pb-4 px-6 '>
      <div className='flex items-center justify-center md:hidden smb:hidden'>
        <Logo width='36' height='36' viewBox='0 0 32 32' />
      </div>
    </aside>
  );
};

export default LogoHome;
