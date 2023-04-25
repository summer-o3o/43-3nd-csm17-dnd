import React, { useState } from 'react';
import Common from '../Common/Common';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import * as S from './SideStyle';

const Side = () => {
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const { ScreenOut } = Common;

  const handleContextMenu = e => {
    e.preventDefault();
    setIsContextMenuVisible(true);
    setContextMenuX(e.clientX);
    setContextMenuY(e.clientY);
  };

  const handleContextMenuClose = () => {
    setIsContextMenuVisible(false);
  };

  return (
    <S.Side onContextMenu={handleContextMenu} onClick={handleContextMenuClose}>
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
      {isContextMenuVisible && (
        <DropDownMenu
          menuList={['하위폴더 생성', '폴더 생성', '폴더삭제']}
          contextMenuX={contextMenuX}
          contextMenuY={contextMenuY}
        />
      )}
    </S.Side>
  );
};
export default Side;
