import clsx from 'clsx';
import React from 'react';

type FormInputType = {
  id: string;
  errorType: string | null;
  placeholder: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
};

const FormInput = ({
  id,
  errorType,
  placeholder,
  setter,
  value,
}: FormInputType) => {
  return (
    <input
      id={id}
      className={clsx(
        'block w-full border-0 py-3 px-4 rounded-lg align-middle text-figmaBlack text-xs lg:text-sm shadow-sm ring-1 ring-inset ring-figmaGrayShade placeholder:text-figmaGrayShade focus:ring-2 focus:ring-inset outline-none',
        {
          'ring-figmaRed': errorType != null,
        }
      )}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setter(e.target.value)}
      required
    />
  );
};

export default FormInput;
