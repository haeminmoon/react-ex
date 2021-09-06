type ModalBackgroundProps = {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
};

/**
 *
 * @onClose 모달 밖을 누르면 모달이 닫히는 기능
 */
function ModalBackground({ children, visible, onClose }: ModalBackgroundProps) {
  return (
    <div
      className={`${
        visible && 'fixed top-0 left-0 z-50 bg-opacity-50 w-full h-full bg-black'
      }  transition-all duration-500 ease-in`}
      onClick={onClose}
    >
      {children}
    </div>
  );
}

export default ModalBackground;
