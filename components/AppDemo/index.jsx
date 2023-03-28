import React from "react";
import Video from "../elements/common/Video";

export default function index() {
  return (
    <section
      id="application"
      className="py-24 transition-all bg-image-light dark:bg-image-dark"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <span
            data-aos="fade-up"
            className="inline-block px-2 py-px mb-4 text-xs font-medium leading-5 text-white bg-yellow-500 rounded-full shadow-sm"
          >
            Application
          </span>
          <div
            data-aos="fade-up"
            className="max-w-5xl mx-auto mb-10 text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-coolGray-900 dark:text-white"
          >
            ການຂາຍທີ່ຍິ່ງໃຫຍ່ເລີ່ມຕົ້ນດ້ວຍຮ້ານຄ້າອອນລາຍຂອງທ່ານ
          </div>
          <div data-aos="fade-up" className="relative mx-auto max-w-max">
            <img
              className="hidden md:block absolute w-5/12 transform -translate-y-1/2 top-1/2"
              src="flex-ui-assets/elements/cirlcle-pattern.svg"
              alt="image"
            />
            <img
              className="hidden md:block absolute w-5/12 transform -translate-y-1/2 -right-6 lg:-right-16 top-1/2 "
              src="flex-ui-assets/elements/cirlcle-pattern.svg"
              alt="image"
            />
            <Video
              src="flex-ui-assets/videos/ecom-mb.mp4"
              className="absolute z-20 w-5/6 -mt-1 transform -translate-x-1/2 -translate-y-1/2 p-7 left-1/2 top-1/2"
            />
            <img
              className="relative z-10"
              src="flex-ui-assets/elements/applications/macbook-video.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
