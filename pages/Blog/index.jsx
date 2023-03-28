import React from "react";
import Link from "next/link";
import { actBlogdetail } from "../../redux/actions/conterActions";

import { Footer } from "../../components/Footer/Footer";
import Back2TopButton from "../../components/elements/common/Back2TopButton";
import { ThemeProvider } from "../../components/elements/Darkmode/ThemeContext";

import Navbar from "../../components/Hero/Navbar";
import { connect } from "react-redux";
import Parser from "../../components/elements/blog/Parser";
// import Preloader from "../../components/common/Preloader/Preloader";
import Image from "next/image";
function index(props) {
  //  const blogdetails = useSelector((state) => state.blogDetail);
  const content = props.blogdetail.blogdetail?.blogdetails?.list[0].content;
  return (
    <ThemeProvider>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
          <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
            <section className="py-10 md:py-10">
              <div className="container px-4 mx-auto">
                <div className="md:max-w-2xl mx-auto mb-12 text-center">
                  <div className="mb-4 text-2xl md:text-3xl leading-tight text-coolGray-900 dark:text-white font-bold tracking-tighter">
                    {props.blogdetail.blogdetail?.blogdetails?.list[0]?.title}
                  </div>
                </div>
                <div className="mb-10 mx-auto max-w-max overflow-hidden rounded-lg">
                  {props.blogdetail.blogdetail?.blogdetails?.img.length > 0 && (
                    <Image
                      src={props.blogdetail.blogdetail?.blogdetails?.img}
                      alt="image"
                      height={500}
                      width={850}
                    />
                  )}
                </div>
                <div className="md:max-w-3xl mx-auto ">
                  {content?.map((component, key) => (
                    <div key={key}>
                      <Parser component={component} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            {/* <RightBlog img="https://images.unsplash.com/photo-1658774697476-54ef5a297fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/> */}
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
                    {props.blogdetail.blogdetail?.blogdetails?.b_img.length >
                      0 && (
                      <Image
                        src={props.blogdetail.blogdetail?.blogdetails?.b_img}
                        alt="image"
                        height={200}
                        width={200}
                      />
                    )}
                  </div>
                </div>
                <div className="text-lg font-bold">
                  {props.blogdetail.blogdetail?.blogdetails?.name}
                </div>
                <div className="text-md text-gray-500 mb-10 font-normal">
                  {props.blogdetail.blogdetail?.blogdetails?.degree}
                </div>
                <div className="text-lg font-bold mb-3">
                  For More Information
                </div>
                {props.blogdetail.blogdetail?.blogdetails?.data?.map((e, key) =>
                  props.blogdetail.blogdetail?.blogdetails?.id === e.id ? (
                    ""
                  ) : (
                    <Link key={key} href="/Blog">
                      <a
                        onClick={() =>
                          props.actBlogdetail({
                            blogdetails: {
                              date: e.date,
                              img: e.img,
                              des: e.des,
                              detail: e.detail,
                              list: e.list,
                              b_img: e.build_img,
                              id: e.id,
                              data: props.blogdetail.blogdetail?.blogdetails
                                ?.data,
                            },
                          })
                        }
                        className="lg:flex justify-between p-3 hover:bg-gray-100"
                      >
                        <div>
                          <div className="flex">
                            <div className="avatar mr-3">
                              <div className="w-10 h-10 rounded-full">
                                {e.build_img.length > 0 && (
                                  <Image
                                    src={e.build_img}
                                    alt="image"
                                    height={200}
                                    width={200}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="mt-1 text-md font-normal text-gray-500">
                              {e.des}
                            </div>
                          </div>
                          <div className="mt-2 text-md font-bold">
                            {e.detail}
                          </div>
                        </div>
                        <div className="avatar">
                          <div className="w-24 h-24 rounded-xl">
                            {e.img.length > 0 && (
                              <Image src={e.img} alt="image" width={200} height={200} />
                            )}
                          </div>
                        </div>
                      </a>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Back2TopButton />
      {/* <Preloader/> */}
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  blogdetail: state?.blogdetail,
});
const mapDispatchToProps = {
  actBlogdetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
