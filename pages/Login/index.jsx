import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
export default function index() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");
  const [loading, setLoading] = useState(false);
  const refUsername = useRef();
  const refPassword = useRef();
  const router = useRouter();
  const Clear = () => {
    setUserName("");
    setPassword("");
    setValidate("");
  };
  const toastOption = {
    autoClose: 2000,
    pauseOnHover: true,
    position: "top-center",
  };
  const Login = async () => {
    if (userName === "") {
      setValidate("ອີເມລຂອງທ່ານບໍ່ຄວນຫວ່າງເປົ່າ !");
      refUsername.current?.focus();
    } else if (password === "") {
      setValidate("ລະຫັດຂອງທ່ານບໍ່ຄວນຫວ່າງເປົ່າ !");
      refPassword.current?.focus();
    } else {
      setLoading(true);
      axios
        .post(
          "http://inventory.localhost:8000/api/user/login/",
          {
            username: userName,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((result) => {
          setLoading(false);
          var decoded = jwt_decode(result.data.access);
          localStorage.setItem("token_access", JSON.stringify(result.data));
          localStorage.setItem("user_permission", JSON.stringify(decoded));
          var user_permission = localStorage.getItem("user_permission");
          var permission = JSON.parse(user_permission);
          // console.log(permission);
          // router.push("/Admin").then(()=>Clear());
        })
        .catch((err) => {
          setLoading(false);
          setValidate("");
          if (err.response.status === 403) {
            toast.error(`ສິດທິຜູ້ໃຊ້ບໍ່ຖືກຕ້ອງ !`, toastOption);
          } else if (err.response.status === 401) {
            toast.error(
              "ຂໍອະໄພ ! UserName Or Password ບໍ່ຖືກຕ້ອງ",
              toastOption
            );
          } else {
            toast.error(`ມີບາງຢ່າງຜິດພາດ:  ${err}`, toastOption);
          }
        });
    }
  };

  useEffect(() => {
    refUsername.current?.focus();
  }, []);
  return (
    <div>
      <ToastContainer />
      <section className="text-coolGray-900 dark:text-white flex h-screen justify-center items-center">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-2 text-center">
              <Link href="/">
                <a className="inline-block mb-1">
                  <img
                    className="h-16"
                    src="flex-ui-assets/logos/bamboobi.webp"
                    alt="img"
                  />
                </a>
              </Link>
              <h3 className="mb-1 text-2xl">ເຂົ້າສູ່ລະບົບ</h3>
              <p className="text-lg text-coolGray-500">
                ເລີ່ມຕົ້ນທົດລອງໃຊ້ງານເລີຍ
              </p>
            </div>
            <form>
              <div className="mb-4">
                <label
                  className={`block ${
                    validate === "ອີເມລຂອງທ່ານບໍ່ຄວນຫວ່າງເປົ່າ !"
                      ? "text-red-500"
                      : "text-coolGray-800"
                  } text-1xl`}
                >
                  ອີເມລຂອງທ່ານ
                </label>
                <input
                  className={`${
                    validate === "ອີເມລຂອງທ່ານບໍ່ຄວນຫວ່າງເປົ່າ !"
                      ? "border-red-500"
                      : ""
                  } border outline-none rounded-md w-full p-2`}
                  autoFocus
                  onChange={(e) => setUserName(e.target.value)}
                  type="email"
                  value={userName}
                  ref={refUsername}
                />
              </div>
              <div className="my-4">
                <label
                  className={`block ${
                    validate === "ລະຫັດຂອງທ່ານບໍ່ຄວນຫວ່າງເປົ່າ !"
                      ? "text-red-500"
                      : "text-coolGray-800"
                  } text-1xl`}
                >
                  ລະຫັດຂອງທ່ານ
                </label>
                <input
                  className={`${
                    validate === "ລະຫັດຂອງທ່ານບໍ່ຄວນຫວ່າງເປົ່າ !"
                      ? "border-red-500"
                      : ""
                  } border outline-none rounded-md w-full p-2`}
                  autoFocus
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  ref={refPassword}
                />
              </div>
              <div className="text-center mb-1 text-red-500">{validate}</div>
              <button
                disabled={loading ? true : false}
                type="button"
                onClick={() => Login()}
                className={`
                ${loading ? "cursor-not-allowed disabled:opacity-50" : ""}
                bg-yellow-500 hover:bg-yellow-600 text-white flex mr-2 justify-center outline-none rounded-md p-2 w-full mb-2`}
              >
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-6 h-6 animate-spin text-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : null}
                {loading ? "" : "ຕົກລົງ"}
              </button>
              <div className="text-center">
                <span className="text-base font-medium">
                  ຍັງບໍ່ມີລະຫັດເທື່ອ?
                </span>
                <a
                  className="inline-block text-base font-medium text-yellow-500 hover:text-yellow-600 hover:underline"
                  href="/#join_us"
                >
                  ລົງທະບຽນ
                </a>
                <Link href="/">
                  <a
                    className="tooltip flex justify-center"
                    data-tip="ກັບໄປຫນ້າຫລັກ"
                  >
                    <img
                      className="h-8"
                      src="flex-ui-assets/logos/previous.png"
                      alt="img"
                    />
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
