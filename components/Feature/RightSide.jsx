import React from "react";
import Article from "../elements/common/Article";
import Button from "../elements/common/Button";
import IntervalImage from "../elements/common/IntervalImage";

export default function RightSide(props) {
  const { content, image } = props;
  return (
    <section className="overflow-hidden transition-all bg-white dark:bg-black bg-image-light dark:bg-image-dark">
      <div className="container px-4 mx-auto">
        <div
          data-aos="fade-up"
          className="flex flex-wrap -mx-4 lg:items-center"
        >
          <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
            <div className="relative overflow-hidden transition-all mx-auto md:mr-0 max-w-max">
              <img
                className="absolute z-10 w-2/12 text-yellow-400 -left-16 -bottom-16"
                src="flex-ui-assets/elements/circle2-yellow.svg"
                alt="image"
                width="1"
                height="1"
                layout="fixed"
              />

              <img
                className="absolute z-10 w-2/12 text-blue-500 -rotate-90 -right-16 -top-16"
                src="flex-ui-assets/elements/wave2-yellow.svg"
                alt="image"
                width="1"
                height="1"
                layout="fixed"
              />
              <IntervalImage arrImage={image} />
            </div>
          </div>
          <div className="w-full px-10 md:w-1/2">
            <Article content={content} />
            <Button aria-label="start">ເລີ່ມຕົ້ນໃຊ້ງານ</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
