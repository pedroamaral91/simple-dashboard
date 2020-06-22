import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid grey;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  outline: 0;
  border: 0;
  color: #f2d627;
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
