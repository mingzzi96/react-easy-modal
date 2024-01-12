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
  align-items: center;
  justify-content: center;
`;

const StyledModalContent = styled.div`
  position: relative;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  padding: 32px 40px;
`;

const StyledModalContentTitle = styled.h2`
  color: #373740;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const StyledModalContentCloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
`;

const ModalLayout = ({ children, isOpen, closeModal, modalTitle }) => {
  return (
    <>
      <StyledModalDim style={{ display: isOpen ? 'flex' : 'none' }}>
        <StyledModalContent>
          <StyledModalContentCloseButton type='button' onClick={closeModal}>
            닫기 버튼입니다.
          </StyledModalContentCloseButton>
          <StyledModalContentTitle>{modalTitle}</StyledModalContentTitle>
          {children}
        </StyledModalContent>
      </StyledModalDim>
    </>
  );
};

export default ModalLayout;
