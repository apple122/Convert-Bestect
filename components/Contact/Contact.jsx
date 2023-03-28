import React from "react";
import Contact_svg from "./Contact.svg";
import Contact_title from "./Contact.title";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const NotifySuccess = () => {
    toast.success("ທ່ານສົ່ງອີເມວສຳເລັດ, ພວກເຮົາຈະຕິດຕໍ່ກັບໃນໄວໆນີ້ ຂໍຂອບໃຈ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const NotifyError = () => {
    toast.error("ທ່ານສົ່ງອີເມວບໍ່ສຳເລັດ !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const onSubmit = (data) => {
    emailjs
      .send("service_rq2p5ce", "template_xtkyzyj", data, "1LVZhZG2Sioti6qzu")
      .then(
        (result) => {
          NotifySuccess();
          console.log(result.text);
        },
        (error) => {
          NotifyError();
          console.log(error.text);
        }
      );
    reset();
  };
  return (
    <>
      <section
        className="relative z-10 overflow-hidden lg:px-0 px-10 dark:bg-black bg-white py-20 lg:py-[120px]"
        id="contact"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <Contact_title />
            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg dark:bg-gray-800 bg-white p-8 shadow-lg sm:p-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6 dark:text-white text-black text-[32px] font-bold text-center">
                    ຕິດຕໍ່ຫາເຮົາ
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="ຊື່: ......"
                      {...register("fullname")}
                      className="text-body-color border-[f0f0f0] dark:text-black dark:bg-gray-200 focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="ນາມສະກຸນ: ......"
                      {...register("lastname")}
                      className="text-body-color border-[f0f0f0] dark:text-black dark:bg-gray-200 focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="ອົງກອນ: ......"
                      {...register("company")}
                      className="text-body-color border-[f0f0f0] dark:text-black dark:bg-gray-200 focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="number"
                      placeholder="ເບີໂທ: ......"
                      {...register("phone_number")}
                      className="text-body-color border-[f0f0f0] dark:text-black dark:bg-gray-200 focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="ອີເມລ: ......"
                      {...register("email")}
                      className="text-body-color border-[f0f0f0] dark:text-black dark:bg-gray-200 focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-primary border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                      required
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <Contact_svg />
              </div>
            </div>
          </div>
        </div>
      </section>
              <ToastContainer />
    </>
  );
}
