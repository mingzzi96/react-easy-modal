import styled from 'styled-components';

const StyledModalDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999999;
  display: none;
`;

const ModalDim = ({ children, isOpen, closeModal }) => {
  return (
    <>
      <StyledModalDim style={{ display: isOpen ? 'block' : 'none' }}>
        <div>
          <button type='button' onClick={closeModal}>
            닫기 버튼입니다.
          </button>
          <div>{children}</div>
        </div>
      </StyledModalDim>
    </>
  );
};

export default ModalDim;
