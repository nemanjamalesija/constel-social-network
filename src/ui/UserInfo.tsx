import UserImage from './UserImage';

type UserInfoType = {
  full_name: string;
  username: string;
  picture: string;
  imgClassname?: string;
  usernameClassname?: string;
  fullNameClassname?: string;
};

const UserInfo = ({
  full_name,
  username,
  picture,
  imgClassname,
  usernameClassname,
  fullNameClassname,
}: UserInfoType) => {
  return (
    <div className='flex gap-3 items-center sma:mb-2 smb:mb-2 md:mb-3'>
      <UserImage src={picture} alt={full_name} imgClassname={imgClassname} />
      <div className='flex flex-col'>
        <span className={`text-figmaGrayShade text-sm ${usernameClassname}`}>
          @{username}
        </span>
        <h3
          className={`text-figmaBlack text-base font-medium ${fullNameClassname}`}
        >
          {full_name}
        </h3>
      </div>
    </div>
  );
};

export default UserInfo;
