const Logo = ({
  height,
  width,
  viewBox,
}: {
  height: string;
  width: string;
  viewBox: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_49_668'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        style={{ maskType: 'alpha' }}
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill='#A6A6A6' />
      </mask>
      <g mask='url(#mask0_49_668)'>
        <path
          d='M16.3814 6.09753e-06C13.5779 -0.00265393 10.8444 0.865073 8.56762 2.48046C6.29086 4.09585 4.58604 6.37714 3.69429 9.00167C2.80254 11.6262 2.769 14.4611 3.59839 17.1055C4.42779 19.7499 6.07816 22.0699 8.31607 23.7374C8.43906 23.5224 8.55539 23.314 8.67173 23.1056C6.10382 21.1442 4.40395 18.278 3.92807 15.107C3.45218 11.9359 4.23717 8.70607 6.11868 6.09366C8.00019 3.48126 10.8323 1.6889 14.022 1.0919C17.2117 0.494891 20.5116 1.13953 23.2308 2.89084C25.95 4.64214 27.8776 7.3643 28.61 10.4873C29.3423 13.6103 28.8227 16.892 27.1598 19.6453C25.4969 22.3985 22.8198 24.4097 19.689 25.2578C16.5582 26.1059 13.2165 25.7252 10.3636 24.1952C10.2323 24.3955 10.1027 24.5891 9.96471 24.7909C11.9294 25.8618 14.1373 26.4225 16.3814 26.4205C18.1383 26.4205 19.878 26.0788 21.5012 25.4149C23.1243 24.751 24.5992 23.778 25.8415 22.5513C27.0838 21.3246 28.0693 19.8683 28.7416 18.2656C29.4139 16.6628 29.76 14.945 29.76 13.2102C29.76 11.4754 29.4139 9.75764 28.7416 8.1549C28.0693 6.55216 27.0838 5.09588 25.8415 3.86919C24.5992 2.64251 23.1243 1.66945 21.5012 1.00558C19.878 0.341699 18.1383 6.07168e-06 16.3814 6.09753e-06Z'
          fill='#222222'
        />
        <path
          d='M23.8753 15.0712C23.4183 14.8497 19.875 13.1578 18.1533 13.1578C18.0118 13.156 17.8707 13.1708 17.7328 13.2021C16.8902 13.4089 13.0927 18.8275 9.74387 23.8376C9.60593 24.0378 9.4763 24.238 9.34501 24.4398C7.02828 27.9073 4.99241 31.0679 4.3858 32C4.93756 31.0466 6.83882 27.7924 8.90294 24.1592C9.01761 23.9524 9.13394 23.7375 9.25859 23.5291C12.2135 18.2827 15.3296 12.4719 15.1302 11.6513C14.7696 10.1744 10.9936 7.43883 10.5366 7.10242C10.9936 7.33217 14.5735 9.11596 16.3019 9.11596C16.4361 9.11811 16.5701 9.10378 16.7007 9.07329C18.1965 8.71555 20.9204 4.95269 21.2478 4.5014C21.0085 4.99371 18.946 9.15206 19.3149 10.629C19.6789 12.0764 23.4183 14.7496 23.8753 15.0712Z'
          fill='#222222'
        />
        <path
          d='M22.2283 14.8857C22.2283 14.8857 22.2283 14.8857 22.2283 14.9005C22.1862 14.9527 22.1473 15.0075 22.112 15.0646C22.127 15.0646 22.1336 15.0777 22.1486 15.0777C22.1849 15.0183 22.2165 14.9563 22.2433 14.8922L22.2283 14.8857Z'
          fill='#222222'
        />
        <path
          d='M23.606 20.3684C23.3734 20.2601 21.5137 19.3575 20.6062 19.3575C20.5309 19.3562 20.4556 19.3634 20.3819 19.3788C19.6556 19.5577 17.0414 23.5224 16.4813 24.3741C16.8137 23.8162 17.869 22.0094 18.0352 21.7304C18.0406 21.717 18.0485 21.7048 18.0585 21.6943C18.2097 21.3858 19.2418 19.3296 19.0557 18.5911C18.8728 17.8248 16.9267 16.4102 16.6791 16.233C16.9118 16.3479 18.7715 17.28 19.6706 17.28C19.7421 17.2822 19.8135 17.2722 19.8816 17.2504C20.5564 17.0863 21.7098 15.6094 22.1103 15.058C22.1456 15.001 22.1845 14.9462 22.2266 14.8939C22.2266 14.8939 22.2266 14.8939 22.2266 14.8792C22.1999 14.9433 22.1682 15.0052 22.1319 15.0646C21.8411 15.6603 21.0284 17.3735 21.1962 18.0398C21.3923 18.8061 23.3601 20.1961 23.606 20.3684Z'
          fill='#157EFF'
        />
        <path
          d='M12.0822 15.0498C11.9011 14.9645 10.3538 14.2113 9.81703 14.3475C9.33008 14.4705 7.15794 17.7231 6.49316 18.7274C6.92859 18.0037 8.03378 16.1969 8.1551 16.0033C8.24152 15.8392 9.00434 14.3261 8.87305 13.7961C8.73511 13.2217 7.1812 12.1255 7.1812 12.1255C7.1812 12.1255 8.87305 13.0002 9.44808 12.8574C10.0231 12.7147 11.002 11.3296 11.11 11.1803C11.11 11.1803 11.11 11.1803 11.11 11.2016C11.11 11.223 11.11 11.1869 11.125 11.1869C11.0302 11.3592 10.2525 12.8788 10.3904 13.4154C10.5283 13.952 11.9094 14.9333 12.0822 15.0498Z'
          fill='#157EFF'
        />
      </g>
    </svg>
  );
};

export default Logo;
