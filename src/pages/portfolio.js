import Logo from "../../public/assets/svg/darklogo.svg";
import Image from "next/image";
import image1 from "../../public/assets/img/image1.png";
import image2 from "../../public/assets/img/image2.png";
import image4 from "../../public/assets/img/image4.png";
import image9 from "../../public/assets/img/image9.png";
import image19 from "../../public/assets/img/image19.png";
import image18 from "../../public/assets/img/image18.png";
import image17 from "../../public/assets/img/image17.png";
import image16 from "../../public/assets/img/image16.png";
import image15 from "../../public/assets/img/image15.png";
import image14 from "../../public/assets/img/image14.png";
import image13 from "../../public/assets/img/image13.png";
import image12 from "../../public/assets/img/image12.png";
import image10 from "../../public/assets/img/image10.png";
import image8 from "../../public/assets/img/image8.png";
import image7 from "../../public/assets/img/image7.png";
import image100 from "../../public/assets/img/image100.png";
import image98 from "../../public/assets/img/image98.png";
import image99 from "../../public/assets/img/image99.png";
import image11 from "../../public/assets/img/image11.png";
import Head from "next/head";

import { useState, useEffect } from "react";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("Photos");
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Portfolio - MKStudio</title>
        <meta
          name="description"
          content="MKStudio is
        a creative studio based in Nairobi, Kenya. We are a team of creative minds who are passionate about telling stories through images and videos. This is the portfolio page of MKStudio. Here you will find all our work.
        "
        />
        <meta
          property="og:title"
          content="MKStudio - The best creative studio in Nairobi Kenya "
        />
        <meta
          property="og:url"
          content={`https://www.mkstudioke.com/portfolio`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/mklogo.svg" />
      </Head>
      <div className="bg-[#ECE7DC] px-8 lg:px-16 -mt-4 pb-8">
        {/* Logo */}
        <Image priority src={Logo} alt="logo" className="h-auto w-auto" />
        <main
          className={
            "" + (activeTab === "Photos" ? "lg:grid lg:grid-cols-5 gap-0 " : "")
          }>
          <div>
            <p className="lg:text-5xl text-4xl font-medium mt-11 text-neutral-900">
              Gallery
            </p>
            {/* Tabs */}
            <div className="flex lg:flex-col gap-8 lg:gap-0 mt-5">
              <button
                onClick={() => setActiveTab("Photos")}
                className={
                  "text-2xl w-fit font-medium border-b-2 text-neutral-900 " +
                  (activeTab === "Photos"
                    ? "border-b-black "
                    : "border-transparent text-opacity-40")
                }>
                Photos
              </button>
              <button
                onClick={() => setActiveTab("Videos")}
                className={
                  "text-2xl w-fit font-medium border-b-2 text-neutral-900 lg:mt-7 " +
                  (activeTab === "Videos"
                    ? "border-b-black "
                    : "border-transparent text-opacity-40")
                }>
                Videos
              </button>
            </div>
            {}
            {/* Images */}
            <div
              className={
                "space-y-6 mt-10 lg:pl-6 " +
                (activeTab === "Photos" ? "show" : "hidden")
              }>
              <Image
                src={image1}
                quality={100}
                className="lg:w-[245px] w-full"
                alt="image"
              />
              <Image
                src={image2}
                quality={100}
                className="lg:w-[245px] w-full"
                alt="image"
              />
              <Image
                src={image4}
                quality={100}
                className="lg:w-[245px] w-full"
                alt="image"
              />
            </div>
          </div>
          <div
            className={
              "grid lg:grid-cols-4 col-span-4 transition-all ease-in-out duration-300 " +
              (activeTab === "Photos" ? "show" : "hidden")
            }>
            <div className="lg:-mt-[120px]">
              {/* Images */}
              <div className="space-y-6 mt-10">
                <Image
                  src={image19}
                  priority
                  quality={100}
                  className="lg:w-[245px] w-full"
                  alt="image"
                />
                <Image
                  src={image18}
                  priority
                  quality={100}
                  className="lg:w-[245px] w-full"
                  alt="image"
                />
                <Image
                  src={image17}
                  quality={100}
                  className="lg:w-[245px] w-full"
                  alt="image"
                />
                <Image
                  src={image16}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  quality={100}
                />
              </div>
            </div>
            <div className="lg:-mt-[80px]">
              {/* Images */}
              <div className="space-y-6 mt-10">
                <Image
                  src={image15}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  priority
                  quality={100}
                />
                <Image
                  src={image14}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  priority
                  quality={100}
                />
                <Image
                  src={image13}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  quality={100}
                />
                <Image
                  src={image12}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  quality={100}
                />
              </div>
            </div>
            <div className="lg:-mt-[140px]">
              {/* Images */}
              <div className="space-y-6 mt-10">
                <Image
                  src={image10}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  priority
                  quality={100}
                />
                <Image
                  src={image9}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  priority
                  quality={100}
                />
                <Image
                  src={image8}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  quality={100}
                />
                <Image
                  src={image7}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  quality={100}
                />
              </div>
            </div>
            <div className="lg:-mt-[230px]">
              {/* Images */}
              <div className="space-y-6 mt-10">
                <Image
                  src={image11}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  priority
                  quality={100}
                />
                <Image
                  src={image98}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  priority
                  quality={100}
                />
                <Image
                  src={image99}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  quality={100}
                />
                <Image
                  src={image100}
                  className="lg:w-[245px] w-full"
                  alt="image"
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className={"" + activeTab === "Videos" ? "show" : "hidden"}>
            {domLoaded && (
              <div className="mt-8 space-y-8">
                {" "}
                <video
                  autoPlay
                  muted
                  loop
                  id="myVideo"
                  className="lg:min-h-screen">
                  <source src="/2.webm" type="video/webm" />
                  <source src="/2.mp4" type="video/mp4" />
                </video>
                <video
                  autoPlay
                  muted
                  loop
                  id="myVideo"
                  className="lg:min-h-screen">
                  <source src="/3.webm" type="video/webm" />
                  <source src="/3.mp4" type="video/mp4" />
                </video>
                <video
                  autoPlay
                  muted
                  loop
                  id="myVideo"
                  className="lg:min-h-screen">
                  <source src="/1.webm" type="video/webm" />
                  <source src="/1.mp4" type="video/mp4" />
                </video>
                <video
                  autoPlay
                  muted
                  loop
                  id="myVideo"
                  className="lg:min-h-screen">
                  <source src="/5.webm" type="video/webm" />
                  <source src="/5.mp4" type="video/mp4" />
                </video>
                {/* <video
                  autoPlay
                  muted
                  loop
                  id="myVideo"
                  className="min-h-screen">
                  <source src="/6.webm" type="video/webm" />
                  <source src="/6.mp4" type="video/mp4" />
                </video> */}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Portfolio;
