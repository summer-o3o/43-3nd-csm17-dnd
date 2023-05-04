import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Common from '../../../../components/Common/Common';
import * as S from './DragDropStyle';

const DragDrop = () => {
  const { ScreenOut } = Common;
  const [work, setWork] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const dragging = snapshot => snapshot.isDragging && 'on';

  // 드래그가 시작될 때 선택한 아이템 초기화
  const handleDragStart = start => {
    setSelectedItems([]);
  };

  // 아이템 선택 또는 선택 해제
  const toggleItemSelection = itemId => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  // 드롭할 때 선택한 아이템 이동
  const handleDrop = result => {
    const { destination, source } = result;
    if (destination) {
      // 선택한 아이템들을 이동할 위치로 이동
      const selectedItemsToMove = work[source.droppableId].items.filter(item =>
        selectedItems.includes(item.id)
      );
      const remainingItems = work[source.droppableId].items.filter(
        item => !selectedItems.includes(item.id)
      );
      const movedItems = [
        ...remainingItems.slice(0, source.index),
        ...selectedItemsToMove,
        ...remainingItems.slice(source.index),
      ];
      work[source.droppableId].items = movedItems;
    }
    setSelectedItems([]); // 선택한 아이템 초기화
  };

  const handleDragEnd = result => {
    const { source, destination, draggableId } = result;

    // 드래그 앤 드롭이 완료된 아이템의 정보를 추출

    // source: 드래그를 시작한 Droppable 영역과 아이템의 인덱스 정보
    // destination: 드롭이 완료된 Droppable 영역과 아이템의 인덱스 정보
    // draggableId: 드래그 앤 드롭이 완료된 아이템의 고유 ID

    // 예를 들어, source: { droppableId: "column1", index: 0 }
    // destination: { droppableId: "column1", index: 2 }
    // draggableId: "item1"

    // 드래그 앤 드롭이 완료되지 않은 경우, destination이 null일 수 있으므로 체크
    if (!destination) {
      return;
    }

    // 소스와 데스티네이션에 대한 Droppable 영역의 id가 정의되어 있는지 확인
    if (!source.droppableId || !destination.droppableId) {
      return;
    }

    // 동일한 Droppable 영역 내에서의 위치 변경인 경우
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // 아이템의 순서를 업데이트하고 화면을 다시 그리는 로직을 작성
    // 예를 들어, ITEMS 배열을 업데이트하고, state를 업데이트하여 UI를 다시 렌더링

    // ITEMS 배열을 업데이트
    const updatedItems = [...work];
    const sourceColumn = updatedItems.find(
      column => column.id === source.droppableId
    );
    const destinationColumn = updatedItems.find(
      column => column.id === destination.droppableId
    );
    const item = sourceColumn.items.find(item => item.id === draggableId);
    sourceColumn.items.splice(source.index, 1); // source에서 아이템 제거
    destinationColumn.items.splice(destination.index, 0, item); // destination에 아이템 추가

    // // 항상 3*3 형태로 되게끔 로직 추가
    // const maxItemsPerColumn = 3; // 각 열에 최대 아이템 개수
    // updatedItems.forEach(column => {
    //   const removedItems = column.items.splice(maxItemsPerColumn);
    //   sourceColumn.items.push(...removedItems);
    // });
    // // state 업데이트를 통해 UI를 다시 렌더링
    setWork(updatedItems);
  };

  useEffect(() => {
    fetch('/data/workData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setWork(data);
      });
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <S.GroupWork>
        {work.map(product => {
          return (
            <Droppable
              key={product.id}
              droppableId={product.id}
              direction="vertical"
              type="column1"
            >
              {(provided, snapshot) => (
                <S.ListWork
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  isDraggingOver={snapshot.isDraggingOver} // 드래그 중인지 여부를 스타일링에 사용
                >
                  {product.items.map(({ id, name, count, level }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided, snapshot) => (
                          <S.Li
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            key={id}
                            style={{
                              ...provided.draggableProps.style,
                            }}
                            onClick={() => toggleItemSelection(id)} // 아이템 클릭 시 toggleItemSelection 함수 호출
                          >
                            <S.LinkWork
                              className={dragging(snapshot)} // 동적으로 클래스를 추가
                            >
                              <S.textInfo>편집 진행중</S.textInfo>
                              <S.TitName>
                                <ScreenOut>내 문제지 이름 :</ScreenOut>
                                {name}
                              </S.TitName>
                              <S.GroupCount>
                                <S.BunchCount>
                                  <S.EmphCount>{count}</S.EmphCount>
                                  <ScreenOut>개 의</ScreenOut>
                                  <S.TxtCount>문제수</S.TxtCount>
                                </S.BunchCount>
                                <S.BunchCount>
                                  <S.EmphCount>{level}</S.EmphCount>
                                  <ScreenOut>개 의</ScreenOut>
                                  <S.TxtCount>난이도</S.TxtCount>
                                </S.BunchCount>
                              </S.GroupCount>
                            </S.LinkWork>
                          </S.Li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </S.ListWork>
              )}
            </Droppable>
          );
        })}
      </S.GroupWork>
    </DragDropContext>
  );
};
export default DragDrop;
