import React from "react";
import Img from "./Img";
import Text from "./Text";
import RichText from "./RichText";
import Videos from "./Videos";
export default function Parser(props) {
  const component = props.component;
  const component_mapper = {
    Text: Text,
    Img: Img,
    RichText: RichText,
    Video: Videos,
  };
  const SpecificStory = component_mapper[component.__component];
  return <SpecificStory {...component} />;
}
