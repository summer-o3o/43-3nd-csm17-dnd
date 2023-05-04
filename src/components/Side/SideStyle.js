import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Side = styled.aside`
  position: fixed;
  top: 51px;
  left: 0;
  bottom: 0;
  width: 344px;
  padding: 15px 0;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 10;
`;

export const TitList = styled.h2`
  padding: 0 20px 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 28px;
`;

export const FormSearch = styled.form`
  position: relative;
  padding: 0 20px;
`;

export const InpSearch = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  padding: 10px 15px;
  border: 1px solid #dedede;
`;

export const BtnSearch = styled.button`
  position: absolute;
  right: 29px;
  top: 7px;
  font-size: 15px;
  line-height: 20px;
  padding: 5px 10px;
`;

export const WrapWork = styled.div`
  padding-top: 25px;
`;

export const TitleG = styled.h3`
  padding: 15px 20px;
  font-size: 14px;
  font-weight: normal;
  background-color: #dedede;
  color: #222;
`;

export const ListFolder = styled.ul``;

export const LinkFolder = styled(Link)`
  display: block;
  font-size: 14px;
  color: #555;
  padding: 15px 20px;

  &:hover {
    background-color: #f2f2f2;
  }
`;
