import React from 'react';
import Common from '../../../components/Common/Common';
import * as S from './ListLocationStyle';

const ListLocation = () => {
  const { ScreenOut } = Common;

  return (
    <S.ListLocation>
      <S.Li>
        <S.LinkLocation to="#">내 문제지</S.LinkLocation>
        <ScreenOut>내 문제지로 이동</ScreenOut>
      </S.Li>
      <S.Li>
        <S.LinkLocation to="#">작업공간</S.LinkLocation>
        <ScreenOut>작업공간으로 이동</ScreenOut>
      </S.Li>
    </S.ListLocation>
  );
};
export default ListLocation;
