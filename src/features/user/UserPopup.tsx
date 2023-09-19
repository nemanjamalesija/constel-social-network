import { useGetUserData } from '../../hooks/useGetUserData';
import UserImage from '../../ui/UserImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const ins = 'opacity-1 py-3';
const outs = 'opacity-0 invisible';

const UserPopup = () => {
  const [account, toggleAccount] = useState(false);
  const navigate = useNavigate();
  const { full_name, picture } = useGetUserData();

  const logOutFront = () => {
    localStorage.removeItem('jwt');
    navigate('/login');
  };

  return (
    <div className='smb:absolute -top-1 right-4 z-[99]'>
      <div className='relative smb:pt-5 sm:pt-5 flex items-center justify-end max-h-16 gap-4 '>
        <button onClick={() => toggleAccount(!account)}>
          <UserImage
            src={picture}
            alt={full_name}
            imgClassname='smb:h-9 smb:w-9 lg:h-10 lg:w-10'
          />
        </button>
        <div
          className={`absolute bg-red top-1/2 -right-[10%] opacity-1 translate-y-[32.9%] -translate-x-[30%] bg-figmaGray rounded-lg text-figmaBlack shadow-lg transition-all duration-150  origin-top-right  ${
            account ? ins : outs
          }`}
          style={account ? {} : { transform: 'scale(0.95)' }}
        >
          <ul className='flex flex-col gap-3 px-2 '>
            {/* dummy list element */}
            <li
              className={`flex items-center justify-start gap-4 pl-2 pr-12 py-[3px] hover:bg-figmaGrayLight rounded-md cursor-pointer transition-colors duration-200 ${
                ins ? 'flex' : 'hidden'
              }`}
              role='button'
            >
              <a
                href='#'
                className='bg-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer'
              >
                <FontAwesomeIcon
                  className='text-base h-5 w-5
              text-figmaBlue
                hover:text-figmaBlueShade'
                  icon={faUser}
                />
              </a>
              <span>Account</span>
            </li>

            {/* log out */}
            <li
              className={`flex items-center justify-start gap-4 pl-2 pr-12 py-[3px] hover:bg-figmaGrayLight rounded-md cursor-pointer transition-colors duration-200 ${
                ins ? 'flex' : 'hidden'
              }`}
              onClick={logOutFront}
              role='button'
            >
              <p className='bg-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer'>
                <FontAwesomeIcon
                  className='text-base h-5 w-5
              text-figmaBlue
              hover:text-figmaBlueShade'
                  icon={faRightFromBracket}
                />
              </p>
              <span>Log out</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserPopup;
