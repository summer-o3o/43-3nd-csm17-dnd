import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropDownMenu = styled.ul`
  position: fixed;
  z-index: 10;
  border: 1px solid #dedede;
  padding: 10px 0;
  border-radius: 10px;
  background-color: #fff;
`;

export const LinkMenu = styled(Link)`
  display: block;
  padding: 7px 40px 7px 20px;
  font-size: 15px;
  line-height: 30px;
  color: #888;

  &:hover {
    background-color: #f2f2f2;
    color: #222;
  }
`;
