import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 55px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Search = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  align-items: center;
  margin-left: 70px;
  margin-right: 35px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  padding-left: 106px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Img = styled.img`
  height: 25px;
`;

export const Input = styled.input`
  flex: 1;
  height: 36px;
  padding-left: 10px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.05);
  width: 0;
  &::placeholder {
    font-size: 16px;
  }
`;

export const Buttons = styled.button`
  padding: 3px 15px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: 1px solid #ccc;
  margin-left: -1px;
`;

export const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  margin-right: 10px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
