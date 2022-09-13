import React, { useState } from "react";
import * as S from "./styles";
import SDKTable from "../../components/SDKTable";

// This is AppView. It represents the view of the App
const AppView = () => {
  // useState - React Hook
  // True by default
  const [isInstalled, setIsInstalled] = useState(true);

  return (
    <S.App>
      <S.ButtonSelectContainer>
        <S.Button
          $isSelected={isInstalled}
          onClick={() => setIsInstalled(true)}
        >{`Installed`}</S.Button>
        <S.Button
          $isSelected={!isInstalled}
          onClick={() => setIsInstalled(false)}
        >{`Uninstalled`}</S.Button>
      </S.ButtonSelectContainer>

      {/*SDK Table Component*/}
      <SDKTable isInstalled={isInstalled} />
    </S.App>
  );
};

export default AppView;
