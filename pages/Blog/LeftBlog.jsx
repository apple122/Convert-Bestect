import React from "react";
const LeftBlog = (props) => {
  return (
    <div>
      <section className="py-10 md:py-10">
        <div className="container px-4 mx-auto">
          <div className="md:max-w-2xl mx-auto mb-12 text-center">
            <div className="mb-4 text-2xl.... text-coolGray-900 dark:text-white font-bold tracking-tighter">
              {props.title}
            </div>
          </div>
          <div className="mb-10 mx-auto max-w-max overflow-hidden rounded-lg">
            <img src={props.img} alt="img" />
          </div>
          <div className="md:max-w-3xl mx-auto">
            <p className="pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {props.p1}
            </p>
            <p className="pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {props.p2}
            </p>
            <p className="pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {props.p3}
            </p>
            <p className="pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {props.p4}
            </p>
            <p className="pb-5 text-2xl md:text-2xl font-bold text-coolGray-900 dark:text-white border-coolGray-100">
              {props.p5}
            </p>
            <p className="pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {props.p6}
            </p>
            <p className="pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {props.p7}
            </p>
            <p className="pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {props.p8}
            </p>
            <p className="border-b pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {props.p9}
            </p>
            <div className="my-4 text-2xl md:text-2xl font-semibold text-coolGray-900 dark:text-white">
              {props.p10}
            </div>
            <p className="pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {props.p11}
            </p>
            <p className="pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {<span className="font-bold">{props.bold}</span>}
              {props.des}
            </p>
            <p className="pb-5 text-lg md:text-xl font-medium text-coolGray-900 dark:text-white border-coolGray-100">
              {props.supdes}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LeftBlog;
