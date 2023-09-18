import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
    <aside className='p-6 gap-2 col-start-1 row-start-2 '>
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

export default Sidebar;
