import React, { FC } from "react";
import Image from "next/image";

import { cn } from "../../../lib/utils";
import styles from "./Components.module.css";
import { images } from "../../assets";

export const Sidebar: FC = () => {
  const sidebarContent = cn("bg-primary-second", "p-5");

  return (
    <div className={styles.sidebarContainer}>
      <div className={sidebarContent}>
        {images.map((image, index) => {
          return (
            <div className={styles.sidebarDivImg} key={`${image.alt}-${index}`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
                className={styles.sidebarImg}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
