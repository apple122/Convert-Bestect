import Link from "next/link";
import React from "react";
import Image from "next/image";
import IMG from "../../../public/flex-ui-assets/logos/Logo_bestech.png";

export default function Logo(props) {
  return (
    <Link href="/">
      <a className="flex items-center gap-2">
        <Image
          onClick={props.onClick}
          src={IMG}
          width="50"
          height="50"
          alt="img"
          layout="fixed"
          priority="true"
        />
      </a>
    </Link>
  );
}
