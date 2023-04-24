import React, { useEffect, useState } from 'react';
import Common from '../../components/Common/Common';
import ListLocation from './ListLocation/ListLocation';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as S from './MainStyle';

const Main = () => {
  const { ScreenOut } = Common;
  const [work, setWork] = useState([]);

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
    <S.Main>
      <ListLocation />
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
        <S.WrapBundle>
          <S.TitWork>
            편집중 <ScreenOut>인 목록</ScreenOut>
          </S.TitWork>
        </S.WrapBundle>
        {work.map(product => {
          return (
            <S.ListWork key={product.id}>
              {product.items.map(({ id, name, count, level }) => {
                return (
                  <S.Li key={id}>
                    <S.LinkWork>
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
                );
              })}
            </S.ListWork>
          );
        })}
      </S.WrapWork>
    </S.Main>
  );
};
export default Main;
