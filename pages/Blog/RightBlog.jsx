import Link from "next/link";
import React from "react";
const RightBlog = (props) => {
  return (
    <div className="py-10 md:py-10 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="input-group mb-10">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={props.img} alt="image" />
          </div>
        </div>
        <div className="text-lg font-bold">Mr Noy Vilaijid</div>
        <div className="text-md text-gray-500 mb-10 font-normal">
          Programming | Growth Hacking | Writing | Side Hustle
        </div>
        <div className="text-lg font-bold mb-3">For More Information</div>
        <Link href="/">
          <a className="lg:flex justify-between p-3 hover:bg-gray-100">
            <div>
              <div className="flex">
                <div className="avatar mr-3">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src="https://placeimg.com/193/193/people"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="mt-1 text-md font-normal text-gray-500">
                  Do you know about these open-source python Libraries?
                </div>
              </div>
              <div className="mt-2 text-md font-bold">
                7 Python Libraries Every Back-End Developer Should Know
              </div>
            </div>
            <div className="avatar">
              <div className="w-24 h-24 rounded-xl">
                <img src="https://placeimg.com/194/194/people" alt="image" />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default RightBlog;
