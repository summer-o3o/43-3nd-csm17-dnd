import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ListLocation from './ListLocation/ListLocation';
import WrapWork from './WrapWork/WrapWork';
import * as S from './MainStyle';

const Main = () => {
  return (
    <S.Main>
      <ListLocation />
      <WrapWork />
    </S.Main>
  );
};
export default Main;
