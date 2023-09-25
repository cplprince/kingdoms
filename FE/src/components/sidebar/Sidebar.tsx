import React, { FC } from "react";
import Image from "next/image";

import { cn } from "../../../lib/utils";
import styles from "./Components.module.css";

type Props = {
  src: string;
  alt: string;
};

export const Sidebar: FC<Props> = ({ src, alt }) => {
  const sidebarContent = cn("bg-primary-second p-5");
  const sidebarDivImg = cn(styles.sidebarDivImg);
  const sidebarContainer = cn(styles.sidebarContainer);
  const sidebarImg = cn(styles.sidebarImg);

  return (
    <div className={sidebarContainer}>
      <div className={sidebarContent}>
        <div onClick={() => console.log(alt)} className={sidebarDivImg}>
          <Image
            src={src}
            alt={alt}
            width={100}
            height={100}
            className={sidebarImg}
          />
        </div>
      </div>
    </div>
  );
};
