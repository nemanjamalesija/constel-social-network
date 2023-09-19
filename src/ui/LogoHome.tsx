import Logo from './logo';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LogoHome = () => {
  return (
    <aside className='pt-5 pb-4 px-6 smb:hidden'>
      <div className='flex items-center justify-center '>
        <Logo width='32' height='36' viewBox='0 0 32 32' />
      </div>
      <FontAwesomeIcon
        icon={faHome}
        className='text-figmaBlue cursor-pointer h-5 w-5 inline-block mr-4'
      />
      <h2 className='text-figmaBlue font-bold cursor-pointer text-lg row-start-2 inline-block'>
        Home
      </h2>
    </aside>
  );
};

export default LogoHome;
