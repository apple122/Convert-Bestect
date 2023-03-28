import React from "react";

export default function index() {
  return (
    <>
      <section
        id='work'
        className="py-24 justify-center align-middle"
        style={{
          backgroundImage:
            'url("flex-ui-assets/images/testimonials/FAQ-background.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto ">
          <div className="p-auto backdrop-blur-1xl bg-black/50 rounded-tl-lg rounded-br-lg ">
            <div data-aos="fade-up" className="w-max">
              <div className="max-w-md m-auto text-center">
                <span className="px-1 py-px mb-1  dark:text-coolGray-900 rounded-full shadow-sm text-xl"></span>
                <h2 className="text-7xl text-yellow-500 font-medium leading-5 ">
                  ?
                </h2>
                <h2 className="my-6 mb-4 text-xl font-bold leading-tight tracking-tighter text-yellow-500 dark:text-coolGray-900 md:text-3xl">
                  ເປັນຫຍັງທ່ານຕ້ອງໃຊ້ Platform ຮ້ານຄ້າຂອງພວກເຮົາ ?
                </h2>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center my-10 -mx-4"
            >
              <div className="w-full px-4 mb-20 md:w-2/5 md:mb-0">
                <a className="flex flex-wrap w-full mb-10 text-left" href="#">
                  <div className="w-full mb-2 md:w-auto md:pr-10 md:mb-0">
                    <h3 className="mb-4 text-xl text-yellow-500 dark:text-coolGray-900 ">
                      ຫຼຸດຜ່ອນແຮງງານຂອງຜູ້ຊາຍ
                    </h3>
                    <p className="max-w-md text-xl  text-yellow-500 dark:text-coolGray-900">
                      ດ້ວຍແພລຕຟອຣ໌ມອີຄອມເມີຊຂອງພວກເຮົາງານຂອງທ່ານຈະສາມາດເຮັດໄດ້ຫນ່ອຍລົງ
                    </p>
                  </div>
                </a>
              </div>
              <div className="w-full px-4 md:w-2/5">
                <div className="w-full mb-2 md:w-auto md:pr-10 md:mb-0">
                  <h3 className="text-xl  text-yellow-500 dark:text-coolGray-900 text-center">
                    ລູກ​ຄ້າ​ສາ​ມາດ​ຊື້​ສິນ​ຄ້າ​ຂອງ​ທ່ານ​ບໍ່​ຢຸດ​ເຊົາ​ໂດຍ​ຜ່ານ​ຮ້ານ​ອອນ​ໄລ​ນ​໌
                    24/7
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
