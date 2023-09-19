import React from 'react';

type FormInputType = {
  id: string;
  errorType: string | null;
  placeholder: string;
  value: string;
  type: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
};

const FormInput = ({
  id,
  type,
  errorType,
  placeholder,
  setter,
  value,
}: FormInputType) => {
  return (
    <input
      id={id}
      type={type}
      className={`
      block w-full border-0 py-3 px-4 rounded-lg align-middle text-figmaBlack text-xs lg:text-sm shadow-sm ring-1 ring-inset ring-figmaGrayShade placeholder:text-figmaGrayShade focus:ring-figmaBlue focus:ring-inset outline-none
       ${errorType != null ? 'ring-figmaRed' : ''}
      `}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setter(e.target.value)}
      autoComplete={type === 'email' ? 'on' : 'off'}
      required
    />
  );
};

export default FormInput;
