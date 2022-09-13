import React, { useEffect, useState } from "react";
import * as S from "./styles";
import SDK from "../../components/SDK";
import installed from "../../helpers/json/installed.json";
import uninstalled from "../../helpers/json/uninstalled.json";

// This is SDK Table. It represents a table for SDK's
const SDKTable = ({ isInstalled }) => {
  // useState - React Hook
  // We will use useState here to get array of grouped SDK's
  const [sdk, setSDK] = useState([]);

  // Rendering SDK data based on what option user chooses
  const sdkData = isInstalled
    ? installed.data.installedSdks
    : uninstalled.data.uninstalledSdks;

  useEffect(() => {
    let groups = [];

    const groupCategoriesTogether = () => {
      sdkData.map((sdk) => {
        const [sdkCategory] = sdk.categories;

        // Check if category doesn't exist in the array
        const isGroupCategoryExisted = groups.some((group) =>
          group.category.includes(sdkCategory)
        );

        // If category doesn't exist in the group array just push the category with the sdk_items array
        if (!isGroupCategoryExisted) {
          groups.push({
            sdk_items: [{ ...sdk }],
            category: sdkCategory,
          });
        } else {
          // You may ask me here why i am checking again for sdk category if it exists
          // We need to do a map loop. Update the array and do it in the right way
          // We check for each group and we need to see if we need to update sdk_items array or if we just spread values out as they are e.g {..group}
          groups = groups.map((group) => {
            const isAlreadyGroup = group.category.includes(sdkCategory);
            if (isAlreadyGroup) {
              return {
                ...group,
                sdk_items: [...group.sdk_items, { ...sdk }],
              };
            } else {
              return {
                ...group,
              };
            }
          });
        }
      });

      setSDK(groups);
    };

    groupCategoriesTogether();
  }, [isInstalled]);
  console.log("sdk", sdk);
  return (
    <S.SDKTable>
      <S.SDKTitleContainer>
        <S.SDKTitle>{`Installed SDK's`}</S.SDKTitle>
        <S.SDKTitle>{10}</S.SDKTitle>
      </S.SDKTitleContainer>
      <S.SDKDate>{`Latest update`}</S.SDKDate>

      {/*Rendering all SDK's here*/}
      <S.SDKGridTable>
        {sdk.map(({ category, sdk_items }) => {
          return (
            <SDK
              key={category}
              sdk_items={sdk_items && sdk_items.length ? sdk_items : []}
              name={category}
            />
          );
        })}
      </S.SDKGridTable>
    </S.SDKTable>
  );
};

export default SDKTable;
