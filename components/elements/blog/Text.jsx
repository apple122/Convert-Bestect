import React from "react";

export default function Text(props) {
  return (
    <div>
      <p
        className="pb-5 text-lg md:text-xl font-medium text-coolGray-900
     dark:text-white border-coolGray-100"
      >
        <div dangerouslySetInnerHTML={{ __html: props.text }} />
      </p>
    </div>
  );
}
