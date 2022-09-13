import React from "react";
import * as S from "./styles";
import moment from "moment";

const SDK = ({ name, sdk_items }) => {
  return (
    <S.SDK>
      <S.SDKTitle>{name}</S.SDKTitle>
      {sdk_items.length
        ? sdk_items.map(({ lastSeenDate }) => {
            const format = moment(lastSeenDate, "YYYYMMDD").fromNow();

            return (
              <S.SDKDate>
                {`SDK`}&nbsp;{format}
              </S.SDKDate>
            );
          })
        : null}
    </S.SDK>
  );
};

export default SDK;
