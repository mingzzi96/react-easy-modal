import { useState } from 'react';
import ModalLayout from './components/Modal/ModalLayout';
import ChangeNameModal from './components/Modal/ChangeNameModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpenClick = () => setIsModalOpen(true);
  const handleModalCloseClick = () => setIsModalOpen(false);

  return (
    <>
      <h1>vite react project</h1>
      <h2>Let&apos;s implement a modal feature on this page!</h2>
      <button onClick={handleModalOpenClick} type='button'>
        모달 창 열기
      </button>
      <ModalLayout isOpen={isModalOpen} closeModal={handleModalCloseClick} modalTitle='폴더 이름 변경'>
        <ChangeNameModal />
      </ModalLayout>
    </>
  );
}

export default App;
