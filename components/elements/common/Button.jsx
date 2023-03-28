import React from "react";
import classNames from "classnames";
import Link from "next/link";

export default function Button(props) {
  const { className, children } = props;
  return (
    <Link href="/#join_us">
      <a
        className={classNames(
          "rounded inline-block px-2 py-2 text-sm font-medium leading-5 text-gray-700 bg-yellow-500 dark:text-coolGray-900 hover:bg-yellow-600 first-line focus:ring-opacity-50 focus:ring-2 focus:ring-yellow-500",
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
}
