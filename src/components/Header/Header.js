import React from 'react';
import { Link } from 'react-router-dom';
import Common from '../Common/Common';
import * as S from './HeaderStyle';

const Header = () => {
  const { ImgGobal } = Common;

  return (
    <S.Header>
      <S.TitLogo>
        <Link to="/">
          <ImgGobal
            src="https://www.mathsecr.com/resources/shared/images/logo-bronze.png"
            className="ImgG"
            alt="수학비서"
          />
        </Link>
      </S.TitLogo>
      <S.WrapMenu>
        <S.LinkMenu to="#">전체메뉴</S.LinkMenu>
        <S.ListMenu>
          <li>내 문제지</li>
          <li>내 분석지</li>
          <li>나만의 DB</li>
          <li>공지사항</li>
          <li>자주찾는 질문</li>
          <li>1:1 문의</li>
        </S.ListMenu>
      </S.WrapMenu>
    </S.Header>
  );
};
export default Header;
