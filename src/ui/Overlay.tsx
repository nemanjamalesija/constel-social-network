import useOutsideClick from '../hooks/useOutsideClick';

const Overlay = ({ close }: { close: () => void }) => {
  // close modal on overlay click
  const overlayRef = useOutsideClick(close, true);

  return (
    <div
      ref={overlayRef}
      className='fixed top-0 left-0 w-full h-screen bg-black/30 z-[90]'
    ></div>
  );
};

export default Overlay;
