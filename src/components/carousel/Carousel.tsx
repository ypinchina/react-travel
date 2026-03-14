import React from "react";
import { Carousel as AntdCarousel, Image } from "antd";
import styles from "./Carousel.module.css";
import Image1 from "../../assets/images/carousel_1.jpg";
import Image2 from "../../assets/images/carousel_2.jpg";
import Image3 from "../../assets/images/carousel_3.jpg";
export const Carousel: React.FC = () => {
  return (
    <AntdCarousel autoplay className={styles.slider}>
      <Image src={Image1}></Image>
      <Image src={Image2}></Image>
      <Image src={Image3}></Image>
    </AntdCarousel>
  );
};
