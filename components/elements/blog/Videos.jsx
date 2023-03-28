import React from "react";
import Video from "../common/Video";
export default function Videos(props) {
  return (
    <div>
      <Video src={props.video} className="w-auto" />
    </div>
  );
}
