import { color } from '@/styles/colors';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  width: 350px;
  height: 77px;

  border-bottom: 1px solid ${color.black001 + 50};
`;

const Header = styled.h1`
  font-size: 20px;
`;

const HeaderTime = styled.h2`
  font-size: 16px;
`;

const HeaderComment = styled.p`
  font-size: 13px;

  padding-left: 10px;
  color: ${color.gray001 + 90};
`;

const HouseCardWrapper = styled.div`
  display: block;
  flex-direction: column;

  height: 787px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export {
  Container,
  HeaderWrapper,
  Header,
  HeaderTime,
  HeaderComment,
  HouseCardWrapper,
};
