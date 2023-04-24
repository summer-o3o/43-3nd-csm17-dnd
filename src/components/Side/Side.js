import React from 'react';
import * as S from './SideStyle';
import Common from '../Common/Common';

const Side = () => {
  const { ScreenOut } = Common;

  return (
    <S.Side>
      <S.TitList>내 문제지</S.TitList>
      <S.FormSearch method="post" action="#none" className="form_search">
        <fieldset>
          <ScreenOut as="legend">문제지 검색</ScreenOut>
          <S.InpSearch
            type="text"
            placeholder="문제지 제목을 검색해주세요."
            title="문제지 제목을 검색"
          />
          <S.BtnSesrch type="submit">검색</S.BtnSesrch>
        </fieldset>
      </S.FormSearch>
      <S.WrapWrok>
        <S.TitleG>작업공간 (2/2)</S.TitleG>
      </S.WrapWrok>
    </S.Side>
  );
};
export default Side;
