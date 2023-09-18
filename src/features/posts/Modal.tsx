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

const ModalContext = createContext({} as any);

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState('');

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
      <Overlay />
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <button className='absolute right-5 top-1' onClick={close}>
          <FontAwesomeIcon
            icon={faClose}
            className='h-6 w-6 text-figmaGrayShade2'
          />
        </button>

        <div>
          {cloneElement(children as ReactElement, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
