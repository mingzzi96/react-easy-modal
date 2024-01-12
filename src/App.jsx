import { useState } from 'react';
import ModalDim from './components/Modal/ModalDim';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpenClick = () => setIsModalOpen(true);
  const handleModalCloseClick = () => setIsModalOpen(false);

  return (
    <>
      <h1>vite react project</h1>
      <h2>Let&apos;s make modal pop up on this page</h2>
      <button onClick={handleModalOpenClick} type='button'>
        모달 창 열기
      </button>
      <ModalDim isOpen={isModalOpen} closeModal={handleModalCloseClick} />
    </>
  );
}

export default App;
