import React from "react";
import Article from "../elements/common/Article";
import Button from "../elements/common/Button";
import IntervalImage from "../elements/common/IntervalImage";

export default function LeftSide(props) {
  const { content, image } = props;
  return (
    <section className="overflow-hidden transition-all bg-white py-20 dark:bg-black bg-image-light dark:bg-image-dark">
      <div className="container px-4 mx-auto">
        <div
          data-aos="fade-up"
          className="flex flex-wrap -mx-4 lg:items-center"
        >
          <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
            <Article content={content} />
            <Button aria-label="start"> ເລີ່ມຕົ້ນໃຊ້ງານ </Button>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="relative overflow-hidden transition-all mx-auto md:mr-0 max-w-max">
              <img
                className="absolute z-10 w-4/12 text-yellow-400 opacity-80 -left-28 -top-24"
                src="flex-ui-assets/elements/blob.svg"
                alt="image"
                layout="responsive"
                width="500"
                height="500"
              />
              <img
                className="absolute z-10 w-4/12 text-blue-500 -right-7 -bottom-8"
                src="flex-ui-assets/elements/cirlcle-pattern.svg"
                alt="image"
                layout="responsive"
                width="500"
                height="300"
              />

              <IntervalImage arrImage={image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
