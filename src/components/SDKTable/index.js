import React, { useEffect, useState } from "react";
import * as S from "./styles";
import SDK from "../../components/SDK";
import installed from "../../helpers/json/installed.json";
import uninstalled from "../../helpers/json/uninstalled.json";
import moment from "moment";

// This is SDK Table. It represents a table for SDK's
const SDKTable = ({ isInstalled }) => {
  // useState - React Hook
  // We will use useState here to get array of grouped SDK's
  const [sdk, setSDK] = useState([]);
  const [totalSDK, setTotalSDK] = useState([]);

  // Rendering SDK data based on what option user chooses
  const sdkData = isInstalled
    ? installed.data.installedSdks
    : uninstalled.data.uninstalledSdks;

  // Rendering SDK date
  const sdkDate = isInstalled
    ? installed.data.latestUpdatedDate
    : uninstalled.data.latestUpdatedDate;

  // Format latest updated date
  const format = moment(sdkDate).format("MMMM Do YYYY");

  useEffect(() => {
    // We will let because it's easier to push stuff there and then update with useState
    let groups = [];
    let sdks = [];

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

      // See how many total SDK there are and push them into sdks array
      groups.map((group) => {
        group.sdk_items.map((sdk) => {
          sdks.push(sdk);
        });
      });

      // Finally! We can set useState() :)
      setTotalSDK(sdks);
      setSDK(groups);
    };

    groupCategoriesTogether();
  }, [isInstalled]);

  return (
    <S.SDKTable>
      <S.SDKTitleContainer>
        <S.SDKTitle>{`Installed SDK's`}</S.SDKTitle>
        <S.SDKTitle>{totalSDK.length}</S.SDKTitle>
      </S.SDKTitleContainer>
      <S.SDKDate>
        {`Latest update:`}&nbsp;
        {format}
      </S.SDKDate>

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
