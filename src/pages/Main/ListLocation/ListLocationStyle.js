import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListLocation = styled.ol`
  display: flex;
  margin-left: -30px;
  padding-bottom: 20px;
`;

export const Li = styled.li`
  padding-left: 30px;
  position: relative;

  & + &::after {
    content: '  ';
    font-size: 12px;
    position: absolute;
    top: 12px;
    left: 10px;
    width: 5px;
    height: 5px;
    border-top: 1px solid #555;
    border-left: 1px solid #555;
    transform: rotate(133deg);
  }
`;

export const LinkLocation = styled(Link)`
  display: block;
  padding: 6px 0;
  font-size: 14px;
  line-height: 18px;
  color: #555;
`;
