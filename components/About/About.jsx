import React from "react";
import Image from "next/image";
export const About = () => {
  return (
    <div id="about">
      <section className="py-24 md:pb-28 text-coolGray-900 dark:text-white px-5">
        <div className="container px-4 mx-auto">
          <div data-aos="fade-up" className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
              <div className="relative transition-all h-full overflow-hidden max-w-max mx-auto rounded-md">
                <Image
                  src="/flex-ui-assets/gif/84565-about-us.gif"
                  alt="image"
                  width={450}
                  height={450}
                  className="cursor-pointer transition ease-in-out hover:scale-125 duration-700"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <span className="text-primary mb-4 block text-lg font-semibold dark:text-white">
                About Us
              </span>
              <div className="relative pt-12 pb-6 sm:p-6 mb-8">
                <div className="relative">
                  <p className="tracking-tighter">
                    ຄວາມກ້າວໜ້າຂອງສັງຄົມທີ່ພັດທະນາຂື້ນມາເລືອຍໆເຮັດໃຫ້ຫຼາຍໆທຸລະກິດ ຫຼື ຫຼາຍພາກສ່ວນຕ້ອງການຄວາມສະກວດ
                    ໃນການນຳ Software ເພືອໃຫ້ການເຮັດວຽກດຳເນີນໄປຢ່າງວ່ອງໄວ, ລົດບັນຫາຄວາມຜິດພາດ ແລະ ປະສິດທິພາບ
                    ຂອງວຽກງານມີຫຼາຍຂື້ນ ດັ່ງນັ້ນພວກເຮົາຈືງພັດທະນາໂດຍເນັ້ນໃສ່ການພັດທະນາໃຫ້ບໍ ລິການພັດທະນາ Software,
                    Application, Website, ນຳເອົາ Software ທີ່ມີຄຸນນະພາບສູງມາໃຫ້ບໍລິການພ້ອມທັ້ງ ໃຫ້ຄຳປືກສາດ້ວຍລາຄາທີ່ເປັນມິດ
                    ເພືອຕອບສະໜອງຄວາມ ຕ້ອງການ ແລະ ອຳນວຍຄວາມສະດວກ ໃຫ້ແກ່ມະນຸດ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
