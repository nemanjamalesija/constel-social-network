import { useEffect, useRef } from 'react';

export default function useOutsideClick(
  closeHandler: () => void,
  isCapturingFase = true
) {
  const ref = useRef({} as HTMLDivElement);

  useEffect(() => {
    const clickHandler = (e: any) => {
      if (ref.current && ref.current !== e.currentTarget) {
        closeHandler();
      }
    };

    document.addEventListener('click', clickHandler, isCapturingFase);

    return document.removeEventListener('click', clickHandler);
  }, []);

  return ref;
}
