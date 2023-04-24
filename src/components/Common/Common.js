import styled, { css } from 'styled-components';

const ScreenOut = styled.strong`
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
`;
const ImgGobal = styled.img`
  display: block;
  width: 100%;
`;

const Common = {
  ScreenOut,
  ImgGobal,
};

export default Common;
