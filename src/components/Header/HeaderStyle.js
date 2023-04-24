import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: sticky;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #dedede;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 10;
`;

export const TitLogo = styled.h1`
  width: 80px;
`;

export const WrapMenu = styled.div`
  margin-left: auto;
`;

export const LinkMenu = styled(Link)`
  display: block;
  font-size: 16px;
  color: #257c80;
`;

export const ListMenu = styled.ul`
  display: none;
`;
