import {
  useState,
  createContext,
  useContext,
  cloneElement,
  ReactNode,
  ReactElement,
} from 'react';
import Overlay from '../../ui/Overlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { createPortal } from 'react-dom';

type ModalContextType = {
  openName: string;
  open: React.Dispatch<React.SetStateAction<string>>;
  close: () => void;
};

const ModalContext = createContext({} as ModalContextType);

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState<string>('');

  // references 2 states of setOpen function
  // used to controll open and close state of modal
  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }: { children: ReactNode; opens: string }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children as React.ReactElement, {
    onClick: () => open(opens),
  });
}

function Window({ children, name }: { children: ReactNode; name: string }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div>
      <Overlay close={close} />
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99]'>
        <button className='absolute right-5 top-1' onClick={close}>
          <FontAwesomeIcon
            icon={faClose}
            className='h-6 w-6 text-figmaGrayShade2'
          />
        </button>
        <div>
          {cloneElement(children as ReactElement, { onCloseModal: close })}
        </div>
        O
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
