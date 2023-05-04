import React from 'react';
import * as S from './DropDownMenuStyle';

const DropDownMenu = ({
  menuList,
  contextMenuX,
  contextMenuY,
  onMenuSelect,
}) => {
  const handleSubMenuClick = menu => {
    onMenuSelect(menu); // 선택한 메뉴를 부모 컴포넌트로 전달
  };

  return (
    <S.DropDownMenu style={{ left: contextMenuX, top: contextMenuY }}>
      {menuList.map((value, index) => (
        <li key={index}>
          <S.LinkMenu to="#none" onClick={() => handleSubMenuClick(value)}>
            {value}
          </S.LinkMenu>
        </li>
      ))}
    </S.DropDownMenu>
  );
};

export default DropDownMenu;
