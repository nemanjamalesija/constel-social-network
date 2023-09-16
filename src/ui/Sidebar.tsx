import Logo from './logo';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
    <aside className='pt-5 pb-2 px-6'>
      <div>
        <Logo width='32' height='32' viewBox='0 0 32 32' />
      </div>
      <div className='pt-6 flex items-center gap-2'>
        <FontAwesomeIcon
          icon={faHome}
          className='text-figmaBlue cursor-pointer h-5 w-5'
        />
        <h2 className='text-figmaBlue font-bold cursor-pointer text-lg'>
          Home
        </h2>
      </div>
    </aside>
  );
};

export default Sidebar;
