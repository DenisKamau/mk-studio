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
import ReactPlayer from "react-player";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("Photos");
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mklogo.svg" />
      </Head>
      <div className="bg-[#ECE7DC] px-16 -mt-4 pb-8">
        {/* Logo */}
        <Image src={Logo} />
        <main
          className={
            "" + (activeTab === "Photos" ? "grid grid-cols-5 gap-0 " : "")
          }>
          <div>
            <p className="text-5xl font-medium mt-11 text-neutral-900">
              Gallery
            </p>
            {/* Tabs */}
            <div className="flex flex-col mt-5">
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
                  "text-2xl w-fit font-medium border-b-2 text-neutral-900 mt-7 " +
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
                "space-y-6 mt-10 pl-6 " +
                (activeTab === "Photos" ? "show" : "hidden")
              }>
              <Image src={image1} width="245" />
              <Image src={image2} width="245" />
              <Image src={image4} width="245" />
            </div>
          </div>
          <div
            className={
              "grid grid-cols-4 col-span-4 transition-all ease-in-out duration-300 " +
              (activeTab === "Photos" ? "show" : "hidden")
            }>
            <div className="-mt-[120px]">
              {/* Images */}
              <div className="space-y-6 mt-10">
                <Image src={image19} width="245" />
                <Image src={image18} width="245" />
                <Image src={image17} width="245" />
                <Image src={image16} width="245" />
              </div>
            </div>
            <div className="-mt-[80px]">
              {/* Images */}
              <div className="space-y-6 mt-10">
                <Image src={image15} width="245" />
                <Image src={image14} width="245" />
                <Image src={image13} width="245" />
                <Image src={image12} width="245" />
              </div>
            </div>
            <div className="-mt-[140px]">
              {/* Images */}
              <div className="space-y-6 mt-10">
                <Image src={image10} width="245" />
                <Image src={image9} width="245" />
                <Image src={image8} width="245" />
                <Image src={image7} width="245" />
              </div>
            </div>
            <div className="-mt-[230px]">
              {/* Images */}
              <div className="space-y-6 mt-10">
                <Image src={image11} width="245" />
                <Image src={image98} width="245" />
                <Image src={image99} width="245" />
                <Image src={image100} width="245" />
              </div>
            </div>
          </div>
          <div className={"" + activeTab === "Videos" ? "show" : "hidden"}>
            {domLoaded && (
              <div className="mt-8 space-y-8">
                {" "}
        <video autoPlay muted loop id="myVideo" className="min-h-screen">
          <source src="/2.mp4" type="video/mp4"  />
        </video>
   <video autoPlay muted loop id="myVideo" className="min-h-screen">
          <source src="/3.mp4" type="video/mp4"  />
        </video>
   <video autoPlay muted loop id="myVideo" className="min-h-screen">
          <source src="/1.mp4" type="video/mp4"  />
        </video>
    <video autoPlay muted loop id="myVideo" className="min-h-screen">
          <source src="/5.mp4" type="video/mp4"  />
        </video>
   <video autoPlay muted loop id="myVideo" className="min-h-screen">
          <source src="/6.mp4" type="video/mp4"  />
        </video>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Portfolio;
