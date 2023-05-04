import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Common from '../Common/Common';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import * as S from './SideStyle';

const Side = () => {
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState([]); // 선택한 메뉴를 저장하는 상태

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

  const handleSubMenuClick = menu => {
    const newFolder = {
      ...menu,
      id: selectedMenu.length + 1, // 기존에 선택된 메뉴의 개수 + 1을 id 값으로 설정
    };
    setSelectedMenu([...selectedMenu, newFolder]);
  };

  const handleDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    // 드래그 앤 드롭 로직 구현
    const items = [...selectedMenu];
    const [removed] = items.splice(sourceIndex, 1);
    items.splice(destinationIndex, 0, removed);

    // 드래그 앤 드롭 이후에 필요한 로직 실행
    // 예시: items 배열을 업데이트하거나 상태를 업데이트하거나 API 요청 등
    setSelectedMenu(items); // 예시: items 배열을 상태로 업데이트
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
          <S.BtnSearch type="submit">검색</S.BtnSearch>
        </fieldset>
      </S.FormSearch>
      <S.WrapWork>
        <S.TitleG>작업공간 (2/2)</S.TitleG>
      </S.WrapWork>
      {isContextMenuVisible && (
        <DropDownMenu
          menuList={['하위폴더 생성', '폴더 생성', '폴더삭제']}
          contextMenuX={contextMenuX}
          contextMenuY={contextMenuY}
          onMenuSelect={handleSubMenuClick}
        />
      )}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable direction="vertical" type="folder" droppableId="folderList">
          {(provided, snapshot) => (
            <S.ListFolder
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver} // 드래그 중인지 여부를 스타일링에 사용
            >
              {selectedMenu.map((info, idx) => (
                <Draggable key={idx} draggableId={`folder-${idx}`} index={idx}>
                  {(provided, snapshot) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      style={{
                        ...provided.draggableProps.style,
                        // 드래그 중인지 여부에 따라 스타일 변경
                        background: snapshot.isDragging ? '#f2f2f2' : '#fff',
                      }}
                    >
                      <S.LinkFolder>새폴더 {info.id}</S.LinkFolder>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </S.ListFolder>
          )}
        </Droppable>
      </DragDropContext>
    </S.Side>
  );
};
export default Side;
