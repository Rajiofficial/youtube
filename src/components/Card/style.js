import styled from 'styled-components';

export const Container = styled.div`
  width: ${(props) => props.type !== 'sm' && '360px'};
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
  gap: 10px;
`;

export const Image = styled.img`
  width: ${(props) => (props.type === 'sm' ? '250px' : '100%')};
  height: ${(props) => (props.type === 'sm' ? '150px' : '202px')};
  background-color: #999;
`;

export const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== 'sm' && '16px'};
  gap: 12px;
  flex: 1;
`;

export const ChannelImage = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: ${(props) => props.type === 'sm' && 'none'};
  object-fit: cover;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #673ab7;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: ${(props) => props.type === 'sm' && 'none'};
`;

export const Texts = styled.div``;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

export const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
