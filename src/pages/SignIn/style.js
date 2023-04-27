import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100%-56%);
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #202020;
  border: 1px solid #373737;
  padding: 20px 50px;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

export const Input = styled.input`
  border: 1px solid #373737;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: white;
`;

export const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #373737;
  color: #aaaaaa;
`;

export const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: #aaaaaa;
`;

export const Links = styled.div`
  margin-left: 50px;
`;

export const Link = styled.span`
  margin-left: 30px;
`;
