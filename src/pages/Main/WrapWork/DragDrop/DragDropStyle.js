import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GroupWork = styled.div`
  display: flex;
  margin-left: -30px;
  padding-top: 20px;
`;

export const ListWork = styled.ul`
  width: -webkit-calc(20% - 30px);
  width: -moz-calc(20% - 30px);
  width: calc(20% - 30px);
  padding-left: 30px;
`;

export const Li = styled.li`
  padding-top: 30px;
`;

export const LinkWork = styled(Link)`
  display: block;
  position: relative;
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 25px 20px;
  background-color: #fff;

  &.on::after,
  &:hover::after {
    position: absolute;
    inset: -1px;
    border: 4px solid #4ad295;
    border-radius: 20px;
    content: '';
  }
`;

export const textInfo = styled.span`
  display: block;
  padding-bottom: 10px;
  font-size: 14px;
  text-align: right;
  color: #64b5f6;
`;

export const TitName = styled.strong`
  display: -webkit-box;
  padding-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  font-size: 16px;
  font-weight: bold;
  line-height: 23px;
  height: 46px;
  color: #222;
`;

export const GroupCount = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
`;

export const BunchCount = styled.span`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  width: 55px;
  height: 55px;
  border-radius: 100%;
  text-align: center;
  justify-content: center;

  & + & {
    margin-left: 20px;
  }
`;

export const EmphCount = styled.em`
  font-size: 16px;
  font-weight: bold;
  color: #222;
`;

export const TxtCount = styled.span`
  padding-top: 5px;
  font-size: 12px;
  color: #555;
`;
