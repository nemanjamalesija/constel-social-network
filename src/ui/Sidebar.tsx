import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './logo';

const Sidebar = () => {
  return (
    <aside className='smb:pt-5 sm:pt-5'>
      <div className='flex justify-center lg:grid lg:grid-cols-8 mb-10'>
        <div className='lg:col-start-4'>
          <Logo width='36' height='36' viewBox='0 0 32 32' />
        </div>
      </div>
      <div className='smb:hidden sm:hidden lg:row-start-2 lg:col-start-2 s lg:grid lg:grid-cols-8 place-content-center'>
        <div className='lg:col-start-4 lg:flex lg:items-center lg:place-content-center'>
          <div>
            <FontAwesomeIcon
              icon={faHome}
              className='text-figmaBlue cursor-pointer h-6 w-6'
            />
          </div>
        </div>
        <h2 className='text-figmaBlue font-bold cursor-pointer text-lg inline-block col-start-5 row-start-1 lg:ml-4'>
          Home
        </h2>
      </div>
    </aside>
  );
};

export default Sidebar;
