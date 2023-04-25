import React from 'react';
import Common from '../../../components/Common/Common';
import DragDrop from './DragDrop/DragDrop';
import BundleTitle from './BundleTitle/BundleTitle';
import * as S from './WrapWorkStyle';

const WrapWork = () => {
  const { ScreenOut } = Common;

  return (
    <>
      <S.WrapWork>
        <ScreenOut>내 폴더</ScreenOut>
      </S.WrapWork>
      <S.WrapWork>
        <ScreenOut>내 문제지</ScreenOut>
        <S.AreaWork>
          <S.BtnWork type="button">+ 문제지 만들기</S.BtnWork>
          <S.GroupSelect>
            <S.BtnSelect>
              이름순 <S.IcoArrow />
            </S.BtnSelect>
            <S.ListSelect>
              <li>
                <a href="#none">생성일시순</a>
              </li>
              <li>
                <a href="#none">이름순</a>
              </li>
            </S.ListSelect>
          </S.GroupSelect>
        </S.AreaWork>
        <BundleTitle />
        <DragDrop />
      </S.WrapWork>
    </>
  );
};

export default WrapWork;
