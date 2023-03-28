import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

const INTERVAL_MS = 5000;

export default function IntervalImage(props) {
  const { arrImage } = props;
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (arrImage)
        setCurrentImage(
          (prevCurrentImage) => (prevCurrentImage + 1) % arrImage.length
        );
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {arrImage ? (
        arrImage.map((item, index) => (
          <div
            key={index}
            className={`
          ${
            index === currentImage ? "hidden rounded-md" : "rounded-md"
          } transition ease-in-out hover:scale-125 duration-700 cursor-pointer`}
          >
            <Image src={item} alt={index} width="1000" height="800"  />
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
