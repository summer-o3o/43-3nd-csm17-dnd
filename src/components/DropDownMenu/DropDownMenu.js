import React from 'react';
import * as S from './DropDownMenuStyle';

const DropDownMenu = ({ menuList, contextMenuX, contextMenuY }) => {
  return (
    <S.DropDownMenu style={{ left: contextMenuX, top: contextMenuY }}>
      {menuList.map((value, index) => (
        <li key={index}>
          <S.LinkMenu to="#none">{value}</S.LinkMenu>
        </li>
      ))}
    </S.DropDownMenu>
  );
};

export default DropDownMenu;
