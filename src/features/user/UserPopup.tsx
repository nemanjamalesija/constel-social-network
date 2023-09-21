import { useGetUserData } from '../../hooks/useGetUserData';
import UserImage from '../../ui/UserImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setUser } from './userSlice';

const ins = 'opacity-1  max-h-[300px] p-4';
const outs = 'opacity-0 invisible max-h-0 ';

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
    'absolute top-[110%] right-[0.3%] bg-figmaGray flex flex-col text-base gap-2 rounded-md w-max max-h-0 shadow-lg transition-all duration-150 ease-in-out';

  const opened = 'p-[0.8rem] max-h-[300px] visible opacity-1';
  const closed = 'invisible opacity-0';

  return (
    <div className='absolute right-[5%] top-5 flex flex-col items-center gap-3 font-semibold rounded-lg'>
      <div className='flex gap-3 items-center'>
        <button onClick={() => setIsUserPopupOpen(!userPopupOpen)}>
          <UserImage src={picture} alt={full_name} />
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
            className='p-[0.4rem] pr-[4rem] rounded-lg hover:bg-figmaGrayShade transition-all duration-200 inline-block'
          >
            <div className='flex items-center gap-2'>
              <p className='bg-white rounded-full h-9 w-9 flex items-center justify-center'>
                <FontAwesomeIcon icon={faUser} className='text-figmaBlue' />
              </p>
              <p className='text-figmaBlack'>My profile</p>
            </div>
          </a>
          <a
            href='/login'
            className='p-[0.4rem] pr-[4rem] rounded-lg hover:bg-figmaGrayShade transition-all duration-200 inline-block'
            onClick={logOutFront}
          >
            <div className='flex items-center gap-2'>
              <p className='bg-white rounded-full h-9 w-9 flex items-center justify-center'>
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className='text-figmaBlue'
                />
              </p>
              <p className='text-figmaBlack'>Log out</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserPopup;
