import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const NotifySuccess = () => {
    toast.success("ທ່ານສົ່ງອີເມວສຳເລັດ, ພວກເຮົາຈະຕິດຕໍ່ກັບໃນໄວໆນີ້ ຂອບໃຈ", {
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
      .send("service_x4r3t3i", "template_mey9zwq", data, "E3KnpRYnuMd-bTd8g")
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>fullname</label>
        <input type="text" {...register("fullname")} />
        <label>lastname</label>
        <input type="text" {...register("lastname")} />
        <label>company</label>
        <input type="text" {...register("company")} />
        <label>email</label>
        <input type="text" {...register("email")} />
        <label>phone_number</label>
        <input type="text" {...register("phone_number")} />
        <input type="submit" value="Send" />
        <ToastContainer />
      </form>
    </>
  );
};

export default ContactUs;

