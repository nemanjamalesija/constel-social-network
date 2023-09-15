import React from 'react';

const FormLabel = ({ forProp }: { forProp: string }) => {
  return (
    <label
      htmlFor={forProp}
      className='block text-base text-gray-900 font-bold mb-2'
    >
      {forProp}
    </label>
  );
};

export default FormLabel;
