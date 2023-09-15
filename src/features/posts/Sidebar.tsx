import React from 'react';
import Logo from '../../utils/logo';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
    <aside>
      <div>
        <Logo />
      </div>
      <div className=''>
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </div>
    </aside>
  );
};

export default Sidebar;
