import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  min-width: 1000px;
  margin: 60px 80px 0 400px;
`;

export const WrapWork = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin-top: 30px;
  padding: 50px;
`;

export const AreaWork = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnWork = styled.button`
  background-color: #4ad295;
  color: #fff;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 14px;
`;

export const GroupSelect = styled.div`
  margin-left: auto;
`;

export const BtnSelect = styled.button`
  position: relative;
  width: 130px;
  font-size: 14px;
  color: #555;
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid #dedede;
  text-align: left;
  color: #222;
`;

export const IcoArrow = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 5px;
  height: 5px;
  border-top: 1px solid #555;
  border-left: 1px solid #555;
  transform: rotate(225deg);
`;

export const ListSelect = styled.ul`
  display: none;
`;

export const WrapBundle = styled.div`
  padding-top: 50px;
  border-bottom: 1px solid #dedede;
  display: flex;
`;

export const TitWork = styled.strong`
  display: block;
  font-size: 18px;
  color: #888;
  line-height: 25px;
  padding: 15px 10px;
`;

export const ListWork = styled.ul`
  padding-top: 50px;
  margin-left: -30px;
  font-size: 0;
`;

export const Li = styled.li`
  display: inline-block;
  width: -webkit-calc(20% - 30px);
  width: -moz-calc(20% - 30px);
  width: calc(20% - 30px);
  vertical-align: top;
  padding-left: 30px;
`;

export const LinkWork = styled(Link)`
  display: block;
  position: relative;
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 25px 20px;

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
