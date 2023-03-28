import React from "react";
import classNames from "classnames";
import Link from "next/link";

export default function InvertedButton(props) {
  const { className, children } = props;
  return (
    <Link href='/Login'>
      <a
        className={classNames(
          "ml-2 rounded inline-block px-2 py-2 text-sm font-medium leading-5 text-coolGray-900 dark:text-white first-line focus:ring-opacity-50 focus:ring-2 focus:ring-yellow-500",
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
}
