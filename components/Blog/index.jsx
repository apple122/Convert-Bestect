import React from "react";
// import Post from "../../components/common/Post";
// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { actBlogdetail } from "../../redux/actions/conterActions";
import Link from "next/link";

const index = (props) => {
  // const dispatch = useDispatch();
  const data = [
    {
      img: "flex-ui-assets/images/blog/BOPIS.webp",
      id: "1",
      build_img: "flex-ui-assets/images/blog/logoblog.png",
      name: "ປອ ສີລິວັນໄຊ ເພັດສຸວັນ",
      degree: "ICT Advisor",
      date: "16 May 2022",
      detail:
        "Model ທຸລະກິດຂະຫນາດນ້ອຍ ທີ່ໃຊ້ເຄື່ອງມືໃນການຂາຍອອນລາຍ.",
      des: "ພວກ​ເຮົາ​ທຸກ​ຄົນ​ໄດ້​ປະ​ສົບ​ກັບ​ຄວາມ​ວຸ່ນ​ວາຍ​ຂອງ​ຂະ​ບວນ​ການ​ຮັບ​ຫຼື​ການ​ຈັດ​ສົ່ງ​ຫຼາຍ​, ເຄື່ອງມືຕິດຕາມ ແລະ ຂໍ້ມູນທີ່ເລິກເຊີ່ງ...",
      list: [
        {
          title:
            "ເປັນຫຍັງ BOPIS, BOSS ແລະ BORIS ຈື່ງມີຄວາມສຳຄັນຕໍ່ປະສົບການຂອງລູກຄ້າ",
          content: [
            {
              __component: "Text",
              text: `<p>ຜູ້ບໍລິໂພກໃນມື້ນີ້ມີຄວາມສາມາດໃນການຊື້ເກືອບທຸກຢ່າງ, ທຸກແຫ່ງຫົນ, ທຸກເວລາ ແລະ ໃນທົ່ວອຸປະກອນຕ່າງໆ. ຜູ້ຂາຍທີ່ປະສົບຜົນສໍາເລັດກັບຜູ້ບໍລິໂພກເຮັດແນວນັ້ນເພາະວ່າພວກເຂົາສາມາດສົ່ງປະສົບການລູກຄ້າ omnichannel ທີ່ບໍ່ມີຮອຍຕໍ່. ແຕ່ມັນຫມາຍຄວາມວ່າແນວໃດສໍາລັບພໍ່ຄ້າ?</p>`,
            },
            {
              __component: "Text",
              text: `<p>ການໃຫ້ປະສົບການລູກຄ້າ omnichannel ເລີ່ມຕົ້ນດ້ວຍການຄິດກ່ຽວກັບການເດີນທາງຂອງລູກຄ້າແບບປົກກະຕິ ແລະ ສ້າງທັດສະນະຂອງລູກຄ້າດຽວ. ເຈົ້າຈະເພີ່ມປະສົບການຂອງລູກຄ້າໃຫ້ສູງສຸດ ແລະ ຮັກສາທຸກໆການໂຕ້ຕອບກັບທຸລະກິດຂອງທ່ານໃຫ້ສອດຄ່ອງ. ມັນປອດໄພ ແລະ ງ່າຍແນວໃດ?</p>`,
            },
            {
              __component: "Text",
              text: `<p>ຄໍາຕອບມັກຈະສັບສົນ. ແຕ່ມັນເລີ່ມຕົ້ນດ້ວຍການສ້າງພື້ນຖານສໍາລັບການດໍາເນີນງານຂອງຜູ້ຄ້າ. Omnichannel ຫມາຍເຖິງການໃຫ້ລູກຄ້າສະດວກໃນການຊື້ເຄື່ອງ. ການ​ຮັບ​ ແລະ​ ກັບ​ຄືນ​ມາ​ໄດ້​ງ່າຍ​ການ​ດໍາ​ເນີນ​ງານ​ ແລະ ໃຫ້ແນ່ໃຈວ່າລູກຄ້າຂອງທ່ານໄດ້ຮັບການປົກປ້ອງ ແລະ ມີຄວາມຮູ້ສືກປອດໄພໃນການເຮັດທຸລະກິດກັບທ່ານບໍ່ວ່າຈະຢູ່ໃສ, ວິທີການຫຼືເວລາທີ່ພວກເຂົາຊື້ເຄື່ອງ.</p>`,
            },
            {
              __component: "Text",
              text: `<p>ແນວຄວາມຄິດການຄ້າ omnichannel ທີ່ສໍາຄັນປະກອບມີ: ຊື້ອອນໄລນ໌, Pick Up ໃນຮ້ານ (BOPIS); ຊື້ອອນໄລນ໌, ສົ່ງໄປເກັບຮັກສາ (BOSS); ແລະ ຊື້ຄືນອອນໄລນ໌ໃນຮ້ານ (BORIS)</p>`,
            },
            {
              __component: "Text",
              text: `<p><strong>ເປັນຫຍັງ (ແລະ) Omnichannel ຈື່ງສຳຄັນຕໍ່ຜູ້ຄ້າ?</strong></p><p><br></p><p>ເພື່ອເຂົ້າໃຈ omnichannel ໃນມື້ນີ້, ການເບິ່ງຄືນສັ້ນໆຈະເປັນປະໂຫຍດ. ການຊື້ເຄື່ອງແມ່ນງ່າຍຂື້ນຫຼາຍ: ປະສົບການຂອງລູກຄ້າແມ່ນສອດຄ່ອງຫຼາຍຂື້ນແລະການບໍລິການລູກຄ້າແມ່ນງ່າຍຂື້ນເພາະວ່າເກືອບທຸກໆການໂຕ້ຕອບລູກຄ້າທີ່ສໍາຄັນເກີດຂື້ນໃນຫນ້າຮ້ານຈິ່ງແບບເຫັນຫນ້າກັນ.</p>`,
            },
            {
              __component: "Text",
              text: `<p>ເຕັກໂນໂລຊີຢ່າງຕໍ່ເນື່ອງປ່ຽນແປງສົມຜົນກັບວິທີການຂາຍໃຫມ່ເຊັ່ນ: ຄໍາສັ່ງທາງໄປສະນີ. ຄໍາ​ສັ່ງ​ໂທລະ​ສັບ​ ແລະ e-commerce ພໍ່ຄ້າໄດ້ສ້າງທີມງານທີ່ມີຄວາມຊໍານານໃຫມ່ຍ້ອນວ່າເຕັກໂນໂລຢີໃຫມ່ສາມາດປະຕິບັດໄດ້ສໍາລັບການຊື້ເຄື່ອງ.</p>`,
            },
            {
              __component: "Text",
              text: `<p>ຢູ່ຄົນດຽວໃນຊ່ອງທາງການຄ້າຕ່າງໆ ຕ້ອງ​ຮ່ວມ​ມື ລູກຄ້າບໍ່ໄດ້ສໍາຜັດກັບຍີ່ຫໍ້ເປັນຊ່ອງທາງ. ແຕ່ພວກເຂົາສາມາດແຕະຕ້ອງພວກເຂົາທັງຫມົດ. ຄືກັນກັບເກົ້າອີ້ທີ່ຕ້ອງການສີ່ຂາ. ພໍ່ຄ້າຕ້ອງສ້າງປະສົບການຜ່ານຊ່ອງທາງຕ່າງໆ. ດ້ວຍການສະຫນັບສະຫນູນລູກຄ້າທີ່ສອດຄ່ອງ, ການຄ້າ omnichannel ແມ່ນແຕກຕ່າງຈາກເກົ້າອີ້ທໍາມະດາ. ເຖິງແມ່ນວ່າອົງປະກອບທີ່ສໍາຄັນແມ່ນບໍ່ສາມາດໃຊ້ໄດ້ຊົ່ວຄາວຫຼືຖ້າຄວາມຕ້ອງການປ່ຽນຈາກຊ່ອງທາງຫນື່ງໄປຫາອີກຊ່ອງທາງຫນື່ງ.</p>`,
            },
            {
              __component: "Text",
              text: `<p>ຜູ້ຂາຍທີ່ສາມາດສ້າງປະສົບການລູກຄ້າ omnichannel ທີ່ຍິ່ງໃຫຍ່ສາມາດສ້າງຄວາມສັດຊື່ຂອງລູກຄ້າໄດ້ໄວ. ມັນມີຄວາມສໍາຄັນແນວໃດ? ໂດຍສະເພາະໃນໄລຍະການແຜ່ລະບາດຂອງ COVID-19, ການພັດທະນາຄວາມສາມາດໃນການຊື້ຂາຍ omnichannel ບໍ່ແມ່ນສິ່ງດຽວທີ່ມັນຄວນຈະມີ. ແຕ່ເປັນສິ່ງທີ່ຕ້ອງມີ</p>`,
            },
            {
              __component: "Text",
              text: `<p><strong>The killer Bs - BOBIS, BOSS and BORIS</strong></p>
              <p><br></p>
              <p>BOBIS, BOSS, ແລະ BORIS ອາດຈະເປັນຊື່ຂອງເລື່ອງຕະຫລົກສະຖານະການໃຫມ່. ແຕ່ສິ່ງເຫຼົ່ານີ້ເປັນຕົວແທນຂອງເຄື່ອງມືປະຕິບັດທີ່ສໍາຄັນຂອງການຄ້າ omnichannel ທີ່ປະກອບສ່ວນເຂົ້າໃນຄວາມສໍາເລັດຂອງຜູ້ຄ້າ.</p>`,
            },
            {
              __component: "RichText",
              richText: `<p><strong>Buy online, pick up in store (BOPIS) </strong>ມັນໄດ້ກາຍເປັນຄວາມສະດວກສະບາຍທີ່ຫນ້າສົນໃຈສໍາລັບຜູ້ບໍລິໂພກກ່ອນປີ 2020. ນັ້ນແມ່ນຄວາມເຂົ້າໃຈເພາະວ່າມັນຕອບສະຫນອງຄວາມຕ້ອງການຂອງລູກຄ້າທີ່ຊັດເຈນ. BOPIS ປະສົມປະສານທີ່ດີທີ່ສຸດຂອງອີຄອມເມີຊແລະໃນຮ້ານ. ໃຫ້ລູກຄ້າມີຄວາມສະດວກສະບາຍໃນການຄົ້ນຫາ, ການເລືອກແລະຈ່າຍເງິນສໍາລັບການເຮັດທຸລະກໍາອອນໄລນ໌. ໃນຂະນະທີ່ໄດ້ຮັບຜົນປະໂຫຍດຈາກທັນທີຂອງການໄປຢ້ຽມຢາມຮ້ານ.</p>
              <p><br></p>
              <p>ສໍາລັບພໍ່ຄ້າໃນຮ້ານຈໍານວນຫຼາຍ, ການຊື້ອອນໄລນ໌, ໄດ້ຮັບໃນຮ້ານຈາກສິ່ງທີ່ຄວນຈະເປັນໃນໄລຍະການລະບາດ. ເມື່ອຄໍາວ່າ "ໃນຮ້ານ" ຖືກແປເປັນ "ຂ້າງຄຽງ" ຕາມຄວາມຕ້ອງການ, BOPIS ອະນຸຍາດໃຫ້ຜູ້ຄ້າສະຫນອງປະສົບການພິເສດສໍາລັບ ລູກຄ້າ, ເຊິ່ງສະຫນອງຄວາມສະດວກສະບາຍທີ່ມີຄວາມຍືດຫຍຸ່ນ. ດ້ວຍຄວາມສະດວກສະບາຍ, ຄວາມຈໍາເປັນ, ຫຼືທັງສອງຢ່າງ.</p>
              `,
            },
            {
              __component: "RichText",
              richText: `<p><strong>Buy online, ship to store (BOSS) </strong>ສໍາລັບພໍ່ຄ້າໃນຮ້ານຈໍານວນຫຼາຍ, ການຊື້ອອນໄລນ໌, ໄດ້ຮັບໃນຮ້ານຈາກສິ່ງທີ່ຄວນຈະເປັນໃນໄລຍະການລະບາດ. ເມື່ອຄໍາວ່າ "ໃນຮ້ານ" ຖືກແປເປັນ "ຂ້າງຄຽງ" ຕາມຄວາມຕ້ອງການ, BOPIS ອະນຸຍາດໃຫ້ຜູ້ຄ້າສະຫນອງປະສົບການພິເສດສໍາລັບ ລູກຄ້າ, ເຊິ່ງສະຫນອງຄວາມສະດວກສະບາຍທີ່ມີຄວາມຍືດຫຍຸ່ນ. ດ້ວຍຄວາມສະດວກສະບາຍ, ຄວາມຈໍາເປັນ, ຫຼືທັງສອງຢ່າງ.</p>
              <p><br></p>
              <p>ໃນເວລາທີ່ບໍ່ມີຜະລິດຕະພັນຢູ່ໃນສະຖານທີ່ທີ່ລູກຄ້າຕ້ອງການ ມັນເປັນສິ່ງຈໍາເປັນທີ່ຈະປິດຊ່ອງຫວ່າງນັ້ນ. ການຊື້ອອນໄລນ໌, ການຂົນສົ່ງໄປຮ້ານປັບປຸງການຄຸ້ມຄອງສິນຄ້າຄົງຄັງໂດຍໃຊ້ສິນຄ້າຄົງຄັງໃນຮ້ານທັງຫມົດ. BOSS ຊ່ວຍສ້າງແລວທາງທີ່ບໍ່ມີທີ່ສິ້ນສຸດໃນທັດສະນະຂອງລູກຄ້າ. ສິນຄ້າຄົງຄັງຈະບໍ່ໝົດ.</p>`,
            },
            {
              __component: "RichText",
              richText: `<p><strong>Buy online, return in store (BORIS) </strong>ມັນອະນຸຍາດໃຫ້ຜູ້ຄ້າສາມາດສະຫນອງການເດີນທາງຂອງລູກຄ້າຢ່າງກວ້າງຂວາງ. ການເພີ່ມຂື້ນຂອງອີຄອມເມີຊໃນອັດຕາສ່ວນຂອງການຊື້ທັງຫມົດຫມາຍຄວາມວ່າຜົນຕອບແທນແມ່ນເປັນເລື່ອງປົກກະຕິຫຼາຍກ່ວາເກົ່າ. ຕົວຢ່າງທົ່ວໄປແມ່ນເຄື່ອງນຸ່ງຫົ່ມທີ່ລູກຄ້າອາດຈະມັກແຕ່ບໍ່ຕອບສະຫນອງຄວາມຄາດຫວັງຂອງພວກເຂົາໃນເວລາຊື້ເຄື່ອງອອນໄລນ໌. ການຊື້ອອນໄລນ໌, ການກັບຄືນໃນຮ້ານຈະຊ່ວຍປິດວົງຈອນ. ເຮັດໃຫ້ມັນງ່າຍຂື້ນໃນການກັບຄືນ ແລະປິດຊ່ອງຫວ່າງສໍາລັບຄວາມພໍໃຈຂອງລູກຄ້າ BORIS ເປັນ win-win ຄລາສສິກທີ່ປະສົບການໃນຮ້ານໄດ້ຮັບການປັບປຸງໃນຂະນະທີ່ເຮັດໃຫ້ການດໍາເນີນງານຂອງຮ້ານຄ້າມີປະສິດທິພາບຫຼາຍຂື້ນ.</p>
              <p><br></p>
              <p>ພ້ອມທີ່ຈະຮຽນຮູ້ເພີ່ມເຕີມກ່ຽວກັບວິທີທີ່ທ່ານສາມາດສົ່ງປະສົບການ omnichannel ທີ່ບໍ່ມີຮອຍຕໍ່ໃຫ້ແກ່ລູກຄ້າຂອງທ່ານ? ດາວໂຫລດແນວໂນ້ມການຊື້ເຄື່ອງທີ່ຜູ້ຄ້າປີກທຸກຄົນຕ້ອງຮູ້ ຄໍາແນະນໍາທີ່ສໍາຄັນຂອງ Worldpay ຈາກ FIS® ກ່ຽວກັບແນວໂນ້ມທີ່ມີຜົນກະທົບຕໍ່ການຂາຍຍ່ອຍໃນມື້ນີ້.</p>
              `,
            },
          ],
        },
      ],
    },
    {
      img: "flex-ui-assets/logos/shoe_choose.webp",
      id: "2",
      name: "ປອ ສິລິວັນໄຊ ເພັດສຸວັນ",
      degree: "ICT Advisor",
      build_img: "flex-ui-assets/images/blog/logoblog.png",
      date: "29 Jun 2022",
      detail: `5 ເທັກນິກໃນການເລືອກ " ເກີບຜ້າໃບ " ຄູ່ໃຈຂອງທ່ານ`,
      des: `ສຳລັບໃຜທີ່ກຳລັງຈະເລືອກຊື້ເກີບຄູ່ໜື່ງໄວ້ອອກກຳລັງກາຍ ຫືຼວ່າ ໃສ່ເດີນທາງໄປທ່ອງທ່ຽວ ມື້ນີ້ທາງຮ້ານ Bamboo BI ຂໍນຳສະເໜີ 5ເທັກນິກ ເລືອກ "ເກີບຜ້າໃບ" ຄູ່ໃຈ ໃຫ້ທ່ານໄດ້ລອງໃຊ້ໃນການເລືອກເກີບຜ້າໃບໃຫ້ແທດເໝາະກັບໂຕທ່ານເອງ...`,
      list: [
        {
          title: `ສຳລັບໃຜທີ່ກຳລັງຈະເລືອກຊື້ເກີບຈັກຄູ່ໜື່ງໄວ້ອອກກຳລັງກາຍ ຫືຼວ່າ ໃສ່ເດີນທາງໄປທ່ອງທ່ຽວມື້ນີ້ທາງຮ້ານ Bamboo BI ຂໍນຳສະເໜີ 5ເທັກນິກ ເລືອກ "ເກີບຜ້າໃບ" ຄູ່ໃຈ ໃຫ້ທ່ານໄດ້ລອງໃຊ້ໃນການເລືອກເກີບຜ້າໃບໃຫ້ເທດເໝາະກັບໂຕທ່ານເອງ.`,
          content: [
            {
              __component: "Img",
              image: `<img src='flex-ui-assets/images/blogdetail/shoe1.png' />`,
            },
            {
              __component: "Img",
              image: `<img src='flex-ui-assets/images/blogdetail/shoe2.png' />`,
            },
            {
              __component: "Img",
              image: `<img src='flex-ui-assets/images/blogdetail/shoe3.png' />`,
            },
            {
              __component: "Img",
              image: `<img src='flex-ui-assets/images/blogdetail/shoe4.png' />`,
            },
            {
              __component: "Img",
              image: `<img src='flex-ui-assets/images/blogdetail/shoe5.png' />`,
            },
            {
              __component: "Img",
              image: `<img src='flex-ui-assets/images/blogdetail/shoe6.png' />`,
            },
          ],
        },
      ],
    },
    {
      img: "flex-ui-assets/images/blog/blog3.webp",
      id: "3",
      name: "ທ້າວ ນ້ອຍ ວິໄລຈິດ",
      degree: "Programmer",
      build_img: "flex-ui-assets/images/blog/logoblog1.jpeg",
      date: "2 July 2022",
      detail: "Demo ວິດີໂອພິມບິນສິນຄ້າໂດຍຜ່ານເວັບໄຊ Bamboo BI",
      des: "ການສາທິດ Preview ລະບົບເລືອກຊື້ ແລະ ພິມບີນຜ່ານເວັບໄຊ...",
      list: [
        {
          title:
            "ການສາທິດ Preview ວິດີໂອສາທິດລະບົບເລືອກຊື້ ແລະ ພີມບີນຜ່ານເວັບໄຊ",
          content: [
            {
              __component: "Video",
              video: "flex-ui-assets/images/blog/video-shoe.mp4",
            },
          ],
        },
      ],
    },
  ];
  return (
    <></>
    // <section id="blog" className="py-16 md:py-24 lg:pb-52">
    //   <div className="container px-4 mx-auto  dark:text-white">
    //     <div data-aos="fade-up" className="flex flex-wrap items-center mb-16">
    //       <div className="w-full mb-8 md:w-3/4 md:mb-0">
    //         <span className="inline-block px-2 py-px mb-4 text-xs font-medium leading-5 text-coolGray-900 uppercase bg-yellow-500 dark:text-white rounded-full shadow-sm">
    //           Blog
    //         </span>
    //         <h3 className="mb-4 text-4xl font-bold leading-tight tracking-tighter md:text-5xl text-coolGray-900 dark:text-white">
    //           Facebook Post
    //         </h3>
    //         <p className="text-lg font-medium md:text-xl text-coolGray-900 dark:text-white">
    //           ໂດຍ Platform ພວກເຮົາ,
    //           ບົດຄວາມ ກ່ຽວກັບປະສົບການຂອງຜູ້ໃຊ້ອອນໄລນ໌ ແລະ ປະສົບການຜູ້ໃຊ້ອອນລາຍ ທີ່ແຕກໂຕນກັນ.
    //         </p>
    //       </div>
    //       <div className="w-full md:w-1/4">
    //         <a
    //           className="flex items-center justify-center px-4 py-2 ml-auto text-sm font-medium leading-5 bg-yellow-500 rounded-md text-coolGray-900 dark:text-white hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 md:max-w-max"
    //           href="#"
    //         >
    //           ເບິ່ງໂພສທັງໝົດ
    //         </a>
    //       </div>
    //     </div>
    //     <div data-aos="fade-up" className="flex flex-wrap -mx-4">
    //       {data.map((e, key) => (
    //         <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3" key={key}>
    //           <Link href="/">
    //             <a className="relative transition-all block mb-6 overflow-hidden rounded-md">
    //               <img
    //                 className="w-full transition ease-in-out hover:scale-125 duration-700"
    //                 src={e.img}
    //                 alt="image"
    //                 onClick={() =>
    //                   props.actBlogdetail({
    //                     blogdetails: {
    //                       date: e.date,
    //                       img: e.img,
    //                       des: e.des,
    //                       detail: e.detail,
    //                       list: e.list,
    //                       b_img: e.build_img,
    //                       id: e.id,
    //                       name: e.name,
    //                       degree: e.degree,
    //                       data: data,
    //                     },
    //                   })
    //                 }
    //               />
    //             </a>
    //           </Link>
    //           <p className="mb-2 font-medium text-coolGray-900 dark:text-white">
    //             {e.date}
    //           </p>
    //           <Link href="/Blog">
    //             <a className="inline-block mb-4 text-2xl font-bold leading-tight text-coolGray-900 dark:text-white hover:text-coolGray-900 hover:underline">
    //               {e.detail}
    //             </a>
    //           </Link>
    //           <p className="mb-4 text-base font-medium md:text-lg text-coolGray-900 dark:text-white">
    //             {e.des}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};
const mapDispatchToProps = {
  actBlogdetail,
};
const mapStateToProps = (state) => ({
  blogdetail: state,
});
export default connect(mapStateToProps, mapDispatchToProps)(index);
