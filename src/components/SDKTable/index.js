import React from "react";
import * as S from "./styles";
import SDK from "../../components/SDK";
import installed from "../../helpers/json/installed.json";
import uninstalled from "../../helpers/json/uninstalled.json";

// This is SDK Table. It represents a table for SDK's
const SDKTable = ({ isInstalled }) => {
  // Rendering SDK data based on what option user chooses
  const sdkData = isInstalled
    ? installed.data.installedSdks
    : uninstalled.data.uninstalledSdks;
  console.log(sdkData);
  return (
    <S.SDKTable>
      <S.SDKTitleContainer>
        <S.SDKTitle>{`Installed SDK's`}</S.SDKTitle>
        <S.SDKTitle>{10}</S.SDKTitle>
      </S.SDKTitleContainer>
      <S.SDKDate>{`Latest update`}</S.SDKDate>

      {/*Rendering all SDK's here*/}
      <S.SDKGridTable>
        {sdkData.map(({ id, categories }) => {
          const [name] = categories;

          return <SDK key={id} name={name} />;
        })}
      </S.SDKGridTable>
    </S.SDKTable>
  );
};

export default SDKTable;
