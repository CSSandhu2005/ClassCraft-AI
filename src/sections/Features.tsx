"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import ProductImage from "@/assets/product-image.png";
import Image from "next/image";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-5xl font-smeibold text-center tracking-tighter">
          Elevate Your Teaching Style.
        </h2>
        <p className="text-white/70 text-center max-w-2xl mx-auto  mt-5">
          From small schools to Large Institutions, Our AI-Driven tool is
          revolutionizing the way Teachers approach teaching.
        </p>
        {tabs.map((tabData) => {
          return (
            <div key={tabData.title}>
              <DotLottiePlayer
                src={tabData.icon}
                className="h-5 w-5"
                autoplay
              />
              <div>{tabData.title}</div>
              {tabData.isNew && <div>new</div>}
            </div>
          );
        })}
        <Image src={ProductImage} alt="Product Image" />
      </div>
    </section>
  );
};
