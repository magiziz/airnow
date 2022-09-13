import React from "react";
import * as S from "./styles";

const SDK = ({ name, sdk_items }) => {
  return (
    <S.SDK>
      <S.SDKTitle>{name}</S.SDKTitle>
      {sdk_items.length
        ? sdk_items.map(({ lastSeenDate }) => (
            <S.SDKDate>
              {`SDK`}&nbsp;{lastSeenDate}
            </S.SDKDate>
          ))
        : null}
    </S.SDK>
  );
};

export default SDK;
