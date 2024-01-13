import { useState } from 'react';
import ModalLayout from './components/Modal/ModalLayout';
import ChangeNameModal from './components/Modal/ChangeNameModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpenClick = () => setIsModalOpen(true);

  const handleModalCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>vite react project</h1>
      <h2>Let&apos;s implement a modal feature on this page!</h2>
      <button onClick={handleModalOpenClick} type='button'>
        Open Modal
      </button>
      {isModalOpen ? (
        <ModalLayout closeModal={handleModalCloseClick} modalTitle='Rename Folder'>
          <ChangeNameModal />
        </ModalLayout>
      ) : null}
    </>
  );
}

export default App;
