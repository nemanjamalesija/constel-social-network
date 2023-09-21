import { useGetUserData } from '../../hooks/useGetUserData';
import UserImage from '../../ui/UserImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setUser } from './userSlice';

const UserPopup = () => {
  const navigate = useNavigate();
  const { full_name, picture } = useGetUserData();
  const [userPopupOpen, setIsUserPopupOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const logOutFront = () => {
    localStorage.removeItem('jwt');
    navigate('/login');
    dispatch(setUser({ username: '', email: '', full_name: '', picture: '' }));
  };

  const accountBase =
    'absolute top-[118%] right-[16%] w-max flex flex-col gap-2 bg-figmaGray smb:bg-white  text-base rounded-md  shadow-lg transition-all duration-150 ease-in-out';

  const opened = 'p-[0.8rem] opacity-1';
  const closed = 'invisible opacity-0';

  return (
    <div className='absolute right-[5%] top-4 flex flex-col items-center gap-3 font-semibold rounded-lg z-[99]'>
      <button className='' onClick={() => setIsUserPopupOpen(!userPopupOpen)}>
        <UserImage src={picture} alt={full_name} imgClassname='shadow-lg' />
      </button>

      <div
        className={`${
          userPopupOpen
            ? `${accountBase} ${opened}`
            : `${accountBase} ${closed}`
        }`}
      >
        <a
          href='#'
          className='p-[0.4rem] pr-[4rem] rounded-lg hover:bg-figmaGrayShade transition-all duration-200 inline-block animate-icon
'
        >
          <p className='flex items-center gap-2'>
            <span className='h-9 w-9 flex items-center justify-center bg-white smb:bg-figmaGray rounded-full '>
              <FontAwesomeIcon icon={faUser} className='text-figmaBlue' />
            </span>
            <span className='text-figmaBlack'>My profile</span>
          </p>
        </a>

        {/* setting href to # because of vercel deployment (avoid page not found error on redirect) otherwise, redirect should be to /login page */}
        <a
          href='#'
          className='p-[0.4rem] pr-[4rem] rounded-lg hover:bg-figmaGrayShade  transition-all duration-200 inline-block animate-icon'
          onClick={logOutFront}
        >
          <p className='flex items-center gap-2 '>
            <span className='h-9 w-9 flex items-center justify-center bg-white smb:bg-figmaGray rounded-full '>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className='text-figmaBlue'
              />
            </span>
            <span className='text-figmaBlack'>Log out</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default UserPopup;
