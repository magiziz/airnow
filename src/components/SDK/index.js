import React from "react";
import * as S from "./styles";

const SDK = ({ name, lastSeenDate }) => {
  return (
    <S.SDK>
      <S.SDKTitle>{name}</S.SDKTitle>
      <S.SDKDate>
        {`SDK`}&nbsp;{lastSeenDate}
      </S.SDKDate>
    </S.SDK>
  );
};

export default SDK;
