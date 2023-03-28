import React from "react";

export default function Img(props) {
  return (
    <div className="py-3">
      {/* <img src={props.image} alt="" /> */}
      <div dangerouslySetInnerHTML={{__html:props.image}}/>
    </div>
  );
}
