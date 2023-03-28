import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Post(props) {
  return (
    <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
      <Link href="/Blog">
        <a className="relative transition-all block mb-6 overflow-hidden rounded-md">
          <Image
            className="w-full transition ease-in-out hover:scale-125 duration-700"
            src={props.img}
            alt="image"
            onClick={props.onClick}
          />
        </a>
      </Link>
      <p className="mb-2 font-medium text-coolGray-900 dark:text-white">
        {props.date}
      </p>
      <Link href="/Blog">
        <a className="inline-block mb-4 text-2xl font-bold leading-tight text-coolGray-900 dark:text-white hover:text-coolGray-900 hover:underline">
          {props.detail}
        </a>
      </Link>
      <p className="mb-4 text-base font-medium md:text-lg text-coolGray-900 dark:text-white">
        {props.des}
      </p>
    </div>
  );
}
