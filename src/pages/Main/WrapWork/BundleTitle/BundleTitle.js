import React from 'react';
import Common from '../../../../components/Common/Common';
import * as S from './BundleTitleStyle';

const BundleTitle = () => {
  const { ScreenOut } = Common;

  return (
    <S.BundleTitle>
      <S.TitWork>
        편집중 <ScreenOut>인 목록</ScreenOut>
      </S.TitWork>
    </S.BundleTitle>
  );
};

export default BundleTitle;
