import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import SectionLine from "../elements/common/SectionLine";
import {
  storeContent,
  storeImage,
  posContent,
  posImage,
  inventoryContent,
  inventoryImage,
  dMarketingContent,
  dMarketingImage,
} from "../../util/data";

export default function index() {
  return (
    <div id='feature' className="py-20">
      {/* <SectionLine>ການໃຫ້ບໍລິການ</SectionLine>
      <LeftSide image={posImage} content={posContent} />
      <RightSide image={storeImage} content={storeContent} />
      <LeftSide image={inventoryImage} content={inventoryContent} />
      <RightSide image={dMarketingImage} content={dMarketingContent} /> */}
    </div>
  );
}
